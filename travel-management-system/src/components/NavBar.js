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
                        <div className="navbar-brand" href="#">Travista</div>
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
                                        <div className="nav-link" href="#">Hotels
                                            <span className="sr-only">(current)</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/restaurants'>
                                        <div className="nav-link" href="#">Restaurants</div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/attractions'>
                                        <div className="nav-link" href="#">Attractions</div>
                                    </Link>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*<Link to='/blogs'>*/}
                                {/*<div className="nav-link" href="#">Travel Blogs</div>*/}
                                {/*</Link>*/}
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
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}