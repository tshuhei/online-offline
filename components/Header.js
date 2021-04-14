import React, {Component} from "react";
import Link from "next/link";

class Header extends Component{
    render(){
        return (
            <header>
                <div className="header-container">
                    <div className="header-left">
                        <img className="header-logo" src="logo.png" />
                    </div>
                    <div className="header-right">
                        <Link href="/">Top</Link>
                        <Link href="/">Language</Link>
                        {/* <Link href="/signup">Sign up</Link>
                        <Link href="/login">Log in</Link> */}
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;