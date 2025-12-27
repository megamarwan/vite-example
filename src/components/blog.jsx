// BlogPost.js

import React from 'react';
import './Blogpost.css'; // Assume you have a CSS file for styling

/**
 * Renders a single, detailed blog post.
 * * @param {object} props - The component props.
 * @param {object} props.post - The object containing post details (title, author, content, etc.).
 */
const BlogPost = ({ post }) => {
  // Destructure the properties from the post object for cleaner access
  const { title, author, date, content, tags, imageUrl } = post;

  return (
    <article className="blog-post">
      {/* Post Image */}
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={`Visual for ${title}`} 
          className="blog-post-image" 
        />
      )}
      
      {/* Post Header */}
      <header className="post-header">
        <h1 className="post-title">{title}</h1>
        <div className="post-meta">
          <span className="post-author">By: **{author}**</span> | 
          <time className="post-date" dateTime={new Date(date).toISOString()}>
            Published on: {date}
          </time>
        </div>
      </header>
      
      {/* Post Content */}
      <section className="post-content">
        <p>{content}</p>
      </section>
      
      {/* Post Tags */}
      {tags && tags.length > 0 && (
        <footer className="post-footer">
          <p>Tags:</p>
          <div className="tag-list">
            {tags.map((tag, index) => (
              <span key={index} className="post-tag">
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
};

export default BlogPost;