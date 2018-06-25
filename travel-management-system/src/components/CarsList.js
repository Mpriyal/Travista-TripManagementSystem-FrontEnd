import React, {Component} from 'react'
import OwnerService from "../services/OwnerService";
const CARS_LOGO = 'https://logoobject.com/wp-content/uploads/edd/2017/09/Real-Estate-Logos-Inspiration.png';

export default class CarsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            role: '',
            info: false,
            restId: null,
            RestOwner: null,
            cars: [],
            dbCars: []
        }
        this.setCarsForProviders = this.setCarsForProviders.bind(this)
        // this.OwnerService = OwnerService.instance;
    }

    setCarsForProviders(results) {
        this.setState({
            cars: results
        })
    }

    render() {
        if (this.props.data2) {
            if (this.props.data) {
                return (
                    <div className="container-fluid">
                        <div className="container p-5 m-5">
                            <div className="row">
                                {this.props.data2.map((car, index) =>
                                    <div className="col-sm-12" key={car._id} style={{marginBottom: 5}}>
                                        <div className="card">
                                            <div className="card-body">
                                                {/*<h5 className="card-title text-center">{provider.provider.company_name}</h5>*/}
                                                <p className="card-text text-center">
                                                    <b>Category:</b> {car.category}
                                                </p>
                                                <p className="card-text">
                                                    <b>Type:</b> {car.type}
                                                </p>
                                                <p className="card-text">
                                                    <b>Address:</b> {car.address}
                                                </p>
                                                <p className="card-text">
                                                    <b>Rate:</b> {car.rate}
                                                </p>
                                                <p className="card-text">
                                                    <b>Availability:</b> {car.start_date.toString().split('T')[0]} <b>-</b> {car.end_date.toString().split('T')[0]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="container p-5 m-5">
                            <div className="row">
                                {this.props.data.map((provider, index) =>
                                    <div className="col-sm-12" key={provider.id} style={{marginBottom: 40}}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{provider.provider.company_name}</h5>
                                                <p className="card-text text-center">
                                                    <b>Address:</b> {provider.address.line1} {provider.address.city} {provider.address.region} {provider.address.country}
                                                </p>
                                                <div className="row">
                                                    {provider.cars.map((car, index) =>
                                                        <div className="col-sm-5" key={provider.id}
                                                             style={{marginBottom: 40}}>
                                                            <div className="card">
                                                                <img className="card-img-top"
                                                                     src="https://cdn.pixabay.com/photo/2016/04/01/09/11/car-1299198_960_720.png"
                                                                     alt="Card image cap"/>
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{car.vehicle_info.category}</h5>
                                                                    <div class="card-text">
                                                                        <ul>
                                                                            <li>Vehicle
                                                                                Type: {car.vehicle_info.type}</li>
                                                                            <li>Vehicle
                                                                                Air-Conditioning: {car.vehicle_info.air_conditioning}</li>
                                                                            <li>Vehicle
                                                                                Fuel: {car.vehicle_info.fuel}</li>
                                                                            <li>Amount: {car.rates[0].price.amount} {car.rates[0].price.currency}</li>
                                                                            <li><b>Estimated Total for
                                                                                Trip: {car.estimated_total.amount} {car.estimated_total.currency}</b>
                                                                            </li>
                                                                            <br/>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
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
                                {this.props.data2.map((car, index) =>
                                    <div className="col-sm-12" key={car._id} style={{marginBottom: 5}}>
                                        <div className="card">
                                            <div className="card-body">
                                                {/*<h5 className="card-title text-center">{provider.provider.company_name}</h5>*/}
                                                <p className="card-text text-center">
                                                    <b>Category:</b> {car.category}
                                                </p>
                                                <p className="card-text">
                                                    <b>Type:</b> {car.type}
                                                </p>
                                                <p className="card-text">
                                                    <b>Address:</b> {car.address}
                                                </p>
                                                <p className="card-text">
                                                    <b>Rate:</b> {car.rate}
                                                </p>
                                                <p className="card-text">
                                                    <b>Availability:</b> {car.start_date} <b>-</b> {car.end_date}
                                                </p>
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