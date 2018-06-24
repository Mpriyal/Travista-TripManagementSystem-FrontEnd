import React, { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./AddYourBuisness.css";

export default class AddHotel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            businessName: "",
            phone: "",
            email:"",
            address:"",
            typeOfBusiness:"",
            confirmPassword: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.username.length > 0 &&
            this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.businessName.length > 0 &&
            this.state.dateOfBirth.length > 0 &&
            this.state.phone.length > 0 &&
            this.state.address.length > 0 &&
            this.state.typeOfBusiness.length > 0 && this.state.password === this.state.confirmPassword;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="firstName" bsSize="large">
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl
                            autoFocus
                            type="test"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="lastName" bsSize="large">
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="dateOfBirth" bsSize="large">
                        <ControlLabel>Date of Birth</ControlLabel>
                        <FormControl
                            autoFocus
                            type="date"
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="businessName" bsSize="large">
                        <ControlLabel>Business Name</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.businessName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="address" bsSize="large">
                        <ControlLabel>Business Address</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="typeOfBusiness">
                        <ControlLabel>Business Type</ControlLabel>
                        <FormControl componentClass="select"
                                     placeholder="Business Type"
                                     onChange={this.handleChange}>
                            <option value="HOTEL">HOTEL</option>
                            <option value="RESTAURANT">RESTAURANT</option>
                            <option value="CAR">CAR</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="phone" bsSize="large">
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            value={this.state.username}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup controlId="confirmPassword" bsSize="large">
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Login"
                    />
                </Form>
            </div>
        );
    }
}