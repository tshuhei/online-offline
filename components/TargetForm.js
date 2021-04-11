import React, {Component} from "react";
import {connect} from "react-redux";
import Router from 'next/router';
import Peer from 'skyway-js';


class TargetForm extends Component{

    constructor(props){
        super(props);
        this.doSubmit = this.doSubmit.bind(this);
        this.doChange = this.doChange.bind(this);
        console.log(this.props.username);
        let peer = new Peer(this.props.username,{
            key: '76263a48-cad2-4f85-a676-1da2490a20c9',
            debug: 3,
        });
        peer.on("call",mediaConnection => {
            
        });
        this.state = {
            target: "",
            peer: peer
        }
    }

    doSubmit(e){
        e.preventDefault();
        console.log("Target Clicked!");
        console.log(this.state.target);
        let action = {
            type: "TARGET",
            message: this.state.target,
            peer: this.state.peer,
            iscalled: true
        }
        this.props.dispatch(action);
        Router.push("/room");
    }

    doChange(e){
        this.setState({
            target: e.target.value,
        });
    }

    render(){
        return (
            <div>
                <form>
                    <div>
                        <label for="target">Target User ID:</label>
                        <input type="text" id="target" name="target" onChange={this.doChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Connect" onClick={this.doSubmit}/>
                    </div>
                </form>
            </div>
        );
    }
}

TargetForm = connect((state)=>state)(TargetForm);
export default TargetForm;