import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'
import HotelPage from "../components/HotelPage";
import RestaurantPage from "../components/RestaurantPage";
import AttractionPage from "../components/AttractionPage";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/hotels' component={HotelPage}/>
                    <Route exact path='/restaurants' component={RestaurantPage}/>
                    <Route exact path='/attractions' component={AttractionPage}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route path="/login" exact component={SignIn} />
                </Switch>
            </main>
        )
    }
}