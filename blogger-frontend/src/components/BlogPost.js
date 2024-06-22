import React from 'react';

const BlogPost = ({ title, content, author, date }) => {
  return (
    <div className="card mb-3 w-25">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text"><small className="text-muted">Author: {author}</small></p>
        <p className="card-text"><small className="text-muted">Posted on: {new Date(date).toLocaleDateString()}</small></p>
      </div>
    </div>
  );
};

export default BlogPost;
