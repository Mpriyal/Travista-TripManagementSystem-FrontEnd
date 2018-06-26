import React, {Component} from 'react'
import axios from 'axios/index'
import {Link} from 'react-router-dom'
import OwnerService from "../services/OwnerService";

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            role: '',
            info: false,
            restId: null,
            RestOwner: null,
            dbRestaurant: []
        };
        this.OwnerService = OwnerService.instance;
        this.contactRestaurant = this.contactRestaurant.bind(this);
    }

    contactRestaurant (owners) {
        this.OwnerService.findOwnerById(owners)
            .then((owner) => {
                var ownerEmail = owner[0].email;
                window.location.assign("mailto:"+ownerEmail)
            });
    }


    render() {
        if (this.props.data2) {
            if(this.props.data) {
            return (
                <div className="container p-5 m-5">
                    <div className="container p-5 m-5">
                        <div className="row">
                            {this.props.data2.map((restaurant, index) =>
                                <div className="col-sm-4" key={restaurant._id} style={{marginBottom: 40}}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://picsum.photos/5184/3456?image=889"
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{restaurant.name}</h5>
                                            <p className="card-text">
                                                <b>Address:</b> {restaurant.address} {restaurant.city}
                                            </p>
                                            <p className="card-text"><b>Call:</b> {restaurant.phone}</p>
                                            <p className="card-text"><b>Price for 2:</b> {restaurant.price}</p>
                                            <button onClick={() => this.contactRestaurant(restaurant.owners)}>Contact Owner For Booking</button>
                                            <p className="card-text"><a href="">View Coupons </a> </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="container p-5 m-5">
                        <div className="row">
                            {this.props.data.map((restaurant, index) =>
                                <div className="col-sm-4" key={restaurant.id} style={{marginBottom: 40}}>
                                    <div className="card">
                                        <img className="card-img-top" src={restaurant.image_url}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{restaurant.name}</h5>
                                            <p className="card-text">
                                                <b>Address:</b> {restaurant.address} {restaurant.city} {restaurant.state}
                                            </p>
                                            <p className="card-text"><b>Call:</b> {restaurant.phone}</p>
                                            <p className="card-text"><a href={restaurant.reserve_url}>Reserve </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container p-5 m-5">
                    <div className="container p-5 m-5">
                        <div className="row">
                            {this.props.data2.map((restaurant, index) =>
                                <div className="col-sm-4" key={restaurant._id} style={{marginBottom: 40}}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src="https://picsum.photos/5184/3456?image=889"
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{restaurant.name}</h5>
                                            <p className="card-text">
                                                <b>Address:</b> {restaurant.address} {restaurant.city}
                                            </p>
                                            <p className="card-text"><b>Call:</b> {restaurant.phone}</p>
                                            <p className="card-text"><b>Price for 2:</b> {restaurant.price}</p>
                                            <button onClick={() => this.contact(restaurant.owners)}>Contact Owner For Booking</button>
                                            <p className="card-text"><a href="">View Coupons </a> </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        }
    }
}