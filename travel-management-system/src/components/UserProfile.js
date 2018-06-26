import React, { Component } from "react";
import {BrowserRouter as Router ,Route, Link } from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel, ListGroupItem} from "react-bootstrap";
import UserServiceClient from '../services/UserService';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId:"",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            phone: "",
            email:"",
            address:"",
            bookings:[]
        };
        this.userService = UserServiceClient.instance;
        // this.bookingService = BookingServiceClient.instance;
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.userId = this.props.match.params.userId;
        this.renderProfile(this.userId);
    }

    // findAllBookingsByUserId(){
    //     this
    //         .bookingService
    //         .findAllBookingsByUserId(this.state.userId)
    //         .then(bookings => {this.setState({bookings: bookings})});
    // }


    renderProfile(userId){
        this.userService
            .findCustomerById(userId)
            .then(user => this.setProfile(user[0]));
    }
    renderAllBookingsOfUser(){
        let bookings = null;
        if(this.state) {
            bookings = this.state.bookings.map((booking) =>{
                    return <ListGroupItem>
                        <b>Booking Id:</b> booking._id
                    </ListGroupItem>
                }
            );
        }
        return (
            bookings
        )
    }

    setProfile(user){
        this.setState({userId: user._id});
        this.setState({username: user.username});
        this.setState({password: user.password});
        this.setState({firstName: user.firstName});
        this.setState({lastName: user.lastName});
        this.setState({dateOfBirth: user.dateOfBirth});
        this.setState({phone: user.phoneNumber});
        this.setState({address: user.address});
        this.setState({email: user.email});

    }
    validateForm() {
        return this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.username.length > 0 &&
            this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.dateOfBirth.length > 0 &&
            this.state.phone.length > 0 &&
            this.state.address.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    updateUser() {
        let customer = {
            _id : this.state.userId,
            password : this.state.password,
            lastName : this.state.lastName,
            firstName : this.state.firstName,
            dateOfBirth : this.state.dateOfBirth,
            email : this.state.email,
            address : this.state.address,
            phoneNumber : this.state.phone
        };
        this.userService
            .updateCustomer(this.state.userId, customer);
    }

    deleteUser() {
        this.userService
            .deleteCustomer(this.state.userId);
        this.userService
            .logout()
            .then(() => window.location.assign(`/`));

    }


    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-4 Form">
                        <Form horizontal>
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
                            {/*<LoaderButton*/}
                            {/*block*/}
                            {/*bsSize="large"*/}
                            {/*disabled={!this.validateForm()}*/}
                            {/*type="submit"*/}
                            {/*text="Update"*/}
                            {/*/>*/}
                            {/*<LoaderButton*/}
                            {/*className="btn-danger"*/}
                            {/*block*/}
                            {/*bsSize="large"*/}
                            {/*type="submit"*/}
                            {/*text="DELETE ACCOUNT"*/}
                            {/*/>*/}
                            <button onClick={this.updateUser}>Update</button>
                            <button onClick={this.deleteUser}>Delete</button>
                        </Form>
                    </div>
                    <div className="col-8 SubForm">
                        {this.renderAllBookingsOfUser()}
                    </div>
                </div>
            </Router>
        );
    }
}
