import React, {Component} from "react";
import {connect} from "react-redux";
import Router from 'next/router';


class Room extends Component{

    constructor(props){
        super(props);
        this.state = {
            target: "",
        }
    }

    render(){
        return (
            <div>
                <p>This is room</p>
            </div>
        );
    }
}

Room = connect((state)=>state)(Room);
export default Room;