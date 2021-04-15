import Room from "../components/Room";
import Head from "next/head";
import style from "../public/Style";

export default () => (
            <div>
                <Head>
                <title>Online Offline | Room</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="stylesheet" href="https://use.typekit.net/szh6iai.css"/>
                <link rel="shortcut icon" href="favicon2.ico" type="image/x-icon"/>
                </Head>
                {style}
                <style>{`
                    body{
                        background-image: none;
                    }
                `}</style>
                <Room/>
            </div>
);