import React, {Component} from "react";
import {connect} from "react-redux";
import Router from 'next/router';


class Room extends Component{

    constructor(props){
        super(props);
        this.initializeScreenShare();
        if(this.props.iscalled){
            this.makeCall();
        }else{
            this.respondCall();
        }
    }

    initializeScreenShare(){
        navigator.mediaDevices.getDisplayMedia({video: true})
        .then( stream => {
            //const videoElm = document.getElementById("my-video");
            //videoElm.srcObject = stream;
            //videoElm.play();
            this.setState({
                localStream: stream,
            });
        }).catch( error =>{
            console.log("mediaDevice.getDisplayMedia() error:", error);
            return;
        })
    }

    makeCall(){
        console.log("Make Call!");
    }

    respondCall(){
        console.log("Respond Call");
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