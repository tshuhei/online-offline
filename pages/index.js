import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default () => (
        <Layout>
        <div>
            <p>Online Offline</p>
            <p>expand your game play experience</p>
            <Link href="/signup">Get started!</Link>
            <p>if you have an account already, <Link href="/login">click here to login</Link></p>
        </div>
        <p>this is test</p>
        </Layout>
);