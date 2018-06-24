import HotelService from "./HotelService";
import axios from "axios/index";
var restaurantUrl = 'http://opentable.herokuapp.com/api/restaurants';
const LOCAL_RESTAURANT_URL = 'http://localhost:4000/api/restaurant';

let _singleton = Symbol();

export default class RestaurantService{
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new RestaurantService(_singleton);
        return this[_singleton]
    }

    findAllRestaurants() {
        return fetch(LOCAL_RESTAURANT_URL)
            .then(function(response){
                return response.json();
            });
    }

    createRestaurant( owner, restaurantName, restaurantAddress, restaurantCity, restaurantPhone, restaurantPrice) {
        const restaurant = {
            owner: owner,
            name: restaurantName,
            address: restaurantAddress,
            phone: restaurantPhone,
            price: restaurantPrice};
        return fetch(LOCAL_RESTAURANT_URL, {
            method: 'post',
            body: JSON.stringify(restaurant),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    updateRestaurant(restaurantId, restaurantName, restaurantAddress, restaurantCity, restaurantPhone, restaurantPrice){
        const restaurant = {
            _id: restaurantId,
            name: restaurantName,
            address: restaurantAddress,
            phone: restaurantPhone,
            price: restaurantPrice};
        return fetch(LOCAL_RESTAURANT_URL+'/'+restaurantId,
            {
                body: JSON.stringify(restaurant),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            })
            .then(function (response)
            {
                return response.json();
            })
    }

    deleteRestaurant(restaurantId) {
        return fetch(LOCAL_RESTAURANT_URL + '/' + restaurantId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }
}