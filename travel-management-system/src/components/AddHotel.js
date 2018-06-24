import React, { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import HotelServiceClient from "../services/HotelService";

export default class AddHotel extends Component {
    constructor(props) {
        super(props);

        this.state = {
                name:"",
                address: "",
                phone: "",
                rate: "",
                latitude:"",
                longitude:""
        };
        this.hotelService = HotelServiceClient.instance;
        this.addHotel = this.addHotel.bind(this);
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
    addHotel(){
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
            .createHotel(hotel);
    }
    setLatLong(results){
        this.setState({
            latitude:  results.results[0].geometry.location.lat,
            longitude: results.results[0].geometry.location.lng })
    }

    render() {
        return (
            <div className="SubForm">
                <Form horizontal>
                    <FormGroup className="form-inline" controlId="name" bsSize="large">
                        <ControlLabel className="col-4">Hotel Name</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            className="col-8"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="address" bsSize="large">
                        <ControlLabel className="col-4">Hotel Address</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            className="col-8"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="phone" bsSize="large">
                        <ControlLabel className="col-4">Phone</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            className="col-8"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="rate" bsSize="large">
                        <ControlLabel className="col-4">Rate</ControlLabel>
                         <FormControl
                                autoFocus
                                type="text"
                                className="col-8"
                                value={this.state.rate}
                                onChange={this.handleChange}
                          />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Add Your Hotel"
                        onClick={this.addHotel}
                    />
                </Form>
            </div>
        );
    }
}