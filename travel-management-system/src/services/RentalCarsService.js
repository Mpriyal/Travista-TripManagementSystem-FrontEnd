let _singleton = Symbol();
const RENTAL_CARS_URL = 'https://api.sandbox.amadeus.com/v1.2/cars/search-circle?';
const LAT_LONG_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY = '';
const LAT_LONG_API_KEY = 'AIzaSyCGFcq0Kr1hQAULOY9_O3azu2N4Srn-tmY'

// Qx2BLHZV4pB0wTFL3qFx9JGNAXsMa4my

class RentalCarsService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new RentalCarsService(_singleton);
        return this[_singleton]
    }

    findAllCarsByLatLong(latitude,longitude,pickUp,dropOff,radius){
        return fetch(RENTAL_CARS_URL +
            'pick_up=' + pickUp +
            '&drop_off=' + dropOff +
            '&latitude=' + latitude +
            '&longitude=' + longitude +
            '&radius=' + radius +
            '&apikey=' + API_KEY)
            .then(function(response){
                return response.json();
            });
    }

    findLatLongOfLocation(address){
        return fetch(LAT_LONG_URL +
            'address=' + address +
            '&key=' + LAT_LONG_API_KEY)
            .then(function(response){
                return response.json();
            });
    }

}
export default RentalCarsService;