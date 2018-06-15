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
            checkIn: moment('2018-06-01'),
            checkOut: moment('2018-06-11'),
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
            checkIn : date
        });
    }

    inputTextChanged(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    checkOutDateChange(date) {
        this.setState({
            checkOut : date
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
        return (
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-8">
                <div className="search">
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <input className="form-control my-0 py-1 amber-border"
                               type="text"
                               placeholder="Search Hotels by Location"
                               onChange={this.inputTextChanged}
                               aria-label="Search"
                               ref="searchValue"/>
                        <div className="input-group-append"/>
                        <span className="input-group-text amber lighten-3" id="basic-text1">
                            <i className="fa fa-search text-grey" aria-hidden="true"
                               onClick={this.findAllHotels}/>
                        </span>
                    </div>
                    <br/>
                    {/*<div className="row">*/}
                            <DatePicker
                                placeholderText="Date From:"
                                className="form-control"
                                value = {this.state.checkIn}
                                selected={this.state.checkIn}
                                onChange={this.checkInDateChange}
                            />
                    {/*</div>*/}
                    <br/>
                    {/*<div className="row">*/}
                        <DatePicker
                            placeholderText="Date to:"
                            className="form-control"
                            value={this.state.checkOut}
                            selected={this.state.checkOut}
                            onChange={this.checkOutDateChange}
                        />
                    {/*</div>*/}
                </div>

                </div>
                <div className="col-sm-2">
                </div>
            </div>
        )
    }
}