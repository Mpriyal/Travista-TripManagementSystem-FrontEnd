import React, {Component} from 'react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import HotelService from '../services/HotelService.js'
import HotelList from "./HotelList";
import {BrowserRouter as Router} from "react-router-dom";


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

    checkInDateChange(event) {
        this.setState({
            checkIn : moment(event.target.value)
        });
    }

    inputTextChanged(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    checkOutDateChange(event) {
        this.setState({
            checkOut : moment(event.target.value)
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
                    hotels: result.results})
            });
    }


    render() {
        return (
            <Router>
                <div>
                <div className="search align-content-center">
                    <form>
                        <div className="form-row align-content-center search">
                            <div className=" form-inline col">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Location</span>
                                </div>
                                <input className="form-control amber-border"
                                       type="text"
                                       placeholder="Location"
                                       onChange={this.inputTextChanged}
                                       aria-label="Search"
                                       ref="searchValue"/>
                            </div>
                            <div className="col form-inline">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">CheckIn</span>
                                </div>
                                <input
                                    type= "date"
                                    className="form-control amber-border"
                                    onChange={this.checkInDateChange}
                                    />
                            </div>
                            <div className="col form-inline">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">CheckOut</span>
                                </div>
                                <input
                                    type="date"
                                    className="form-control amber-border"
                                    onChange={this.checkOutDateChange}
                                />
                            </div>
                            <div className="col form-control-lg">
                                <button className ="fa fa-search btn " aria-hidden="true"
                                        type="button"
                                        onClick={this.findAllHotels}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div>
                        <HotelList data={this.state.hotels}/>
                    </div>
                </div>
            </Router>
        )
    }
}