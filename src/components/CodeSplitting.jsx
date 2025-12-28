/*
1. ⚙️ How to Implement Code Splitting
Code splitting in React is typically implemented using two features: Dynamic import() and React.lazy() with <Suspense>.

A. Dynamic Imports
Instead of the static ES6 module syntax (import MyComponent from './MyComponent';), you use the dynamic import function.
 This tells bundlers (like Webpack or Rollup) to split the imported module into a separate bundle file.
Before (Static Import - All code loaded on startup):
JavaScript
import AboutPage from './pages/AboutPage'; // This component's code is in the main bundle.
After (Dynamic Import - Code loaded only when needed):
JavaScript
const AboutPage = () => import('./pages/AboutPage'); 
// This component's code is split into a separate chunk.
B. React.lazy() and <Suspense>
In React, you cannot use the dynamic import() directly in your component render logic. 
You need to use React.lazy() to wrap the dynamic import, 
and then use the <Suspense> component to handle the loading state while the chunk is being fetched.

*/
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Use React.lazy() to wrap the dynamic imports for pages.
// Each of these will be split into a separate JavaScript bundle/chunk.
const HomePage = lazy(() => import('./HomePage.jsx'));


function App() {
  return (
    <BrowserRouter>
      {/* 2. Wrap the routing logic with <Suspense> */}
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
         
          {/* When the user navigates to '/dashboard', the browser 
            starts downloading the UserDashboard chunk. 
            Until it's ready, the 'fallback' content is displayed.
          */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;