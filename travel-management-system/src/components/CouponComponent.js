import React, { Component } from "react";
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import HotelServiceClient from "../services/HotelService";
import CouponService from "../services/CouponService";
import CouponListItem from "./CouponListItem";

export default class CouponComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            hotelId:"",
            code:"",
            value: "",
            coupons: []
        };
        this.hotelService = HotelServiceClient.instance;
        this.findCouponByHotelId = this.findCouponByHotelId.bind(this);
        this.couponService = CouponService.instance;
        this.createCoupon = this.createCoupon.bind(this);
        this.deleteCoupon = this.deleteCoupon.bind(this);
    }

    validateForm() {
        return  this.state.type.length > 0 &&
            this.state.numberOfBeds.length > 0
    }

    handleChange = event => {
        this.setState({
            [event.target.id] : event.target.value
        });
    };

    componentDidMount(){
        this.findCouponByHotelId(this.props.hotelId)
    }

    componentWillReceiveProps(newProps){
        this.findCouponByHotelId(newProps.hotelId)
    }

    findCouponByHotelId(hotelId){
        this.couponService
            .findCouponByHotelId(hotelId)
            .then((coupons) => {this.setState({coupons: coupons})})
    }

    renderListOfCoupons(){
        let coupons = null;
        if(this.state) {
            coupons = this.state.coupons.map((coupon) => {
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

    handleSubmit = event => {
        event.preventDefault();
    };
    createCoupon(){
        var coupon = {
            hotel: this.state.hotelId,
            code: this.state.code,
            value: this.state.value,
        };
        this.couponService
            .createCoupon(coupon);
    }
    deleteCoupon(couponId) {
        var answer = window.confirm("Click Ok to delete");
        if(answer == true) {
            this.couponService
                .deleteCoupon(couponId)
                .then(() => {
                        this.findCouponByHotelId(this.state.hotelId)
                    }
                );
        }
    }
    populateCoupon(coupon) {
        this.setState({
            id: coupon._id,
            code: coupon.code,
            value: coupon.value
        })
    }
    updateCoupon() {
        var coupon = {
            hotel: this.state.hotelId,
            code: this.state.code,
            value: this.state.value,
            id: this.state.id
        };
        this.couponService
            .updateCoupon()
            .then(() => {
                    this.findCouponByHotelId(this.state.hotelId)
                }
            );
    }
    render() {
        return (
            <div>
                {this.renderListOfCoupons()}
            <div className="Form">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <h2 className = "align-content-center">Enter Coupon Details</h2>
                    <FormGroup controlId="code" bsSize="large">
                        <ControlLabel>Coupon Code</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.code}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="value" bsSize="large">
                        <ControlLabel>Coupon Value</ControlLabel>
                        <FormControl
                            autoFocus
                            type="number"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        type="submit"
                        text="Add Rooms in Hotel"
                        onClick={this.createCoupon}
                    />
                </Form>
            </div>
            </div>
        );
    }
}