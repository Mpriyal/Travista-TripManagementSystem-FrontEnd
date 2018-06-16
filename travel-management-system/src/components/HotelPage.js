import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import HotelService from '../services/HotelService.js'


export default class HotelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '42.3398198',
            longitude: '-71.0875516',
            checkIn: moment(),
            checkOut: moment(),
            radius: '10',
            inputText: '',
            hotels: []
        };
        this.inputTextChanged = this.inputTextChanged.bind(this);
        this.findAllHotels = this.findAllHotels.bind(this);
        this.findAllHotelsByLatLong = this.findAllHotelsByLatLong.bind(this);
        this.checkInDateChange = this.checkInDateChange.bind(this);
        this.checkOutDateChange = this.checkOutDateChange.bind(this);
        this.hotelService = HotelService.instance;
    }

    checkInDateChange(date) {
        this.setState({
            checkIn : moment(date)
        });
    }

    inputTextChanged(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    checkOutDateChange(date) {
        this.setState({
            checkOut : moment(date)
        });
    }

    findAllHotels(){
        this.hotelService
            .findLatLongOfHotel(this.state.inputText)
            .then((results) => {
                this.setLatLong(results); })
            .then(() => this.findAllHotelsByLatLong());

    }

    setLatLong(results){
        this.setState({
            latitude:  results.results[0].geometry.location.lat,
            longitude: results.results[0].geometry.location.lng })
    }

    findAllHotelsByLatLong() {
        this.hotelService
            .findAllHotelsByLatLong(this.state.latitude,
                this.state.longitude,
                this.state.checkIn.format("YYYY-MM-DD"),
                this.state.checkOut.format("YYYY-MM-DD"),
                this.state.radius)
            .then((result) => {
                console.log(result);
                this.setState({
                    hotels: result})
            });
    }


    render() {
        return (<div className="search">
                <form>
                    <div className="form-row search">
                        <div className="col">
                        <input className="form-control amber-border"
                               type="text"
                               placeholder="Location"
                               onChange={this.inputTextChanged}
                               aria-label="Search"
                               ref="searchValue"/>
                        </div>
                        <div className="col">
                        <input
                            type= "date"
                            className="form-control amber-border"
                            onChange={this.checkInDateChange}
                        />
                        </div>
                         <div className="col">

                        <input
                            type="date"
                            className="form-control amber-border"
                            onChange={this.checkOutDateChange}
                        />
                         </div>
                        <div className="col">
                        <button className ="fa fa-search btn " aria-hidden="true"
                                type="button"
                               onClick={this.findAllHotels}>
                            Search
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}