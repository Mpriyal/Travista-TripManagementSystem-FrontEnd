import React, {Component} from 'react'
import logo from '../logo.svg';
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div className="body-width">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <div className="navbar-brand">Travista</div>
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
                                        <div className="nav-link">Hotels
                                            <span className="sr-only">(current)</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/restaurants'>
                                        <div className="nav-link">Restaurants</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/attractions'>
                                        <div className="nav-link">Attractions</div>
                                    </Link>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*<Link to='/blogs'>*/}
                                {/*<div className="nav-link" href="#">Travel Blogs</div>*/}
                                {/*</Link>*/}
                                {/*</li>*/}
                            </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#"><i className="fa fa-user btn"/> Sign Up</a></li>
                            <li className="nav-item"><a href="#"><i className="fa fa-sign-in btn"/> Login</a></li>
                        </ul>
                </div>
            </nav>
                </div>
            </div>
        )
    }
}