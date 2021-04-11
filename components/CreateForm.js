import React, {Component} from "react";
import {connect} from "react-redux";
import Router from 'next/router';


class CreateForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
        }
        this.doSubmit = this.doSubmit.bind(this);
        this.doChange = this.doChange.bind(this);
    }

    doSubmit(e){
        e.preventDefault();
        console.log("Clicked!");
        console.log(this.state.username);
        let action = {
            type: "CREATE",
            message: this.state.username,
        }
        this.props.dispatch(action);
        Router.push("/target");
    }

    doChange(e){
        this.setState({
            username: e.target.value,
        });
    }

    render(){
        return (
            <div>
                <form>
                    <div>
                        <label for="username">User name:</label>
                        <input type="text" id="username" name="username" onChange={this.doChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Create account" onClick={this.doSubmit}/>
                    </div>
                </form>
            </div>
        );
    }
}

CreateForm = connect((state)=>state)(CreateForm);
export default CreateForm;