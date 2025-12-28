import React, { useState } from 'react';

// A simple utility function to generate unique IDs
// (In a real application, this ID would come from a database after submission)
const generateId = () => Date.now(); 

function CommentSection() {
  // State 1: The array of all comments
  const [comments, setComments] = useState([
    { id: 1, author: 'Alice', text: 'Great article! Very helpful.', timestamp: '10:00 AM' },
    { id: 2, author: 'Bob', text: 'I have a question about this topic.', timestamp: '10:05 AM' },
  ]);

  // State 2: The text currently being typed in the input field (Controlled Component)
  const [newCommentText, setNewCommentText] = useState('');

  // State 3: The author's name for the new comment
  const [newCommentAuthor, setNewCommentAuthor] = useState('Guest');

  // Handler for the main comment text input
  const handleTextChange = (event) => {
    setNewCommentText(event.target.value);
  };

  // Handler for the author name input
  const handleAuthorChange = (event) => {
    setNewCommentAuthor(event.target.value);
  };

  // Handler for when the user submits the form
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the browser from reloading the page

    // Basic validation
    if (newCommentText.trim() === '') {
      alert('Please enter a comment before submitting.');
      return;
    }

    // Create the new comment object
    const newComment = {
      id: generateId(),
      author: newCommentAuthor.trim() || 'Anonymous', // Use 'Anonymous' if author is empty
      text: newCommentText.trim(),
      timestamp: new Date().toLocaleTimeString(),
    };

    // Update the comments state: Add the new comment to the *front* of the existing array
    // This is the correct way to update an array state in React (creating a new array)
    setComments([newComment, ...comments]); 

    // Clear the form inputs after submission
    setNewCommentText('');
  };

  return (
    <div className="comment-section" style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Comments ({comments.length})</h2>

      {/* A. Comment Input Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h4>Add a Comment</h4>
        
        {/* Author Input (Controlled Component) */}
        <input
          type="text"
          placeholder="Your Name (Optional)"
          value={newCommentAuthor}
          onChange={handleAuthorChange}
          style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
        />
        
        {/* Comment Textarea (Controlled Component) */}
        <textarea
          placeholder="Write your comment here..."
          value={newCommentText}
          onChange={handleTextChange}
          rows="4"
          style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          required
        />
        
        <button 
          type="submit" 
          style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
          Post Comment
        </button>
      </form>

      {/* B. Comment List Display */}
      <div className="comment-list">
        {/* List Rendering using .map() is essential here */}
        {comments.map((comment) => (
          <div 
            key={comment.id} // The unique 'key' is crucial for list performance!
            className="comment-item" 
            style={{ borderBottom: '1px solid #eee', padding: '15px 0' }}
          >
            <p>
              <strong>{comment.author}</strong> 
              <span style={{ fontSize: '0.8em', color: '#666', marginLeft: '10px' }}>
                {comment.timestamp}
              </span>
            </p>
            <p style={{ marginTop: '5px' }}>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;