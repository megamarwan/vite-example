import React, { useRef, useEffect } from 'react';
import './navbar.css';
import ElectricBorder from './electric';
import CurvedLoop from './curved';

const Navigation = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const navbarRef = useRef(null);

  const scrollTo = (section) => {
    if (section === 'section1') {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'section2') {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'section3') {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const navbar = navbarRef.current;
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar" ref={navbarRef}>
        <button className="nav-button" onClick={() => scrollTo('section1')}>Section 1</button>
        <button className="nav-button" onClick={() => scrollTo('section2')}>Section 2</button>
        <button className="nav-button" onClick={() => scrollTo('section3')}>Section 3</button>
      </nav>

      <div ref={section1Ref} style={{ height: '100vh', backgroundColor: 'rgba(231, 218, 243, 1)', padding: '100px' }}>
        <h1>Section 1</h1>
        <p>This is the content of section 1.</p>
          <ElectricBorder
  color="#ee5706ff"
  speed={1}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 16 }}
>
  <div>
    <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
      biznas the world at your doorstep
    </p>
  </div>
</ElectricBorder>
      </div>
      <div ref={section2Ref} style={{ height: '50vh', backgroundColor: '#e7daf3ff', padding: '20px' }}>
        <h1>Section 2</h1>
        <p>This is the content of section 2.</p>
        
        
      </div>
      <CurvedLoop marqueeText="Welcome    to     Biznas     " />
      <div ref={section3Ref} style={{ height: '100vh', backgroundColor: '#e7daf3ff', padding: '20px' }}>
        <h1>Section 3</h1>
        <p>This is the content of section 3.</p>
      </div>
    </div>
  );
};

// Export the Navigation component
export default Navigation;