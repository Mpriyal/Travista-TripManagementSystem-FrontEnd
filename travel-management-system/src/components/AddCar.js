import React, { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
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

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="Form">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <h2 className = "align-content-center">Enter Car Details</h2>
                    <FormGroup controlId="carAddress" bsSize="large">
                    <ControlLabel>Car Address</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                    <FormGroup controlId="vehicle_info" bsSize="large">
                        <ControlLabel>Vehicle Info</ControlLabel>
                        <FormGroup controlId="transmission" bsSize="large">
                            <ControlLabel>Transmission</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.car_info.vehicle_info.transmission}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="fuel" bsSize="large">
                            <ControlLabel>Fuel</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.car_info.vehicle_info.fuel}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="airConditioning" bsSize="large">
                            <ControlLabel>Air Conditioning</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.car_info.vehicle_info.air_conditioning}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="category" bsSize="large">
                            <ControlLabel>Category</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.car_info.vehicle_info.category}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="type" bsSize="large">
                            <ControlLabel>Type</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.car_info.vehicle_info.type}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup controlId="price" bsSize="large">
                        <ControlLabel>Price</ControlLabel>
                        <FormGroup controlId="type" bsSize="large">
                            <ControlLabel>Type</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.car_info.price.type}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="amount" bsSize="large">
                            <ControlLabel>Amount</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.car_info.price.amount}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="airConditioning" bsSize="large">
                            <ControlLabel>Currency</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.car_info.price.currency}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup controlId="availability" bsSize="large">
                        <ControlLabel>Availability</ControlLabel>
                        <FormGroup controlId="startDate" bsSize="large">
                            <ControlLabel>Start Date</ControlLabel>
                            <FormControl
                                autoFocus
                                type="date"
                                value={this.state.car_info.available.startDate}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="endDate" bsSize="large">
                            <ControlLabel>End Date</ControlLabel>
                            <FormControl
                                autoFocus
                                type="date"
                                value={this.state.car_info.available.endDate}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Add Your Car"
                    />
                </Form>
            </div>
        );
    }
}