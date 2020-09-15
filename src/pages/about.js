import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <h2>I'm Sharan, a machine learning enthusiast in Maryland</h2>
            <p>I have a lot of interests like mathematics, programming, machine learning, etc.</p>
            <p>Want to work with me? <Link to="/contact">Contact me.</Link></p>
            <ol>
                <li><a href="https://blog.sharansajivmenon.now.sh">https://blog.sharansajivmenon.now.sh</a></li>
                <li><a href="https://sharansmenon.github.io">My Website</a></li>
            </ol>
        </Layout>
    )
}

export default AboutPage