let _singleton = Symbol();
const HOTEL_API_URL = 'http://api.sandbox.amadeus.com/v1.2/hotels/search-circle?';
const LAT_LONG_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY = '';
const LAT_LONG_API_KEY = '';


class HotelService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new HotelService(_singleton);
        return this[_singleton]
    }

    findAllHotelsByLatLong(latitude,longitude,checkIn,checkOut,radius){
        return fetch(HOTEL_API_URL +
            'latitude=' + latitude +
            '&longitude=' + longitude +
            '&check_in=' + checkIn +
            '&check_out=' + checkOut +
            '&radius=' + radius +
            '&apikey=' + API_KEY)
            .then(function(response){
                return response.json();
            });
    }
    findAllHotels(){
        return fetch('http://localhost:4000/api/hotel')
            .then(function(response){
                return response.json();
            })
    }
    findLatLongOfHotel(address){
        return fetch(LAT_LONG_URL +
            'address=' + address +
            '&key=' + LAT_LONG_API_KEY)
            .then(function(response){
                return response.json();
            });
    }
    createHotel(hotel, userId){
        return fetch(HOTEL_URL
                .replace('UID', userId),
            {
                body: JSON.stringify(hotel),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response)
            {
                return response.json();
            })
    }
    updateHotel(hotel, userId){
        return fetch(HOTEL_URL
                .replace('UID', userId),
            {
                body: JSON.stringify(hotel),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            })
            .then(function (response)
            {
                return response.json();
            })
    }
    createRoom(room, userId){
        return fetch(HOTEL_URL
                .replace('UID', userId),
            {
                body: JSON.stringify(room),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response)
            {
                return response.json();
            })
    }
    deleteHotels(hotelId){
        return fetch('http://localhost:4000/api/hotel/'
            + hotelId, {method: 'delete'})
    }


}
export default HotelService;
