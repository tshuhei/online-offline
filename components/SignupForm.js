import React, {Component} from "react";
import Link from "next/link";

class SignupForm extends Component{
    render(){
        return (
            <div>
                <form>
                    <div>
                        <label for="userid">User ID:</label>
                        <input type="text" id="userid" name="userid"/>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="text" id="password" name="password"/>
                    </div>
                    <div>
                        <input type="submit" value="Create Account"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;