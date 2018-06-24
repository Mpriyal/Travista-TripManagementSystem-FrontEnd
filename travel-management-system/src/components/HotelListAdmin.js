import React, {Component} from 'react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import HotelService from '../services/HotelService.js'
import HotelList from "./HotelList";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import HotelListItem from "./HotelListItem";


export default class HotelListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
            name: '',

        };

        this.deleteHotels = this.deleteHotels.bind(this)
        this.findAllHotels = this.findAllHotels.bind(this)
        this.hotelService = HotelService.instance
        this.setHotels = this.setHotels.bind(this)
    }


    componentDidMount() {
        this.findAllHotels();
    }

    componentWillReceiveProps(newProps){
        this.findAllHotels();
    }

    renderListOfHotels(){
        let hotels = null;
        if(this.state) {
            hotels = this.state.hotels.map((hotel) => {
                    return <HotelListItem key={hotel.id}
                                          hotel={hotel}
                                          deleteHotels={this.deleteHotels}/>
                }
            );
        }
        return (
            hotels
        )
    }

    createHotel() {
        this.hotelService
            .createHotel(this.state.hotel)
            .then(() => { this.findAllHotels(); });
    }

    deleteHotels(hotelId) {
        var answer = window.confirm("Click Ok to delete");
        if(answer == true) {
            this.hotelService
                .deleteHotels(hotelId)
                .then(() => {
                        this.findAllHotels()
                    }
                );
        }
    }

    setHotels(htls){
        this.setState({
            hotels: htls
        })
    }

    findAllHotels(){
        console.log("Inside find all hotels")
        this.hotelService
            .findAllHotels()
            .then(response => {this.setHotels(response)})
        console.log(this.state.hotels)
    }

    render() {
        return (
            <Switch>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <h2 style={{textAlign: "center"}}>Hotels</h2>
                            <br/>
                                <ul className="list-group">
                                    {this.renderListOfHotels()}
                                </ul>
                            <br/>
                            {/*<input onChange={this.titleChanged}*/}
                                   {/*value={this.state.module.title}*/}
                                   {/*placeholder="Add module"*/}
                                   {/*className="form-control text-center font-weight-bold"/>*/}
                            {/*<button onClick={this.createHotel} className="btn btn-dark btn-block">*/}
                                {/*<i className="fa fa-plus"></i>*/}
                            {/*</button>*/}
                        </div>
                        {/*<div className="col-8">*/}
                            {/*<Route path="/course/:courseId/module/:moduleId"*/}
                            {/*component={RoomEditor}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Switch>
        )
    }
}