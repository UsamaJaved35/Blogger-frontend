import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogPost from './BlogPost';

const BlogList = ({filter}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const handleDeletePost = async (deletedPostId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:5000/api/blogs/${deletedPostId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      alert(response.data.message)
      // setBlogPosts(prevPosts => prevPosts.filter(post => post._id !== deletedPostId));
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, [filter,handleDeletePost]);

  const fetchBlogPosts = async () => {
    try {
    const endpoint = filter === 'my-posts' ? 'http://localhost:5000/api/blogs/my-blogs' : 'http://localhost:5000/api/blogs/'; // Adjust endpoints as needed
    const token = localStorage.getItem('token');
      const response = await axios.get(endpoint,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    setBlogPosts(response.data)
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };


  return (
    <div className="container mt-4">
      <h2 className="mb-4">{filter === 'my-posts' ? 'My Blog Posts' : 'All Blog Posts'}</h2>
      { filter === 'my-posts' &&
        <Link to="/create" className="btn btn-primary mb-3">➕ Create New Post</Link>
      }
      <div className='d-flex'>
      {blogPosts.map(post => (
        <>
        <BlogPost
          key={post._id} //  each post has a unique ID
          id={post._id}
          title={post.title}
          content={post.content}
          author={post.author.username}
          date={post.date}
          filter={filter}
          onDelete={() => handleDeletePost(post._id)}
        />
          </>
      ))}
      </div>
    </div>
  );
};

export default BlogList;