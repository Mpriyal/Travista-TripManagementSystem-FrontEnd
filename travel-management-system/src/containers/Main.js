import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'
import HotelPage from "../components/HotelPage";
import RestaurantPage from "../components/RestaurantPage";
import AttractionPage from "../components/AttractionPage";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import AddYourBusiness from "../components/AddYourBuisness";
import Profile from "../components/Profile";
import RentalCarsPage from "../components/RentalCarsPage";


export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/hotels' component={HotelPage}/>
                    <Route exact path='/cars' component={RentalCarsPage}/>
                    <Route exact path='/restaurants' component={RestaurantPage}/>
                    <Route exact path='/attractions' component={AttractionPage}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route path="/login" exact component={SignIn} />
                    <Route path="/addYourBusiness" exact component={AddYourBusiness} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </main>
        )
    }
}