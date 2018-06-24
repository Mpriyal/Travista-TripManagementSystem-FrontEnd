import React, { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel,ListGroup, ListGroupItem} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";

export default class AddCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
                address: "",
                transmission: "",
                fuel: "",
                air_conditioning: "",
                category: "",
                type: "",
                rate: "",
                startDate: "",
                endDate: ""
            }
    }

    validateForm() {
        return this.state.address.length > 0 &&
            this.state.transmission.length > 0 &&
            this.state.fuel.length > 0 &&
            this.state.type.length > 0 &&
            this.state.air_conditioning.length > 0 &&
            this.state.category.length > 0 &&
            this.state.rate.length > 0 &&
            this.state.startDate.length > 0 &&
            this.state.endDate.length
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    renderCarBooking(){

    }

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="SubForm">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup className="form-inline" controlId="address" bsSize="large">
                    <ControlLabel className="col-4">Car Address</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        className="col-8"
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup className="form-inline" controlId="transmission" bsSize="large">
                            <ControlLabel className="col-4">Transmission</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                className="col-8"
                                value={this.state.transmission}
                                onChange={this.handleChange}
                            />
                </FormGroup>
                        <FormGroup className="form-inline" controlId="fuel" bsSize="large">
                            <ControlLabel className="col-4">Fuel</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                className="col-8"
                                value={this.state.fuel}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="form-inline" controlId="airConditioning" bsSize="large">
                            <ControlLabel className="col-4">Air Conditioning</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                className="col-8"
                                value={this.state.air_conditioning}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="form-inline" controlId="category" bsSize="large">
                            <ControlLabel className="col-4">Category</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                className="col-8"
                                value={this.state.category}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    <FormGroup className="form-inline" controlId="type" bsSize="large">
                        <ControlLabel className="col-4">Type</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            className="col-8"
                            value={this.state.type}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="type" bsSize="large">
                    <ControlLabel className="col-4">Rate</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                className="col-8"
                                value={this.state.rate}
                                onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="startDate" bsSize="large">
                            <ControlLabel className="col-4">Start Date</ControlLabel>
                            <FormControl
                                autoFocus
                                type="date"
                                className="col-8"
                                value={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="form-inline" controlId="endDate" bsSize="large">
                            <ControlLabel className="col-4">End Date</ControlLabel>
                            <FormControl
                                autoFocus
                                type="date"
                                className="col-8"
                                value={this.state.endDate}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Add Your Car"
                    />
                </Form>
                <ListGroup>
                    {this.renderCarBooking()}
                </ListGroup>
            </div>
        );
    }
}