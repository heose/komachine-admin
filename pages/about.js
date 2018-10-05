import Link from 'next/link'
import React from "react";

const About = (props) => {
    console.log(props);
    return (
        <div>
            <p>Welcome to About!!!</p>
            <Link href="/">
                <a>home</a>
            </Link>
        </div>
    )
};

About.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent }
}

export default About;
