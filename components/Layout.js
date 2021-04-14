import React, {Component} from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../public/Style";

class Layout extends Component{
    render(){
        return (
            <div>
                <Head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="stylesheet" href="https://use.typekit.net/szh6iai.css"/>
                    <link rel="shortcut icon" href="favicon2.ico" type="image/x-icon"/>
                </Head>
                {style}
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout;