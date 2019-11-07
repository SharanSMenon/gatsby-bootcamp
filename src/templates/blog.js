import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
export const query = graphql`
    query ($slug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            author
            publishedDate(formatString:"MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`
const Blog = (props) => {
    const dt = props.data.contentfulBlogPost;
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const src = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={src}/>
            }
        }
    }
    return (
        <Layout>
            <h1>{dt.title}</h1>
            <p>{dt.author} - {dt.publishedDate}</p>
            <hr></hr>
            {documentToReactComponents(dt.body.json, options)}
            {/* <div dangerouslySetInnerHTML={{__html:dt.html}}></div> */}
        </Layout>
    )
}

export default Blog;