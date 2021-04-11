import React, {Component} from "react";
import Link from "next/link";

class Header extends Component{
    render(){
        return (
            <header>
                <div class="header-container">
                    <div class="header-left">
                        <h1>Online Offline</h1>
                    </div>
                    <div class="header-right">
                        <Link href="/">Top</Link>
                        <Link href="/signup">Sign up</Link>
                        <Link href="/login">Log in</Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;