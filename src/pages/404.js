import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby';
export default (props) => {
    return (
        <Layout>
            <h1>404 Error. Page not found.</h1>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}