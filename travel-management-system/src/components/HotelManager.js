import React, { Component } from "react";
import {BrowserRouter as Router ,Route, Link } from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel, ListGroup, ListGroupItem} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import HotelServiceClient from "../services/HotelService";
import AddRoom from "./AddRoom";

export default class HotelManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId:"",
            hotelId:"",
            name:"",
            address: "",
            phone: "",
            rate: "",
            latitude:"",
            longitude:"",
            rooms:[]
        };
        this.hotelService = HotelServiceClient.instance;
        this.updateHotel = this.updateHotel.bind(this);
    }
    setHotelId(hotelId){
        this.setState({hotelId : hotelId})
    }
    setUserId(userId){
        this.setState({userId : userId})
    }
    componentDidMount() {
        this.setHotelId(this.props.hotelId);
        this.setUserId(this.props.userId);
    }
    componentWillReceiveProps(newProps){
        this.setHotelId(newProps.hotelId);
        this.setUserId(newProps.userId);
        this.findAllRoomsByHotelId(newProps.hotelId);
    }
    validateForm() {
        return  this.state.name.length > 0 &&
            this.state.address.length > 0 &&
            this.state.phone.length > 0 &&
            this.state.rate.length > 0
    }

    handleChange = event => {
        this.setState({
            [event.target.id] : event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };
    updateHotel(){
        this.hotelService
            .findLatLongOfHotel(this.state.address)
            .then((results) => {
                this.setLatLong(results);
            });
        let hotel = {name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            rate: this.state.rate,
            latitude: this.state.latitude,
            longitude: this.state.longitude
        };
        this.hotelService
            .updateHotel(hotel);
    }
    setLatLong(results){
        this.setState({
            latitude:  results.results[0].geometry.location.lat,
            longitude: results.results[0].geometry.location.lng })
    }
    findAllRoomsByHotelId(){
        this
            .hotelService
            .findAllRoomsByHotelId(this.state.hotelId)
            .then(rooms => {this.setState({rooms: rooms})});
    }
    renderHotelRooms(){
        let rooms = null;
        if(this.state) {
            rooms = this.state.rooms.map((room) =>{
                    return <ListGroupItem>
                        <b>Room Type:</b> room.type
                        <b>Number of Beds:</b> room.numberOfBeds
                    </ListGroupItem>
                }
            );
        }
        return (
            rooms
        )
    }

    render() {
        return (
            <Router>
            <div>
            <div className="SubForm">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup className="form-inline" controlId="name" bsSize="large">
                        <ControlLabel className="col-4">Hotel Name</ControlLabel>
                        <FormControl
                            autoFocus
                            className="col-8"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="address" bsSize="large">
                        <ControlLabel className="col-4">Hotel Address</ControlLabel>
                        <FormControl
                            autoFocus
                            className="col-8"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="phone" bsSize="large">
                        <ControlLabel className="col-4">Phone</ControlLabel>
                        <FormControl
                            autoFocus
                            className="col-8"
                            type="text"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="rate" bsSize="large">
                        <ControlLabel className="col-4">Rate</ControlLabel>
                        <FormControl
                            autoFocus
                            className="col-8"
                            type="text"
                            value={this.state.rate}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Update Your Hotel"
                        onClick={this.updateHotel}
                    />
                </Form>
            </div>
                <ListGroup>
                    {this.renderHotelRooms()}
                </ListGroup>
                <div>
                    <Link to={`/profile/${this.state.userId}/hotel/${this.state.hotelId}`}>
                        <LoaderButton
                            block
                            bsSize="large"
                            type="submit"
                            text="ADD ROOM"/>
                    </Link>
                        <Route path="/profile/:userId/hotel/:hotelId" exact component={AddRoom} />
                </div>
            </div>
            </Router>
        );
    }
}