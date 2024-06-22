// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import BlogPost from './BlogPost';

const BlogList = ({filter}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, [filter]);

  const fetchBlogPosts = async () => {
    try {
    //   const response = await axios.get('/api/blogposts'); // Replace with your API endpoint
    //   setBlogPosts(response.data); // Assuming response.data is an array of blog posts
    // const endpoint = filter === 'my-posts' ? '/api/my-posts' : '/api/blogposts'; // Adjust endpoints as needed
    // const response = await axios.get(endpoint);
    setBlogPosts([{id:1,title:"abc",content:"content",author:"usama",date:Date.today}])
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{filter === 'my-posts' ? 'My Blog Posts' : 'All Blog Posts'}</h2>
      {blogPosts.map(post => (
        <BlogPost
          key={post.id} //  each post has a unique ID
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
