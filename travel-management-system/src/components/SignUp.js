import React, {Component} from "react";
import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./SignUp.css";
import UserService from "../services/UserService";

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username: "",
            password: "",
            confirmPassword: "",
            newUser: null
        };
        this.UserService = UserService.instance;
        this.registerCustomer = this.registerCustomer.bind(this)
    }

    validateForm() {
        return (
            this.state.username.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // handleChange(event) {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({isLoading: true});

        this.setState({newUser: "test"});

        this.setState({isLoading: false});
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({isLoading: true});
    }

    registerCustomer() {
        console.log(this.state.username)
        var customer = {
            username: this.state.username,
            password: this.state.password
        }
        this.UserService
            .createCustomer(customer)
            .then((customer) => {window.location.assign(`/profile/${customer._id}`);});
        console.log(customer.username);
        console.log(customer);
    }


renderForm()
{
    return (
        <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
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
            {/*<LoaderButton*/}
            {/*block*/}
            {/*bsSize="large"*/}
            {/*disabled={!this.validateForm()}*/}
            {/*type="submit"*/}
            {/*isLoading={this.state.isLoading}*/}
            {/*text="Signup"*/}
            {/*loadingText="Signing up…"*/}
            {/*/>*/}
            <button onClick={this.registerCustomer}>Sign Up</button>
        </form>
    );
}

render()
{
    return (
        <div className="Signup">
            {this.renderForm()}
        </div>
    );
}
}