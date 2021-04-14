import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default () => (
        <Layout>
        <div className="top-container">
            <p className="top-title"><span className="head-character">O</span>NLINE <span className="head-character">O</span>FFLINE</p>
            <p className="top-title-small"><span className="head-character">E</span>xpand your game play experience</p>
            <Link href="/create" className="top-link">Get started</Link>
        </div>
        </Layout>
);