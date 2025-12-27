// InteractiveBlogPost.js

import React, { useState } from 'react';
import './Blogpost.css'; // Use the same styling file

/**
 * Renders a blog post with interactive features (Like, Share, Comment).
 * @param {object} props - The component props.
 * @param {object} props.post - The object containing post details.
 */
const InteractiveBlogPost = ({ post }) => {
  const { title, author, date, content, tags, imageUrl, initialLikes = 15, initialComments = 3 } = post;

  // 1. State for the Like Count
  const [likeCount, setLikeCount] = useState(initialLikes);
  // 2. State to track if the current user has liked the post
  const [isLiked, setIsLiked] = useState(false);

  // Function to handle the like action
  const handleLike = () => {
    if (isLiked) {
      // Unlike the post
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      // Like the post
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    }
  };

  // Function stubs for other actions
  const handleShare = () => {
    // In a real app, this would trigger a social share dialog or copy link to clipboard
    console.log(`Sharing post: ${title}`);
    alert(`The post has been shared! (Simulation)`);
  };

  const handleComment = () => {
    // In a real app, this would scroll to the comments section or open a modal
    console.log(`Viewing comments for post: ${title}`);
    alert(`Navigating to comments section... (Simulation)`);
  };

  return (
    <article className="blog-post">
      {/* ... (Post Content - Header, Image, Content, Tags) ... */}

      {/* Post Image */}
      {imageUrl && <img src={imageUrl} alt={`Visual for ${title}`} className="blog-post-image" />}
      
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
      
      {/* Post Footer/Tags */}
      {tags && tags.length > 0 && (
        <footer className="post-footer">
          <p>Tags: {tags.map((tag, index) => (<span key={index} className="post-tag">#{tag}</span>))}</p>
        </footer>
      )}

      {/* INTERACTIVE ACTIONS SECTION */}
      <hr />
      <div className="post-actions">
        {/* Like Button with Dynamic Styling and State */}
        <button 
          className={`action-button like-button ${isLiked ? 'liked' : ''}`} 
          onClick={handleLike}
        >
          {/* Use a simple icon/text for the button */}
          <span role="img" aria-label="like">👍</span> 
          {isLiked ? ' Liked' : ' Like'} ({likeCount})
        </button>

        {/* Comment Button with Initial Count */}
        <button 
          className="action-button comment-button" 
          onClick={handleComment}
        >
          <span role="img" aria-label="comment">💬</span> 
          Comment ({initialComments})
        </button>

        {/* Share Button */}
        <button 
          className="action-button share-button" 
          onClick={handleShare}
        >
          <span role="img" aria-label="share">🔗</span> 
          Share
        </button>
      </div>
      {/* END INTERACTIVE ACTIONS SECTION */}
    </article>
  );
};

export default InteractiveBlogPost;