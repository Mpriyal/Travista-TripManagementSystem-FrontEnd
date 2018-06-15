import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'
import HotelPage from "../components/HotelPage";
import RestaurantPage from "../components/RestaurantPage";

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/hotels' component={HotelPage}/>
                    <Route exact path='/restaurants' component={RestaurantPage}/>
                </Switch>
            </main>
        )
    }
}