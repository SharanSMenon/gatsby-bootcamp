import React from 'react';
import Layout from '../components/layout'

import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost( sort: {fields: publishedDate, order:DESC}) {
                totalCount
                edges {
                    node {
                        title
                        author
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                        childContentfulBlogPostContentTextNode {
                            childMarkdownRemark {
                                timeToRead
                            }
                        }
                    }
                }
            }   
        }
    `)
    const edges = data.allContentfulBlogPost.edges;
    return (
        <Layout>
            <h1>Blog</h1>
            <p>There are {data.allContentfulBlogPost.totalCount} posts</p>
            <ol className={blogStyles.posts}>
                {
                    edges.map((edge, i) => {
                        console.log(edge)
                        return (
                            <li key={i} className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h3>{edge.node.title}</h3>
                                    <p>{edge.node.publishedDate} - {edge.node.childContentfulBlogPostContentTextNode.childMarkdownRemark.timeToRead} min read</p>
                                </Link>
                            </li>
                        )
                    }
                    )
                }
            </ol>
        </Layout>
    )
}
export default BlogPage