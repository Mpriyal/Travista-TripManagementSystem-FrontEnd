import React, {Component} from 'react'
import axios from 'axios';
import RestaurantList from "./RestaurantList";
var restaurantUrl = 'http://opentable.herokuapp.com/api/restaurants';

export default class RestaurantPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: {
                name: '',
                city: '',
                zip: '',
                country: ''
            },
            restaurants: [],
            selectedOption: 'name'
        };
        this.setOption = this.setOption.bind(this);
        this.searchRestaurant = this.searchRestaurant.bind(this);
    }

    setOption(changedOption) {
        this.setState({selectedOption: changedOption.target.value});
    }

    searchRestaurant() {
        var textValue = this.refs.searchValue.value;
        var currentState = this.state.selectedOption;
        if (currentState === 'name') {
            axios.get(restaurantUrl,{
                params:{
                    name:textValue
                }
            }).then(res=>{
                console.log(res)
                const restaurants = res.data.restaurants;
                this.setState({restaurants});
            })
        }
        else if (currentState === 'city') {
            axios.get(restaurantUrl,{
                params:{
                    city:textValue
                }
            }).then(res=>{
                console.log(res)
                const restaurants = res.data.restaurants;
                this.setState({restaurants});
            })
        }
        else if (currentState === 'zipcode') {
            axios.get(restaurantUrl,{
                params:{
                    zip:textValue
                }
            }).then(res=>{
                console.log(res)
                const restaurants = res.data.restaurants;
                this.setState({restaurants});
            })
        }
        else if (currentState === 'country') {
            axios.get(restaurantUrl,{
                params:{
                    country:textValue
                }
            }).then(res=>{
                console.log(res)
                const restaurants = res.data.restaurants;
                this.setState({restaurants});
            })
        }
    }

    render() {
        return (
            <div>
                <div className="search">
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search Restaurants"
                               aria-label="Search" ref="searchValue"/>
                        <div className="input-group-append"/>
                        <span className="input-group-text amber lighten-3" id="basic-text1">
                            <i className="fa fa-search text-grey" aria-hidden="true"
                               onClick={this.searchRestaurant}/>
                        </span>
                    </div>
                </div>
                <div className='radioSelector'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                               type="radio" name="inlineRadioOptions"
                               id="inlineRadio1" value="name"
                               checked={this.state.selectedOption === 'name'}
                               onChange={this.setOption}/>
                        <label className="form-check-label"
                               htmlFor="inlineRadio1">Name</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                               type="radio" name="inlineRadioOptions"
                               id="inlineRadio1" value="city"
                               checked={this.state.selectedOption === 'city'}
                               onChange={this.setOption}/>
                        <label className="form-check-label"
                               htmlFor="inlineRadio1">City</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                               type="radio" name="inlineRadioOptions"
                               id="inlineRadio1" value="zipcode"
                               checked={this.state.selectedOption === 'zipcode'}
                               onChange={this.setOption}/>
                        <label className="form-check-label"
                               htmlFor="inlineRadio1">Zip Code</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                               type="radio" name="inlineRadioOptions"
                               id="inlineRadio1" value="country"
                               checked={this.state.selectedOption === 'country'}
                               onChange={this.setOption}/>
                        <label className="form-check-label"
                               htmlFor="inlineRadio1">Country</label>
                    </div>
                </div>
                {/*<RestaurantList data={this.state.restaurants}/>*/}
            </div>
        )
    }
}