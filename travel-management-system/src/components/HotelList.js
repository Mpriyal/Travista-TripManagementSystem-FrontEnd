import React, {Component} from 'react'
import CouponService from "../services/CouponService";

const HOTEL_LOGO = 'https://logoobject.com/wp-content/uploads/edd/2017/09/Real-Estate-Logos-Inspiration.png';

export default class HotelList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            role: '',
            info: false,
            restId: null,
            RestOwner: null,
            hotels: [],
            dbHotels: [],
            coupons: []
        }

        this.couponService = CouponService.instance
        this.findCouponByHotelId = this.findCouponByHotelId.bind(this)

    }

    findCouponByHotelId(hotelId){
        this.couponService
            .findCouponByHotelId(hotelId)
            .then((coupons) => {this.setState({coupons: coupons})})
    }

    render() {
        if (this.props.data2) {
            if (this.props.data) {
                return (
                    <div className="container-fluid">
                        <div className="container p-5 m-5">
                            <div className="row">
                                {this.props.data2.map((hotel, index) =>
                                    <div className="col-sm-4" key={hotel._id} style={{marginBottom: 40}}>
                                        <div className="card">
                                            <img className="card-img-top"
                                                 src="https://picsum.photos/3744/5616?image=1065"
                                                 alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{hotel.name}</h5>
                                                <p className="card-text">
                                                    <b>Address:</b> {hotel.address}
                                                </p>
                                                <p className="card-text">
                                                    <b>Rate:</b> {hotel.rate}
                                                </p>
                                                <p className="card-text"><b>Call:</b> {hotel.phone}</p>
                                                {this.findCouponByHotelId(hotel._id)}
                                                {this.state.coupons.length !== 0 &&  <span>
                                                        <ul>
                                                            {this.state.coupons.map((coupon, index) =>
                                                                <div>
                                                                    <li>Code: {coupon.code} Value: {coupon.value}</li>
                                                                </div>
                                                            )}
                                                        </ul>
                                                    </span>}
                                                {/*{renderIf(this.state.coupons.length !== 0)(*/}
                                                    {/*<span>*/}
                                                        {/*<ul>*/}
                                                            {/*{this.state.coupons.map((coupon, index) =>*/}
                                                                {/*<div>*/}
                                                                    {/*<li>Code: {coupon.code} Value: {coupon.value}</li>*/}
                                                                {/*</div>*/}
                                                            {/*)}*/}
                                                        {/*</ul>*/}
                                                    {/*</span>*/}
                                                {/*)}*/}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="container p-5 m-5">
                            <div className="row">
                                {this.props.data.map((hotel, index) =>
                                    <div className="col-sm-4" key={hotel.id} style={{marginBottom: 40}}>
                                        <div className="card">
                                            <img className="card-img-top"
                                                 src="https://logoobject.com/wp-content/uploads/edd/2017/09/Real-Estate-Logos-Inspiration.png"
                                                 alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{hotel.property_name}</h5>
                                                <p className="card-text">
                                                    <b>Address:</b> {hotel.address.line1} {hotel.address.city} {hotel.address.region} {hotel.address.postal_code} {hotel.address.country}
                                                </p>
                                                <p className="card-text">
                                                    <b>Rate:</b> {hotel.min_daily_rate.amount} {hotel.min_daily_rate.currency}
                                                </p>
                                                <p className="card-text"><b>Room
                                                    Available:</b> {hotel.rooms[0].room_type_info.room_type}</p>
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
            else {
                return (
                    <div className="container-fluid">
                        <div className="container p-5 m-5">
                            <div className="row">
                                {this.props.data2.map((hotel, index) =>
                                    <div className="col-sm-4" key={hotel._id} style={{marginBottom: 40}}>
                                        <div className="card">
                                            <img className="card-img-top"
                                                 src="https://picsum.photos/3744/5616?image=1065"
                                                 alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{hotel.name}</h5>
                                                <p className="card-text">
                                                    <b>Address:</b> {hotel.address}
                                                </p>
                                                <p className="card-text">
                                                    <b>Rate:</b> {hotel.rate}
                                                </p>
                                                <p className="card-text"><b>Call:</b> {hotel.phone}</p>
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
    }
}



