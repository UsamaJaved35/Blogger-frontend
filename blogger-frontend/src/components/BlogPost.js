import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, content, author, date, filter }) => {
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`/api/blogposts/${postId}`);
      // fetchBlogPosts(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };
  return (
    <div className="card mb-3 w-25 p-2 m-2 flex-wrap">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text"><small className="text-muted">Author: {author}</small></p>
        <p className="card-text"><small className="text-muted">Posted on: {new Date(date).toLocaleDateString()}</small></p>
        { filter === 'my-posts' &&
          <>
          <Link to={`/edit/${id}`} className="btn btn-warning me-2">✏️ Edit</Link>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(id)}
          >
            🗑️ Delete
          </button>
          </>
        }
      </div>
    </div>
  );
};

export default BlogPost;
