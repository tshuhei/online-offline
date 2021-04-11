import React, {Component} from "react";
import {connect} from "react-redux";
import Router from 'next/router';


class TargetForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            target: "",
        }
        this.doSubmit = this.doSubmit.bind(this);
        this.doChange = this.doChange.bind(this);
    }

    doSubmit(e){
        e.preventDefault();
        console.log("Target Clicked!");
        console.log(this.state.target);
        let action = {
            type: "TARGET",
            message: this.state.target,
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