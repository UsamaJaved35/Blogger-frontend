import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPostForm = ({ onSuccess }) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (id) {
      const fetchBlogPost = async () => {
        try {
          const response = await axios.get(`/api/blogposts/${id}`);
          const { title, content, author } = response.data;
          setTitle(title);
          setContent(content);
          setAuthor(author);
        } catch (error) {
          console.error('Error fetching blog post:', error);
        }
      };

      fetchBlogPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/blogposts/${id}`, { title, content, author });
      } else {
        await axios.post('/api/blogposts', { title, content, author });
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving blog post:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? 'Edit Blog Post' : 'Create Blog Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            rows={20}
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default BlogPostForm;
