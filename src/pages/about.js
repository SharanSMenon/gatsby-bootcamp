import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <h2>I'm Sharan, a full stack developer living in Maryland</h2>
            <p>I have a lot of interests like mathematics, programming, machine learning, etc.</p>
            <p>Want to work with me? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage