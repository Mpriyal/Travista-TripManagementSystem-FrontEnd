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
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (<div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top">
                    <div className="navbar-brand" href="#">
                        <img src={logo} className="App-logo" alt="logo"/>
                        Travista
                    </div>
                    <button onClick={this.toggleNavbar}
                            className={`${classTwo}`}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i className="navbar-toggler-icon"/>
                    </button>
                    <div
                        id="navbarSupportedContent"
                        className={`${classOne}`}>
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
                            </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to ="/signup"><i className="fa fa-user btn"/> Sign Up</Link></li>
                            <li className="nav-item"><Link to ="/login"><i className="fa fa-sign-in btn"/> Login</Link></li>
                        </ul>
                </div>
            </nav>
            </div>
        )
    }
}