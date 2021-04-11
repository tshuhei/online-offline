import React, {Component} from "react";
import Head from "next/head";
import Header from "../components/Header";
import style from "../public/Style";

class Layout extends Component{
    render(){
        return (
            <div>
                <Head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                {style}
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;