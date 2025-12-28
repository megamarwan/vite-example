import React from 'react';

// --- Sub-Components (Usually defined in separate files) ---

// Component 1: The main navigation bar
const Header = () => (
  <header className="header">
    <div className="logo">MyBrand.</div>
    <nav>
      <a href="/products">Products</a>
      <a href="/about">About</a>
      <a href="/login">Login</a>
    </nav>
  </header>
);

// Component 2: The main attention-grabbing section
const HeroSection = () => (
  <section className="hero">
    <h1>🚀 Launch Your Vision Today</h1>
    <p>The simplest, most powerful platform to build, launch, and scale your application.</p>
    <button className="cta-primary">Get Started Free</button>
  </section>
);

// Component 3: Showcasing features or product benefits
const FeatureGrid = () => (
  <section className="features">
    <h2>Why Choose Us?</h2>
    <div className="grid">
      <div className="feature-card">
        <h3>Fast Delivery</h3>
        <p>Utilize our global network for lightning-fast speeds.</p>
      </div>
      <div className="feature-card">
        <h3>Secure</h3>
        <p>Industry-leading encryption protects your data 24/7.</p>
      </div>
      <div className="feature-card">
        <h3>Scalable</h3>
        <p>Grow from one user to millions without a hiccup.</p>
      </div>
    </div>
  </section>
);

// Component 4: Call to Action to convert visitors
const CallToAction = () => (
  <section className="cta-banner">
    <h2>Ready to Transform Your Business?</h2>
    <button className="cta-secondary">Book a Demo</button>
  </section>
);

// Component 5: Footer with links and copyright
const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="/privacy">Privacy Policy</a> | 
      <a href="/terms">Terms of Service</a> | 
      <a href="/contact">Contact</a>
    </div>
    <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
  </footer>
);


// --- Main Homepage Component ---

// This is the main component that orchestrates the layout
export default function HomePage() {
  return (
    <div className="homepage">
      {/* 1. Navigation Bar */}
      <Header />

      {/* 2. Main Content Area */}
      <main>
        {/* The first, attention-grabbing block */}
        <HeroSection />

        {/* The section highlighting key features/services */}
        <FeatureGrid />

        {/* A final section to push a conversion action */}
        <CallToAction />
      </main>

      {/* 3. Footer Area */}
      <Footer />
    </div>
  );
}

// NOTE: This example only provides the JSX structure. 
// The actual visual styling (CSS/Tailwind) would be implemented externally.