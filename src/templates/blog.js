import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
require(`katex/dist/katex.min.css`)

export const query = graphql`
    query ($slug: String
           $markdownRemarkId: String
            ) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            author
            publishedDate(formatString:"MMMM Do, YYYY")
        }
        markdownRemark(id: { eq: $markdownRemarkId }) {
            html
        }
    }
`
const Blog = (props) => {
    const dt = props.data.contentfulBlogPost;
    const markdown = props.data.markdownRemark;
    return (
        <Layout>
            <h1>{dt.title}</h1>
            <p>{dt.author} - {dt.publishedDate}</p>
            <hr></hr>
            
            <section dangerouslySetInnerHTML={{__html:markdown.html}}></section>
        </Layout>
    )
}

export default Blog;