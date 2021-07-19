import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "./Layout";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  const data = useStaticQuery(graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`);

  return (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={data.mdx.frontmatter}>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  );
}

export default posts-page-layout.js