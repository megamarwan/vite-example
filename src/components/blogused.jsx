// App.js

import React from 'react';
import BlogPost from './blog.jsx';// Import the component


// Define the example post data (same as above)
const examplePost = {
  id: 1,
  title: "The Future of AI in Web Development",
  author: "Alex Smith",
  date: "October 26, 2025",
  content: "Artificial Intelligence is rapidly changing how we write code. Tools like code completion and automated testing are becoming standard, allowing developers to focus more on architecture and creative problem-solving. This shift promises increased efficiency and faster delivery cycles.",
  tags: ["AI", "Web Dev", "Future Tech"],
  imageUrl: "https://via.placeholder.com/600x300?text=AI+in+Web+Dev"
};

function Blogused() {
  return (
    <div className="app-container">
      <header>
        <h1>My Awesome Blog</h1>
      </header>
      {/* Render the component with the post data */}
      <main>
        <BlogPost post={examplePost} />
      </main>
    </div>
  );
}

export default Blogused;