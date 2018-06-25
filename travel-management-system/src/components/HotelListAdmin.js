import React, {Component} from 'react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import HotelService from '../services/HotelService.js'
import HotelList from "./HotelList";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import HotelListItem from "./HotelListItem";
import OwnerService from "../services/OwnerService";


export default class HotelListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            ownerName: '',
            owner: '',
            hotels: [],
            name: '',
            address: '',
            phone: '',
            rate: ''
        };


        this.ownerService = OwnerService.instance
        this.userNameChanged = this.userNameChanged.bind(this)
        this.deleteHotels = this.deleteHotels.bind(this)
        this.populateHotel = this.populateHotel.bind(this)
        this.updateHotel = this.updateHotel.bind(this)
        this.findAllHotels = this.findAllHotels.bind(this)
        this.hotelService = HotelService.instance
        this.setHotels = this.setHotels.bind(this)
        this.setName = this.setName.bind(this)
        this.setAddress = this.setAddress.bind(this)
        this.setPhone = this.setPhone.bind(this)
        this.setRate = this.setRate.bind(this)
        this.createHotel = this.createHotel.bind(this)
        this.setOwner = this.setOwner.bind(this)
    }


    componentDidMount() {
        this.findAllHotels();
    }

    componentWillReceiveProps(newProps){
        this.findAllHotels();
    }

    renderListOfHotels(){
        let hotels = null;
        if(this.state) {
            hotels = this.state.hotels.map((hotel) => {
                    return <HotelListItem key={hotel.id}
                                          hotel={hotel}
                                          deleteHotels={this.deleteHotels}
                                          populateHotel={this.populateHotel}/>
                }
            );
        }
        return (
            hotels
        )
    }

    userNameChanged(event){
        this.setState({
            ownerName: event.target.value
        })
    }

    setOwner(){
        this.ownerService
            .findOwnerByUsername(this.state.ownerName)
            .then((owner1) => {this.setState({owner: owner1[0]})});
    }

    setName(event){
        this.setState({
            name: event.target.value
        })
    }

    setPhone(event){
        this.setState({
            phone: event.target.value
        })
    }

    setAddress(event){
        this.setState({
            address: event.target.value
        })
    }

    setRate(event){
        this.setState({
            rate: event.target.value
        })
    }

    createHotel() {
        this.hotelService
            .createHotel(this.state.owner._id, this.state.name, this.state.address, this.state.phone, this.state.rate)
            .then(() => { this.findAllHotels(); });
    }

    deleteHotels(hotelId) {
        var answer = window.confirm("Click Ok to delete");
        if(answer == true) {
            this.hotelService
                .deleteHotels(hotelId)
                .then(() => {
                        this.findAllHotels()
                    }
                );
        }
    }

    populateHotel(hotel) {
        this.setState({
            name: hotel.name,
            address: hotel.address,
            phone: hotel.phone,
            rate: hotel.rate,
            id: hotel._id
        })
    }

    updateHotel() {
        this.hotelService
            .updateHotel(this.state.id, this.state.name, this.state.address, this.state.phone, this.state.rate)
            .then(() => {
                    this.findAllHotels()
                }
            );
    }

    setHotels(htls){
        this.setState({
            hotels: htls
        })
    }

    findAllHotels(){
        console.log("Inside find all hotels")
        this.hotelService
            .findAllHotels()
            .then(response => {this.setHotels(response)})
        console.log(this.state.hotels)
    }

    render() {
        return (
            <Switch>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <h2 style={{textAlign: "center"}}>Hotels</h2>
                            <br/>
                                <ul className="list-group">
                                    {this.renderListOfHotels()}
                                </ul>
                            <br/>
                            <label>Please fill the username of Hotel owner first</label>
                            <input onChange={this.userNameChanged}
                                   value={this.state.ownerName}
                                   placeholder="Enter Owner's username"
                                   className="form-control text-center font-weight-bold"/>
                            <button onClick={this.setOwner}
                                    className="btn btn-block btn-primary">
                                Click to verify username
                            </button>
                            <input onChange={this.setName}
                                   value={this.state.name}
                                   placeholder="Add Hotel Name"
                                   className="form-control text-center font-weight-bold"/>
                            <input onChange={this.setAddress}
                                   value={this.state.address}
                                   placeholder="Add Hotel Address"
                                   className="form-control text-center font-weight-bold"/>
                            <input onChange={this.setPhone}
                                   value={this.state.phone}
                                   placeholder="Add Hotel Phone"
                                   className="form-control text-center font-weight-bold"/>
                            <input onChange={this.setRate}
                                   value={this.state.rate}
                                   placeholder="Add Hotel Rate"
                                   className="form-control text-center font-weight-bold"/>
                            <button onClick={this.createHotel} className="btn btn-dark btn-block">
                                <i className="fa fa-plus"></i>
                            </button>
                            <button onClick={this.updateHotel} className="btn btn-dark btn-block">
                                <i className="fa fa-pencil"></i>
                            </button>
                        </div>
                        {/*<div className="col-8">*/}
                            {/*<Route path="/course/:courseId/module/:moduleId"*/}
                            {/*component={RoomEditor}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Switch>
        )
    }
}