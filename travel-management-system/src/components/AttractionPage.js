import React, {Component} from 'react'
import axios from 'axios';
import AttractionList from "./AttractionList";

var attractionUrl = 'http://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text';
var apiKey = 'Vz8AI97I24134gBAQgl0w5oQn0TUtFzA'

export default class AttractionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attraction: {
                name: '',
                city: '',
                category: '',
            },
            attractions: []
        };
        this.searchAttraction = this.searchAttraction.bind(this);
    }

    searchAttraction() {
        var textValue = this.refs.searchValue.value;
        axios.get(attractionUrl, {
            params: {
                city_name: textValue,
                apikey: apiKey
            }
        }).then(res => {
            console.log(res)
            const attractions = res.data.points_of_interest;
            this.setState({attractions});
            console.log(this.state.attractions)
            // for (var x in this.state.attractions) {
            //     newIndex.push(x);
            // }
            // this.state.index = newIndex
            // console.log("I am index:" + this.state.index)
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="search">
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <input className="form-control my-0 py-1 amber-border" type="text"
                               placeholder="Search Attractions by city"
                               aria-label="Search" ref="searchValue"/>
                        <div className="input-group-append"/>
                        <span className="input-group-text amber lighten-3" id="basic-text1">
                            <i className="fa fa-search text-grey" aria-hidden="true"
                               onClick={this.searchAttraction}/>
                        </span>
                    </div>
                </div>
                <AttractionList data={this.state.attractions}/>
            </div>
        )
    }
}