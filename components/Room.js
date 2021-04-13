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
        //this.initializeScreenShare();
        if(this.props.iscalled){
            this.makeCall();
        }else{
            this.respondCall();
        }
        this.doShare = this.doShare.bind(this);
    }

    // initializeScreenShare(){
    //     navigator.mediaDevices.getDisplayMedia({video: true})
    //     .then( stream => {
    //         this.setState({
    //             localStream: stream,
    //         });
    //         const videoElm = document.getElementById("my-video");
    //         videoElm.srcObject = stream;
    //         videoElm.play();
    //         this.props.mediaConnection.replaceStream(stream);
    //     }).catch( error =>{
    //         console.log("mediaDevice.getDisplayMedia() error:", error);
    //         return;
    //     })
    // }

    makeCall(){
        console.log("Make Call!");
        navigator.mediaDevices.getDisplayMedia({video: true})
        .then( stream => {
            this.setState({
                localStream: stream,
            });
            const videoElm = document.getElementById("my-video");
            videoElm.srcObject = stream;
            videoElm.play();
            const mediaConnection = this.props.peer.call(this.props.target,stream);
        }).catch(error =>{
            console.log("mediaDevice.getDisplayMedia() error:", error);
            return;
        })
    }

    respondCall(){
        console.log("Respond Call");
        navigator.mediaDevices.getDisplayMedia({video: true})
        .then( stream => {
            this.setState({
                localStream: stream,
            });
            const videoElm = document.getElementById("my-video");
            videoElm.srcObject = stream;
            videoElm.play();
            this.props.mediaConnection.answer(stream);
        }).catch(error =>{
            console.log("mediaDevice.getDisplayMedia() error:", error);
            return;
        })
    }

    doShare(e){
        navigator.mediaDevices.getDisplayMedia({video: true})
        .then( stream => {
            this.setState({
                localStream: stream,
            });
            const videoElm = document.getElementById("my-video");
            videoElm.srcObject = stream;
            videoElm.play();
            this.props.mediaConnection.replaceStream(stream);
        }).catch( error =>{
            console.log("mediaDevice.getDisplayMedia() error:", error);
            return;
        })
    }

    render(){
        return (
            <div>
                <p>My screen</p>
                <video id="my-video" width="400px" autoPlay muted playsInline></video>
                <p>Target screen</p>
                <video id="target-video" width="400px" autoPlay muted playsInline></video>
                <button id="replace-button" onClick={this.doShare}>Share screen</button>
            </div>
        );
    }
}

Room = connect((state)=>state)(Room);
export default Room;