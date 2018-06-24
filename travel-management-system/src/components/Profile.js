import React, { Component } from "react";
import {BrowserRouter as Router ,Route, Link } from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import UserServiceClient from '../services/UserService';
import LoaderButton from "../components/LoaderButton";
import "./Profile.css";
import HotelManager from "./HotelManager";
import AddCar from "./AddCar";
import AddRestaurant from "./AddRestaurant";

export default class AddYourBusiness extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId:"123",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            businessName: "",
            typeOfBusiness:"HOTEL",
            phone: "",
            email:"",
            address:"",
            buttonDisplay: true
        };
        this.userService = UserServiceClient.instance;
        this.setButtonDisplay = this.setButtonDisplay.bind(this);
    }

    renderProfile(userId){
            this.userService
                .findUserById(userId)
                .then(user => this.setProfile(user));
    }

    setProfile(user){
        for (var key in user) {
            this.setState({key: user[key]});
        }
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
    };

    handleSubmit = event => {
        event.preventDefault();
    };
    setButtonDisplay(){
        this.setState({buttonDisplay : !this.state.buttonDisplay})
    }
    addBusiness(param){
        if(this.state.buttonDisplay) {
            switch (param) {
                case 'HOTEL':
                    return <div>
                        <Link to={`/profile/${this.state.userId}/hotel`}>
                            <LoaderButton
                                block
                                bsSize="large"
                                type="submit"
                                text="UPDATE YOUR HOTEL DETAILS"
                                onClick={this.setButtonDisplay}/>
                        </Link>
                    </div>;
                case 'RESTAURANT':
                    return <div>
                        <Link to={`/profile/${this.state.userId}/restaurant`}>
                            <LoaderButton
                                block
                                bsSize="large"
                                type="submit"
                                text="ADD RESTAURANT"
                                onClick={this.setButtonDisplay}
                            />
                        </Link>
                    </div>;
                case 'CAR':
                    return <div>
                        <Link to={`/profile/${this.state.userId}/car`}>
                            <LoaderButton
                                block
                                bsSize="large"
                                type="submit"
                                text="ADD CAR"
                                onClick={this.setButtonDisplay}
                            />
                        </Link>
                    </div>;
            }
        }
    };

    render() {
        return (
            <Router>
            <div className="row">
                {this.renderProfile()}
                <div className="col-4 Form">
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
                    <FormGroup className="form-inline"
                               controlId="typeOfBusiness"
                               bsSize="large">
                        <ControlLabel className="col-4">Business Type</ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="text"
                            value={this.state.typeOfBusiness}
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
                    <FormGroup className="form-inline" controlId="address" bsSize="large">
                        <ControlLabel className="col-4">Address </ControlLabel>
                        <FormControl
                            className="col-8"
                            autoFocus
                            type="text"
                            value={this.state.address}
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
                    <div className="Form">
                        {this.addBusiness(this.state.typeOfBusiness)}
                    </div>
                    <Route path="/profile/:userId/hotel" exact component={HotelManager} />
                    <Route path="/profile/:userId/restaurant" exact component={AddRestaurant} />
                    <Route path="/profile/:userId/car" exact component={AddCar} />
                </div>
            </div>
          </Router>
        );
    }
}