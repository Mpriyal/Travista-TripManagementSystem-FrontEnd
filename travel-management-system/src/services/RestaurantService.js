import HotelService from "./HotelService";
import axios from "axios/index";
var restaurantUrl = 'http://opentable.herokuapp.com/api/restaurants';

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


    // searchByName(textValue){
    //     axios.get(restaurantUrl,{
    //         params:{
    //             name:textValue
    //         }
    //     })
    // }
    //
    // searchByCity(textValue){
    //     console.log(textValue)
    //     axios.get(restaurantUrl,{
    //         params:{
    //             city:textValue
    //         }
    //     })
    //         .then(function(response){
    //             return response;
    //         });
    // }
    //
    // searchByZipcode(textValue){
    //     axios.get(restaurantUrl,{
    //         params:{
    //             zip:textValue
    //         }
    //     })
    // }
    //
    // searchByCountry(textValue){
    //     axios.get(restaurantUrl,{
    //         params:{
    //             country:textValue
    //         }
    //     })
    // }

}