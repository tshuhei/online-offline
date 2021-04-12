import React, {Component} from "react";
import {connect} from "react-redux";
import Router from 'next/router';


class Room extends Component{

    constructor(props){
        super(props);
        this.props.mediaConnection.on('stream', stream => {
            // video要素にカメラ映像をセットして再生
            console.error("STREAM RECEIVED!");
            const videoElm = document.getElementById('target-video');
            videoElm.srcObject = stream;
            videoElm.play();
        });
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
            this.props.mediaConnection.replaceStream(stream);
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
                <video id="target-video" width="400px" autoplay muted playsinline></video>
            </div>
        );
    }
}

Room = connect((state)=>state)(Room);
export default Room;