import React, {Component} from 'react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import HotelService from '../services/HotelService.js'
import {BrowserRouter as Router, Switch} from "react-router-dom";
import RestaurantService from "../services/RestaurantService";
import RestaurantList from "./RestaurantList";
import RestaurantListItem from "./RestaurantListItem";
import OwnerService from "../services/OwnerService";


export default class RestaurantListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            owner: '',
            restaurants: [],
            name: '',
            address: '',
            phone: '',
            price: '',
            city: '',
            ownerName: ''
        };

        this.createRestaurant = this.createRestaurant.bind(this)
        this.deleteRestaurant = this.deleteRestaurant.bind(this)
        this.populateRestaurant = this.populateRestaurant.bind(this)
        this.updateRestaurant = this.updateRestaurant.bind(this)
        this.findAllRestaurants = this.findAllRestaurants.bind(this)
        this.restaurantService = RestaurantService.instance
        this.ownerService = OwnerService.instance
        this.setRestaurants = this.setRestaurants.bind(this)
        this.setName = this.setName.bind(this)
        this.setAddress = this.setAddress.bind(this)
        this.setPhone = this.setPhone.bind(this)
        this.setPrice = this.setPrice.bind(this)
        this.setCity = this.setCity.bind(this)
        this.setOwner = this.setOwner.bind(this)
    }


    componentDidMount() {
        this.findAllRestaurants();
    }

    componentWillReceiveProps(newProps){
        this.findAllRestaurants();
    }

    renderListOfRestaurants(){
        let restaurants = null;
        if(this.state) {
             restaurants = this.state.restaurants.map((hotel) => {
                    return <RestaurantListItem key={hotel.id}
                                          hotel={hotel}
                                          deleteRestaurant={this.deleteRestaurant}
                                          updateRestaurant={this.populateRestaurant}/>
                }
            );
        }
        return (
            restaurants
        )
    }

    setName(event){
        this.setState({
            name: event.target.value
        })
    }

    setPhone(event){
        this.setState({
            phone: event.target.value
        })
    }

    setAddress(event){
        this.setState({
            address: event.target.value
        })
    }

    setPrice(event){
        this.setState({
            price: event.target.value
        })
    }

    setOwner(event){
        this.setState({
            ownerName: event.target.value
        })
        this.ownerService
            .findOwnerByUsername(this.state.ownerName)
            .then((owner) => {this.state.owner = owner})

    }

    setCity(event){
        this.setState({
            city: event.target.value
        })
    }

    createRestaurant() {
        this.restaurantService
            .createRestaurant( this.state.owner, this.state.name,
                this.state.address, this.state.city, this.state.phone, this.state.price)
            .then(() => { this.findAllRestaurants(); });
    }

    deleteRestaurant(restaurantId) {
        var answer = window.confirm("Click Ok to delete");
        if(answer == true) {
            this.restaurantService
                .deleteRestaurant(restaurantId)
                .then(() => {
                        this.findAllRestaurants()
                    }
                );
        }
    }

    populateRestaurant(restaurant) {
        this.setState({
            id: restaurant._id,
            name: restaurant.name,
            address: restaurant.address,
            city: restaurant.city,
            phone: restaurant.phone,
            price: restaurant.price,
        })
    }

    updateRestaurant() {
        this.restaurantService
            .updateHotel( this.state.id, this.state.name, this.state.address,this.state.city, this.state.phone, this.state.price)
            .then(() => {
                    this.findAllRestaurants()
                }
            );
    }

    setRestaurants(rsts){
        this.setState({
            restaurants: rsts
        })
    }

    findAllRestaurants(){
        this.restaurantService
            .findAllRestaurants()
            .then(response => {this.setRestaurants(response)})
    }

    render() {
        return (
            <Switch>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <h2 style={{textAlign: "center"}}>Restaurants</h2>
                            <br/>
                            <ul className="list-group">
                                {this.renderListOfRestaurants()}
                            </ul>
                            <br/>
                            <label>Please fill the username of restaurant owner first first</label>
                            <input onChange={this.setOwner}
                                   value={this.state.ownerName}
                                   placeholder="Enter Owner's username Name"
                                   className="form-control text-center font-weight-bold"/>
                            <input onChange={this.setName}
                                   value={this.state.name}
                                   placeholder="Add Restaurant Name"
                                   className="form-control text-center font-weight-bold"/>
                            <input onChange={this.setAddress}
                                   value={this.state.address}
                                   placeholder="Add Restaurant Address"
                                   className="form-control text-center font-weight-bold"/>
                            <input onChange={this.setCity}
                                   value={this.state.city}
                                   placeholder="Add Restaurant City"
                                   className="form-control text-center font-weight-bold"/>
                            <input onChange={this.setPhone}
                                   value={this.state.phone}
                                   placeholder="Add Restaurant Contact"
                                   className="form-control text-center font-weight-bold"/>
                            <input onChange={this.setPrice}
                                   value={this.state.price}
                                   placeholder="Add Restaurant Rate"
                                   className="form-control text-center font-weight-bold"/>
                            <button onClick={this.createRestaurant} className="btn btn-dark btn-block">
                                <i className="fa fa-plus"></i>
                            </button>
                            <button onClick={this.updateRestaurant} className="btn btn-dark btn-block">
                                <i className="fa fa-pencil"></i>
                            </button>
                        </div>
                        {/*<div className="col-8">*/}
                        {/*<Route path="/course/:courseId/module/:moduleId"*/}
                        {/*component={RoomEditor}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Switch>
        )
    }
}