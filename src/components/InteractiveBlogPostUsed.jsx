// Blogpost.jsx (or Blogpost.js)

import React from 'react';
// 1. Import the new interactive component
import InteractiveBlogPost from './InteractiveBlogPost.jsx'
 

// 2. Define the example post data with initial interactive metrics
const examplePost = {
  id: 1,
  title: "The Future of AI in Web Development",
  author: "Alex Smith",
  date: "October 26, 2025",
  content: "Artificial Intelligence is rapidly changing how we write code. Tools like code completion and automated testing are becoming standard, allowing developers to focus more on architecture and creative problem-solving. This shift promises increased efficiency and faster delivery cycles.",
  tags: ["AI", "Web Dev", "Future Tech"],
  imageUrl: "https://https://via.placeholder.com/600x300?text=AI+in+Web+Dev",
  initialLikes: 15,     // Data for the like counter state
  initialComments: 3    // Data for the comment counter display
};

function InteractiveBlogPostUsed() {
  return (
    <div className="Blogpost-container">
      <header>
        <h1>Welcome to My Interactive Blog Feed</h1>
        <p>A demonstration of state management in React.</p>
      </header>
      
      <main>
        {/* 3. Render the component, passing the full data object as a single 'post' prop */}
        <InteractiveBlogPost post={examplePost} />
      </main>
      
      <footer>
        <p>© 2025 Interactive Blog Demo</p>
      </footer>
    </div>
  );
}

export default InteractiveBlogPostUsed;