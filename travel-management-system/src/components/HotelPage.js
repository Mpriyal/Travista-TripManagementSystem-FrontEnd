import React, {Component} from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
var parseString = require('xml2js').parseString;
var hotelUrl = 'http://api.sandbox.amadeus.com/v1.2/hotels/search-circle';
var hotelApiKey = 'Vz8AI97I24134gBAQgl0w5oQn0TUtFzA';

export default class HotelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: {
                name: '',
                city: '',
                state: '',
                country: '',
                checkIn: '',
                checkOut: '',
                radius: ''
            },
            hotels: [],
            selectedOption: 'name'
        };
        this.setOption = this.setOption.bind(this);
        this.searchHotel = this.searchHotel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    setOption(changedOption) {
        this.setState({selectedOption: changedOption.target.value});
    }
    // http://api.sandbox.amadeus.com/v1.2/hotels/search-circle?
    //     // latitude=43.6&longitude=7.2&radius=50&check_in=2015-09-01&
    //     // check_out=2015-09-03&chain=RT¤cy=EUR&number_of_results=50&
    //     // apikey=<your API key>

    searchHotel() {
        var textValue = this.refs.searchValue.value;
        console.log(textValue);
        var currentState = this.state.selectedOption;
        if (currentState === 'name') {
            this.setState({hotel: {name: textValue}})
            axios.get(hotelUrl,{
                params:{
                    apikey:hotelApiKey,
                    name:this.state.hotel.name
                }
            })
            console.log(this.state.hotels)
        }
        else if (currentState === 'city') {
            this.setState({hotel: {city: textValue}})
            axios.get(hotelUrl,{
                params:{
                    apikey:hotelApiKey,
                    city:this.state.hotel.city
                }
            }).then(res=>{
                var xml = "<root>Hello xml2js!</root>"
                parseString(xml, function (err, result) {
                    console.dir(result);
                    console.log(res)
                });
            })
        }
        else if (currentState === 'state') {
            this.setState({hotel: {state: textValue}})
            axios.get(hotelUrl,{
                params:{
                    apikey:hotelApiKey,
                    state:this.state.hotel.state
                }
            }).then(res=>{
                var xml = "<root>Hello xml2js!</root>"
                parseString(xml, function (err, result) {
                    console.dir(result);
                    console.log(res)
                });
            })
        }
        else if (currentState === 'country') {
            this.setState({hotel: {country: textValue}})
            axios.get(hotelUrl,{
                params:{
                    apikey:hotelApiKey,
                    country:this.state.hotel.country
                }
            }).then(res=>{
                var xml = "<root>Hello xml2js!</root>"
                parseString(xml, function (err, result) {
                    console.dir(result);
                    console.log(res)
                });
            })
        }
    }

    render() {
        return (
            <div>
                <div className="search">
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search Hotels"
                               aria-label="Search" ref="searchValue"/>
                        <div className="input-group-append"/>
                        <span className="input-group-text amber lighten-3" id="basic-text1">
                            <i className="fa fa-search text-grey" aria-hidden="true"
                               onClick={this.searchHotel}/>
                        </span>
                    </div>
                </div>
                <DatePicker
                    selected={this.state.checkIn}
                    onChange={this.handleChange}
                />
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
                               id="inlineRadio1" value="state"
                               checked={this.state.selectedOption === 'state'}
                               onChange={this.setOption}/>
                        <label className="form-check-label"
                               htmlFor="inlineRadio1">State</label>
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
            </div>
        )
    }
}