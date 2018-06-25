import React, {Component} from 'react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import HotelService from '../services/HotelService.js'
import HotelList from "./HotelList";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import HotelListItem from "./HotelListItem";
import OwnerService from "../services/OwnerService";
import CouponService from "../services/CouponService";
import CouponListItem from "./CouponListItem";


export default class CouponListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            hotelId: '',
            code: '',
            value: '',
            coupons: [],
            hotel: ''
        };


        this.couponService = CouponService.instance
        this.createCoupon = this.createCoupon.bind(this)
        this.deleteCoupon = this.deleteCoupon.bind(this)
        this.populateCoupon = this.populateCoupon.bind(this)
        this.updateCoupon = this.updateCoupon.bind(this)
        this.findAllCoupons = this.findAllCoupons.bind(this)
        this.hotelService = HotelService.instance
        this.setCoupons = this.setCoupons.bind(this)
        this.setCode = this.setCode.bind(this)
        this.setValue = this.setValue.bind(this)
    }


    componentDidMount() {
        this.findAllCoupons();
    }

    componentWillReceiveProps(newProps){
        this.findAllCoupons();
    }

    renderListOfCoupons(){
        let coupons = null;
        if(this.state) {
            coupons = this.state.hotels.map((coupon) => {
                    return <CouponListItem key={coupon.id}
                                          coupon={coupon}
                                          deleteCoupon={this.deleteCoupon}
                                          populateCoupon={this.populateCoupon}/>
                }
            );
        }
        return (
            coupons
        )
    }

    userNameChanged(event){
        this.setState({
            ownerName: event.target.value
        })
    }

    setOwner(){
        this.ownerService
            .findOwnerByUsername(this.state.ownerName)
            .then((owner1) => {this.setState({owner: owner1[0]})});
        this.hotelService
            .findHotelByOwnerId(this.state.owner._id)
            .then((res) => {this.setState({hotel: res[0]})})
    }

    setCode(event){
        this.setState({
            code: event.target.value
        })
    }

    setValue(event){
        this.setState({
            value: event.target.value
        })
    }

    createCoupon() {
        var coupon = {
            hotel: this.state.hotelId,
            code: this.state.code,
            value: this.state.value
        }
        this.couponService
            .createCoupon(coupon)
            .then(() => { this.findAllCoupons(); });
    }

    deleteCoupon(couponId) {
        var answer = window.confirm("Click Ok to delete");
        if(answer == true) {
            this.couponService
                .deleteCoupon(couponId)
                .then(() => {
                        this.findAllCoupons()
                    }
                );
        }
    }

    populateCoupon(hotel) {
        this.setState({
            name: hotel.name,
            address: hotel.address,
            phone: hotel.phone,
            rate: hotel.rate,
            id: hotel._id
        })
    }

    updateCoupon() {
        var coupon = {
            _id: this.state.id,
            hotel: this.state.hotelId,
            code: this.state.code,
            value: this.state.value
        }
        this.couponService
            .updateCoupon(coupon)
            .then(() => {
                    this.findAllCoupons()
                }
            );
    }

    setCoupons(cpns){
        this.setState({
            coupons: cpns
        })
    }

    findAllCoupons(){
        this.couponService
            .findAllCoupons()
            .then(response => {this.setCoupons(response)})
    }

    render() {
        return (
            <Switch>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4" style={{overflow: 'scroll'}}>
                            <h2 style={{textAlign: "center"}}>Coupons</h2>
                            <br/>
                            <ul className="list-group">
                                {this.renderListOfCoupons()}
                            </ul>
                            <br/>
                        </div>
                        <div className="col-8" style={{overflow: 'scroll'}}>
                            <br/>
                            <br/>
                            <h3 style={{textAlign: 'center'}}>Add Coupons</h3>
                            <br/>
                            <label>Please fill the username of Hotel owner first</label>
                            <input onChange={this.userNameChanged}
                                   value={this.state.ownerName}
                                   placeholder="Enter Owner's username"
                                   className="form-control text-center font-weight-bold"/>
                            <button onClick={this.setOwner}
                                    className="btn btn-block btn-primary">
                                Click to verify username
                            </button>
                            <br/>
                            <input onChange={this.setName}
                                   value={this.state.name}
                                   placeholder="Add Hotel Name"
                                   className="form-control text-center font-weight-bold"/>
                            <br/>
                            <input onChange={this.setAddress}
                                   value={this.state.address}
                                   placeholder="Add Hotel Address"
                                   className="form-control text-center font-weight-bold"/>
                            <br/>
                            <input onChange={this.setPhone}
                                   value={this.state.phone}
                                   placeholder="Add Hotel Phone"
                                   className="form-control text-center font-weight-bold"/>
                            <br/>
                            <input onChange={this.setRate}
                                   value={this.state.rate}
                                   placeholder="Add Hotel Rate"
                                   className="form-control text-center font-weight-bold"/>
                            <br/>
                            <button onClick={this.createHotel} className="btn btn-dark btn-block">
                                <i className="fa fa-plus"></i>
                            </button>
                            <br/>
                            <button onClick={this.updateHotel} className="btn btn-dark btn-block">
                                <i className="fa fa-refresh"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Switch>
        )
    }
}