import React, { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Profile.css";

export default class AddYourBusiness extends Component {
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
            typeOfBusiness:""
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
            this.state.address.length > 0;
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
            <div className="row">
                <div className="col-4">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup className="form-inline" controlId="firstName" bsSize="large">
                        <ControlLabel className="col-4">First Name </ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="test"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="lastName" bsSize="large">
                        <ControlLabel className="col-4">Last Name </ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="dateOfBirth" bsSize="large">
                        <ControlLabel className="col-4">Date of Birth </ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="date"
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="email" bsSize="large">
                        <ControlLabel className="col-4">Email </ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="businessName" bsSize="large">
                        <ControlLabel className="col-4 ">Business Name </ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="text"
                            value={this.state.businessName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="address" bsSize="large">
                        <ControlLabel className="col-4">Business Address </ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="text"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="phone" bsSize="large">
                        <ControlLabel className="col-4">Phone Number </ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="text"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="username" bsSize="large">
                        <ControlLabel className="col-4">Username </ControlLabel>
                        <FormControl
                            className="col-8"
                            value={this.state.username}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup className="form-inline" controlId="password" bsSize="large">
                        <ControlLabel className="col-4">Password </ControlLabel>
                        <FormControl
                            className="col-8"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Update"
                    />
                </Form>
                </div>
                <div className="col-8">
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Add Hotel"
                    />
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Add Restaurant"
                    />
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        text="Add Car"
                    />
                 </div>

            </div>
        );
    }
}