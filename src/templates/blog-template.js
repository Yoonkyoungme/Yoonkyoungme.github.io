import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import PostHeader from '../components/post-header';
import PostNavigator from '../components/post-navigator';
import Post from '../models/post';
import PostContent from '../components/post-content';
import Giscus from '../components/giscus';

function BlogTemplate({ data }) {
  const curPost = new Post(data.cur);
  const prevPost = data.prev && new Post(data.prev);
  const nextPost = data.next && new Post(data.next);
  const { comments } = data.site?.siteMetadata;
  const giscusRepo = comments?.giscus?.repo;
  const giscusRepoId = comments?.giscus?.repoId;
  const giscusCategoryId = comments?.giscus?.categoryId;

  return (
    <Layout>
      <Seo title={curPost?.title} description={curPost?.excerpt} />
      <PostHeader post={curPost} />
      <PostContent html={curPost.html} />
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      {giscusRepo && giscusRepoId && giscusCategoryId && (
        <Giscus
          repo={giscusRepo}
          repoId={giscusRepoId}
          categoryId={giscusCategoryId}
          path={curPost.slug}
        />
      )}
    </Layout>
  );
}

export default BlogTemplate;

export const pageQuery = graphql`
  query($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500, truncate: true)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        siteUrl
        comments {
          giscus {
            repo
            repoId
            categoryId
          }
        }
      }
    }
  }
`;
