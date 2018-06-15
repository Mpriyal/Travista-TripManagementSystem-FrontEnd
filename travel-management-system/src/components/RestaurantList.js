import React, {Component} from 'react'
import axios from 'axios/index'
import {Link} from 'react-router-dom'

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            role: '',
            info: false,
            restId: null,
            RestOwner: null,
        }
    }

    render() {
                return (
                    <div className="container p-5 m-5">
                        <div className="container p-5 m-5">
                            <div className="row">
                                {this.props.data.map((restaurant, index) =>
                                    <div className="col-sm-4" key={restaurant.id}>
                                        <div className="card">
                                            <img className="card-img-top" src={restaurant.image_url}
                                                 alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{restaurant.name}</h5>
                                                <p className="card-text">{restaurant.address} {restaurant.city} {restaurant.state} </p>
                                                <p className="card-text">Call : {restaurant.phone}</p>
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
}