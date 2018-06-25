import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import OwnerServiceClient from "../services/OwnerService";
import UserServiceClient from "../services/UserService";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
        this.userService = UserServiceClient.instance;
        this.ownerService = OwnerServiceClient.instance;
        this.currentOwner = "";
        this.currentUser =  "";
        this.ownerService.findCurrentOwner().then((response) => {this.currentOwner = response});
        this.userService.findCurrentUser().then((response) => {this.currentUser = response});
        console.log(this.ownerService.findCurrentOwner);
        this.hidden = this.currentOwner.status !== 403 || this.currentUser.status !== 403
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
                                <Link to='/cars'>
                                    <div className="nav-link">Rent Cars</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/attractions'>
                                    <div className="nav-link">Attractions</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin'>
                                    <div className="nav-link">Admin</div>
                                </Link>
                            </li>
                            </ul>
                        <ul className="navbar-nav">
                            <li className= {this.hidden ? "nav-item" : "hidden" }><Link to ="/signup"><i className="fa fa-user btn"/> Sign Up</Link></li>
                            <li className= {this.hidden ? "nav-item" : "hidden" }><Link to ="/login"><i className="fa fa-sign-in btn"/> Login</Link></li>
                            <li className= {this.hidden ? "nav-item" : "hidden" }><Link to ="/businessSignIn"><i className="fa fa-briefcase btn"/> Business</Link></li>
                        </ul>
                </div>
            </nav>
            </div>
        )
    }
}