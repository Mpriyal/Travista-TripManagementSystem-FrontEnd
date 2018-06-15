import React, {Component} from 'react'
import logo from '../logo.svg';
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="body-width">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <a className="navbar-brand" href="#">Travista</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="container" id="navbarSupportedContent">
                        {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to='/hotels'>
                                    <a className="nav-link" href="#">Hotels
                                        <span className="sr-only">(current)</span>
                                    </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Restaurants</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Flights</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Attractions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Travel Blogs</a>
                                </li>
                                {/*<li className="nav-item dropdown">*/}
                                {/*<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                                {/*data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                {/*Dropdown*/}
                                {/*</a>*/}
                                {/*<div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                                {/*<a className="dropdown-item" href="#">Action</a>*/}
                                {/*<a className="dropdown-item" href="#">Another action</a>*/}
                                {/*<div className="dropdown-divider"></div>*/}
                                {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                                {/*</div>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item">*/}
                                {/*<a className="nav-link disabled" href="#">Disabled</a>*/}
                                {/*</li>*/}
                            </ul>
                            <div className="float-right">
                                <button className="btn btn-primary btn-sm">
                                    Sign Up
                                </button>
                                <div className="divider"/>
                                <button type="submit" className="btn btn-success btn-sm">
                                    Sign In
                                        {/*// onClick={this.OnSignin}>Sign In*/}
                                </button>
                            </div>
                            {/*<form className="form-inline my-2 my-lg-0">*/}
                            {/*<input className="form-control mr-sm-2" type="search" placeholder="Search"*/}
                            {/*aria-label="Search"/>*/}
                            {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">*/}
                            {/*Search*/}
                            {/*</button>*/}
                            {/*</form>*/}
                        </div>
                    </nav>
                    {/*<section style={ backgroundImage }>*/}
                    {/*</section>*/}
                </div>
            </div>
        )
    }
}