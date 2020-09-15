import React from 'react';
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>You can click the link <a href="https://www.github.com" target="_blank">to go to my Github</a></p>
            <ul>
                <li><a href="https://www.instagram.com/sharansmenon22/">Instagram</a></li>
                <li><a href="https://twitter.com/SharanSajiv">Twitter</a></li>
                <li><a href="https://sharansmenon.github.io">Personal Website</a></li>
            </ul>
        </Layout>
    )
}

export default ContactPage