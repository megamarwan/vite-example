import React, { useRef, useEffect } from 'react';
import { Home, User, Settings, Rocket } from 'lucide-react';

// Define colors
const PRIMARY_COLOR = '#fe5304'; // Orange
const ACCENT_COLOR = '#fe5304'; // Dark Gray

// SectionContent Component
const SectionContent = ({ title, content, icon: Icon, color, children }) => (
  <div
    style={{ backgroundColor: color, minHeight: '100vh', scrollMarginTop: '64px' }}
    className={`p-10 md:p-20 flex flex-col justify-center items-center text-center`}
  >
    <div
      className="max-w-4xl mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] border-t-4"
      style={{ borderColor: PRIMARY_COLOR }}
    >
      <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
      <h1 className="text-4xl font-extrabold mb-4" style={{ color: ACCENT_COLOR }}>{title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">{content}</p>
      {children}
    </div>
  </div>
);

// NavbarMUI Component
const NavbarMUI = () => { 
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };
  const navbarRef = useRef(null);

  const navItems = [
    { key: 'section1', label: 'Section 1', icon: Home },
    { key: 'section2', label: 'Section 2', icon: User },
    { key: 'section3', label: 'Section 3', icon: Settings },
  ];

  const scrollTo = (key) => {
    const ref = sectionRefs[key].current;
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const navbar = navbarRef.current;
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      navbar.classList.toggle('sticky-active', window.pageYOffset > sticky);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav 
        ref={navbarRef}
        className="navbar-base transition-all duration-300 ease-in-out"
        style={{ backgroundColor: ACCENT_COLOR }} 
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Rocket className="w-6 h-6" style={{ color: PRIMARY_COLOR }} />
            <span className="text-xl font-bold tracking-wider text-shadow-md" style={{ color: PRIMARY_COLOR }}>BIZNAS DASH</span>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-white hover:bg-gray-700/80"
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </div>

          {/* mobile toggle removed */}
        </div>
      </nav>

      {/* Sections */}
      <div ref={sectionRefs.section1}>
        <SectionContent 
          title="Section 1"
          content="This is the main content area for Section 1."
          icon={Home}
          color="#fef3e5" 
        />
      </div>

      <div ref={sectionRefs.section2}>
        <SectionContent
          title="Section 2"
          content="This section provides details pertinent to users."
          icon={User}
          color="#f4f4f4" 
        />
      </div>

      <div ref={sectionRefs.section3}>
        <SectionContent
          title="Section 3"
          content="Access various settings and configurations."
          icon={Settings}
          color="#f7f7f7" 
        />
      </div>

      <style>{`
        .navbar-base {
          width: 100%;
          position: relative;
          z-index: 30;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .sticky-active {
          position: fixed;
          top: 0;
          box-shadow: 0 6px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.2); 
        }

        html {
          scroll-behavior: smooth;
        }
        
        .text-shadow-md {
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default NavbarMUI;