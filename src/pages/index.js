import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Hebcal from 'hebcal'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'

import Daf from '../components/Daf'
const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>
          לעילוי נשמת הילד יעקב יוסף בן אהרן דוד יודא <Daf />
        </h1>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            description
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
