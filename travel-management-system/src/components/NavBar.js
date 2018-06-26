// import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import OwnerServiceClient from "../services/OwnerService";
// import UserServiceClient from "../services/UserService";
//
// export default class NavBar extends Component {
//     constructor(props) {
//         super(props);
//         this.toggleNavbar = this.toggleNavbar.bind(this);
//         this.state = {
//             collapsed: true,
//             hidden: false,
//             user: ''
//         };
//         this.userService = UserServiceClient.instance;
//         this.ownerService = OwnerServiceClient.instance;
//         this.findCurrentUserStatus()
//         this.findCurrentUser()
//     }
//     toggleNavbar() {
//         this.setState({
//             collapsed: !this.state.collapsed,
//         });
//     }
//     findCurrentUserStatus(){
//        return  this.userService.findCurrentUser().then(response => this.checkUserStatus(response.status));
//     }
//     findCurrentUser(){
//         return this.userService.findCurrentUser().then(response => this.checkUser(response.json))
//     }
//     checkUserStatus(status){
//         this.setState({hidden: status !== 403})
//     }
//     checkUser(user){
//         this.setState({user: user})
//         console.log(this.state.user.username)
//     }
//     // logout(){
//     //     this.userService
//     //         .logout()
//     //     this.setState({hidden: false})
//     // }
//     render() {
//         const collapsed = this.state.collapsed;
//         const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
//         const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
//
//         return (<div className="container">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top">
//                     <div className="navbar-brand" href="#">
//                         Travista
//                     </div>
//                     <button onClick={this.toggleNavbar}
//                             className={`${classTwo}`}
//                             type="button"
//                             data-toggle="collapse"
//                             data-target="#navbarSupportedContent"
//                             aria-controls="navbarSupportedContent"
//                             aria-expanded="false"
//                             aria-label="Toggle navigation">
//                         <i className="navbar-toggler-icon"/>
//                     </button>
//                     <div
//                         id="navbarSupportedContent"
//                         className={`${classOne}`}>
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item active">
//                                 <Link to='/hotels'>
//                                     <div className="nav-link">Hotels
//                                         <span className="sr-only">(current)</span>
//                                     </div>
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to='/restaurants'>
//                                     <div className="nav-link">Restaurants</div>
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to='/cars'>
//                                     <div className="nav-link">Rent Cars</div>
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to='/attractions'>
//                                     <div className="nav-link">Attractions</div>
//                                 </Link>
//                             </li>
//                             {/*<li className={this.state.user.username === 'admin' ? "nav-item" : "hidden"}>*/}
//                             <li className="nav-item">
//                                 <Link to='/admin'>
//                                     <div className="nav-link">Admin</div>
//                                 </Link>
//                             </li>
//                             </ul>
//                         <ul className="navbar-nav">
//                             <li className= {this.state.hidden ? "hidden" : "nav-item" }><Link to ="/signup"><i className="fa fa-user btn"/> Sign Up</Link></li>
//                             <li className= {this.state.hidden ? "hidden" : "nav-item" }><Link to ="/login"><i className="fa fa-sign-in btn"/> Login</Link></li>
//                             <li className= {this.state.hidden ? "hidden" : "nav-item" }><Link to ="/businessSignIn"><i className="fa fa-briefcase btn"/> Business</Link></li>
//                         </ul>
//                 </div>
//             </nav>
//             </div>
//         )
//     }
// }

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserServiceClient from "../services/UserService";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            hidden: false,
            user: ''
        };
        this.userService = UserServiceClient.instance;
        this.logout = this.logout.bind(this);
        this.checkUserStatus = this.checkUserStatus.bind(this);
        this.findCurrentUserStatus()
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    findCurrentUserStatus(){
        return  this.userService.isUserLoggedIn()
            .then(response =>
            {if (response != null) {
                this.setState({hidden: true});
                let user = response[0]
                this.setState({user: user})
            }});
    }

    checkUserStatus(status){
        return status;
    }
    checkUser(user){
        console.log(user);
        this.setState({user: user})

    }
    // componentDidMount() {
    //     this.findCurrentUserStatus()
    // }
    //
    // componentWillReceiveProps(newProps){
    //     this.findCurrentUserStatus()
    // }
    //
    logout(){
        this.userService
            .logout().then(() =>{window.location.assign(`/`);}).then(() => {this.setState({hidden: false});});


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
                            <li className={this.state.user.username === 'admin' ? "nav-item" : "hidden"}>
                                <Link to='/admin'>
                                    <div className="nav-link">Admin</div>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className= {this.state.hidden ? "hidden" : "nav-item btn" }><Link to ="/signup"><i className="fa fa-user btn"/>Sign Up</Link></li>
                            <li className= {this.state.hidden ? "hidden" : "nav-item btn" }><Link to ="/login"><i className="fa fa-sign-in btn"/>Login</Link></li>
                            <li className= {this.state.hidden ? "hidden" : "nav-item btn" }><Link to ="/businessSignIn"><i className="fa fa-briefcase btn"/>Business</Link></li>
                            <li className= {this.state.hidden ? "nav-item btn": "hidden" }><i onClick= {this.logout} className="fa fa-sign-out btn">Log Out</i></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}