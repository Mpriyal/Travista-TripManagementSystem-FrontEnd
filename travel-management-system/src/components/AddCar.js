import React, { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./AddYourBuisness.css";

export default class AddCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            car_info: {
                        address: "",
                        vehicle_info: {
                            transmission: "",
                            fuel: "",
                            air_conditioning: "",
                            category: "",
                            type: ""
                        },
                        price: {
                                type: "",
                                amount: "",
                                currency: ""
                            }
        }
        }
    }

    validateForm() {
        return this.state.car_info.address.length > 0 &&
            this.state.car_info.vehicle_info.transmission > 0 &&
            this.state.car_info.vehicle_info.fuel > 0 &&
            this.state.car_info.vehicle_info.type > 0 &&
            this.state.car_info.vehicle_info.air_conditioning > 0 &&
            this.state.car_info.vehicle_info.category > 0 &&
            this.state.car_info.price.amount > 0 &&
            this.state.car_info.price.type> 0 &&
            this.state.car_info.price.currency > 0
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
            <div className="Login">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="carAddress" bsSize="large">
                    <ControlLabel>Car Address</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.car_info.address}
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