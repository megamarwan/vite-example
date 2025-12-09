// 1. Import React and necessary hooks from the React library
import React, { useRef, useEffect } from 'react'; 
// `useRef` is used to create references to DOM elements,
// `useEffect` is used to manage side effects in the component.

// 2. Import CSS for styling the navbar
import './navbar.css'; 

// 3. Import custom components
import ElectricBorder from './electric'; // Animated border effect component
import CurvedLoop from './curved'; // Another visual component, though unused in this snippet

// 4. Define a functional component named Navigation
const Navigation = () => {
  // 5. Create refs to access DOM elements for sections and navbar
  const section1Ref = useRef(null); // Reference for Section 1
  const section2Ref = useRef(null); // Reference for Section 2
  const section3Ref = useRef(null); // Reference for Section 3
  const navbarRef = useRef(null); // Reference for the navbar itself

  // 6. Function to scroll to a specified section
  const scrollTo = (section) => {
    // 7. Check which section to scroll to based on the argument
    if (section === 'section1') {
      // 8. Scroll to Section 1 smoothly
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'section2') {
      // 9. Scroll to Section 2 smoothly
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'section3') {
      // 10. Scroll to Section 3 smoothly
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 11. useEffect hook to manage the sticky navbar functionality
  useEffect(() => {
    // 12. Get the current navbar element from the ref
    const navbar = navbarRef.current;
    // 13. Get the vertical position of the navbar
    const sticky = navbar.offsetTop;

    // 14. Function to handle scroll events
    const handleScroll = () => {
      // 15. Check if the page has been scrolled past the navbar position
      if (window.pageYOffset > sticky) {
        // 16. Add the "sticky" class to the navbar to fix it at the top
        navbar.classList.add("sticky");
      } else {
        // 17. Remove the "sticky" class when scrolling back up
        navbar.classList.remove("sticky");
      }
    };

    // 18. Add the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // 19. Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array means this effect runs only on mount and unmount.

  // 20. Render the component's JSX
  return (
    <div>
      
      <nav className="navbar" ref={navbarRef}>
        <button className="nav-button" onClick={() => scrollTo('section1')}>Section 1</button>
        <button className="nav-button" onClick={() => scrollTo('section2')}>Section 2</button>
        <button className="nav-button" onClick={() => scrollTo('section3')}>Section 3</button>
      </nav>

      
      <div ref={section1Ref} style={{ height: '100vh', backgroundColor: '#f4f4f4', padding: '100px' }}>
        <h1>Section 1</h1>
        <p>This is the content of section 1.</p>
        
        <ElectricBorder
          color="#ee5706ff" // Color of the border
          speed={1}        // Speed of the animation
          chaos={0.5}     // Chaotic movement of the border
          thickness={2}   // Thickness of the border
          style={{ borderRadius: 16 }} // Apply border radius
        >
          <div>
            <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
              biznas the world at your doorstep
            </p>
          </div>
        </ElectricBorder>
      </div>

     
      <div ref={section2Ref} style={{ height: '50vh', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <h1>Section 2</h1>
        <p>This is the content of section 2.</p>
      </div>

      
      <div ref={section3Ref} style={{ height: '100vh', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <h1>Section 3</h1>
        <p>This is the content of section 3.</p>
      </div>
    </div>
  );
};

// 26. Export the Navigation component for use in other parts of the application
export default Navigation;