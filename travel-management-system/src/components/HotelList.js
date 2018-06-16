import React, {Component} from 'react'
const HOTEL_LOGO = 'https://logoobject.com/wp-content/uploads/edd/2017/09/Real-Estate-Logos-Inspiration.png';

export default class HotelList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            role:'',
            info:false,
            restId:null,
            RestOwner:null,
            hotels: []
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container p-5 m-5">
                    <div className="row">
                        {this.props.data.map((hotel, index) =>
                            <div className="col-sm-4" key={hotel.id} style={{marginBottom: 40}}>
                                <div className="card">
                                    <img className="card-img-top" src="https://logoobject.com/wp-content/uploads/edd/2017/09/Real-Estate-Logos-Inspiration.png" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{hotel.property_name}</h5>
                                        <p className="card-text"><b>Address:</b> {hotel.address.line1} {hotel.address.city} {hotel.address.region} {hotel.address.postal_code} {hotel.address.country}</p>
                                        <p className="card-text"><b>Rate:</b> {hotel.min_daily_rate.amount} {hotel.min_daily_rate.currency}</p>
                                        <p className="card-text"><b>Room Available:</b> {hotel.rooms[0].room_type_info.room_type}</p>
                                        <p className="card-text"><b>Call:</b> {hotel.contacts[0].detail}</p>
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
