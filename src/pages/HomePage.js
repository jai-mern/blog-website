import React from 'react';
import BlogPost from '../components/BlogPost';

const HomePage = () => (
  <div>
    <h1>Welcome to Our Blog</h1>
    <BlogPost title="First Post" content="This is the content of the first post." />
    <BlogPost title="Second Post" content="This is the content of the second post." />
  </div>
);

export default HomePage;
