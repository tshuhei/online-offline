import React, {Component} from "react";
import Link from "next/link";

class LoginForm extends Component{
    render(){
        return (
            <div>
                <form>
                    <div>
                        <label for="useridoremail">User ID or Email:</label>
                        <input type="text" id="useridoremail" name="useridoremail"/>
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="text" id="password" name="password"/>
                    </div>
                    <div>
                        <input type="submit" value="Login"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;