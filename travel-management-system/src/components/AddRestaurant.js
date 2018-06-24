import React, { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";


export default class AddRestaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantId: "",
            name: "",
            address: "",
            city: "",
            phone: "",
            price: ""
        }
    }

    validateForm() {
        return this.state.address.length > 0 &&
            this.state.name.length > 0 &&
            this.state.city.length> 0 &&
            this.state.phone.length > 0 &&
            this.state.price.length > 0

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
            <div className="SubForm">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup className="form-inline" controlId="name" bsSize="large">
                        <ControlLabel className="col-4">Restaurant Name</ControlLabel>
                        <FormControl
                            autoFocus
                            className="col-8"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                        <FormGroup className="form-inline" controlId="address" bsSize="large">
                            <ControlLabel className="col-4">Address</ControlLabel>
                            <FormControl
                                autoFocus
                                className="col-8"
                                type="text"
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="form-inline" controlId="city" bsSize="large">
                            <ControlLabel className="col-4">City</ControlLabel>
                            <FormControl
                                autoFocus
                                className="col-8"
                                type="text"
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="form-inline" controlId="price" bsSize="large">
                            <ControlLabel className="col-4">Price</ControlLabel>
                            <FormControl
                                autoFocus
                                className="col-8"
                                type="text"
                                value={this.state.price}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Add Your Restaurant"
                    />
                </Form>
            </div>
        );
    }
}