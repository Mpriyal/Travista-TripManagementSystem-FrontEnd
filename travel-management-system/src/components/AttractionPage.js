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
        })
    }

    render() {
        return (
            <div>
                <div className="search">
                    <form>
                        <div className="form-row align-content-center search">
                        <input className="form-control col amber-border" type="text"
                               placeholder="Search Attractions by city"
                               aria-label="Search" ref="searchValue"/>
                            <button className ="fa fa-search btn " aria-hidden="true"
                                    type="button"
                                    onClick={this.searchAttraction}>
                                Search
                            </button>
                    </div>
                    </form>
                 </div>
                <div>
                    <AttractionList data={this.state.attractions}/>
                </div>
            </div>
        )
    }
}