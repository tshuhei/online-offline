import React, {Component} from "react";
import {connect} from "react-redux";
import Router from 'next/router';


class Room extends Component{

    constructor(props){
        super(props);
        if(this.props.iscalled){
            this.makeCall();
        }else{
            this.respondCall();
        }
    }

    makeCall(){
        navigator.mediaDevices.getDisplayMedia({video: true})
        .then( stream => {
            this.setState({
                localStream: stream,
            });
            const videoElm = document.getElementById("my-video");
            videoElm.srcObject = stream;
            videoElm.play();
            const mediaConnection = this.props.peer.call(this.props.target,stream);
            mediaConnection.on('stream', stream => {
                // video要素にカメラ映像をセットして再生
                const videoElm = document.getElementById('target-video');
                videoElm.srcObject = stream;
                videoElm.play();
            });
        }).catch(error =>{
            console.log("mediaDevice.getDisplayMedia() error:", error);
            return;
        })
    }

    respondCall(){
        navigator.mediaDevices.getDisplayMedia({video: true})
        .then( stream => {
            this.setState({
                localStream: stream,
            });
            const videoElm = document.getElementById("my-video");
            videoElm.srcObject = stream;
            videoElm.play();
            this.props.mediaConnection.answer(stream);
            this.props.mediaConnection.on('stream', stream => {
                // video要素にカメラ映像をセットして再生
                const videoElm = document.getElementById('target-video');
                videoElm.srcObject = stream;
                videoElm.play();
            });
        }).catch(error =>{
            console.log("mediaDevice.getDisplayMedia() error:", error);
            return;
        })
    }

    render(){
        return (
            <div className="room-container">
                <div className="my-video-container">
                    <p className="my-video-label">My screen</p>
                    <video id="my-video" autoPlay muted playsInline></video>
                </div>
                <div className="target-video-container">
                    <p className="target-video-label">Target screen</p>
                    <video id="target-video" autoPlay muted playsInline></video>
                </div>
            </div>
        );
    }
}

Room = connect((state)=>state)(Room);
export default Room;