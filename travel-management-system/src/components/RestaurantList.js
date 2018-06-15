import React, {Component} from 'react'
import axios from 'axios/index'

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            role:'',
            info:false,
            restId:null,
            RestOwner:null,
        }
    }
    
}