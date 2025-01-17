import React from 'react';

const BlogPost = ({ title, content }) => (
  <article>
    <h2>{title}</h2>
    <p>{content}</p>
  </article>
);

export default BlogPost;
