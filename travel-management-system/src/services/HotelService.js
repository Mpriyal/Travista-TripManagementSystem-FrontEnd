let _singleton = Symbol();
const HOTEL_API_URL = 'http://api.sandbox.amadeus.com/v1.2/hotels/search-circle?';
const LOCAL_HOTEL_URL = 'http://localhost:4000/api/hotel';
const LAT_LONG_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY = '';
const LAT_LONG_API_KEY = 'AIzaSyCGFcq0Kr1hQAULOY9_O3azu2N4Srn-tmY';



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

    findLatLongOfHotel(address){
        return fetch(LAT_LONG_URL +
            'address=' + address +
            '&key=' + LAT_LONG_API_KEY)
            .then(function(response){
                return response.json();
            });
    }

    findAllHotels() {
        return fetch(LOCAL_HOTEL_URL)
            .then(function(response){
                return response.json();
            });
    }

    findRoomsForHotel(hotelId) {
        return fetch(LOCAL_HOTEL_URL+'/'+hotelId+ '/room')
            .then(function(response){
                return response.json();
            });
    }

    findHotelById(hotelId) {
        return fetch(LOCAL_HOTEL_URL+'/'+hotelId)
            .then(function(response){
                return response.json();
            });
    }

    createHotel(hotelName, hotelAddress, hotelPhone, hotelRate) {
        const hotel = {
            name: hotelName,
            address: hotelAddress,
            phone: hotelPhone,
            rate: hotelRate};
        return fetch('http://localhost:4000/api/hotel', {
            method: 'post',
            body: JSON.stringify(hotel),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    // createHotel(hotel) {
    //     return fetch(LOCAL_HOTEL_URL, {
    //         body: JSON.stringify(hotel),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'POST'
    //     }).then(function (response) {
    //             return response.json();
    //         }
    //     )
    // }

    updateHotel(hotelId, hotelName, hotelAddress, hotelPhone, hotelRate){
        const hotel = {
            _id: hotelId,
            name: hotelName,
            address: hotelAddress,
            phone: hotelPhone,
            rate: hotelRate};
        return fetch(LOCAL_HOTEL_URL+'/'+hotelId,
            {
                body: JSON.stringify(hotel),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            })
    }

    deleteHotels(hotelId) {
        return fetch(LOCAL_HOTEL_URL + '/' + hotelId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

}
export default HotelService;