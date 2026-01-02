
import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import './About.css';

const About: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="about-page">
      {!isHomePage && (
        <SEO
          title="About Us - Viyara Embedded Solutions"
          description="Driving Embedded Innovation since 2020. Bridging the gap between complex hardware and efficient software."
          url="https://viyaraembedded.in/about"
        />
      )}
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-bg-pattern" aria-hidden="true">
          <div className="about-hero-bg-dots"></div>
        </div>
        <div className="about-hero-content">
          <div className="about-hero-badge">
            About Us
          </div>
          <h1 className="about-hero-title">
            Driving Embedded Innovation
          </h1>
          <p className="about-hero-subtitle">
            Founded in 2020, we bridge the gap between complex hardware and efficient software, helping companies build the next generation of smart devices.
          </p>
        </div>
      </div>

      {/* Removed background accent div */}

      <section className="about-content-section">
        <div className="about-flex-container">
          <div className="about-text-col">
            <h3 className="about-heading">Our Mission</h3>
            <div className="about-text">
              <p>
                <strong>VIYARAEMBEDDED</strong> was born from a passion for low-level engineering. We specialize in the niche but critical field of Board Support Packages (BSP) and embedded OS development.
              </p>
              <p>
                Our mission is to help hardware companies bring their products to market faster by handling the low-level software complexities that often become bottlenecks. We believe that robust software is the foundation of any reliable hardware product.
              </p>
              <p>
                Whether it's a medical device requiring high reliability or an industrial controller needing real-time performance, our team delivers production-grade code that you can trust.
              </p>
            </div>

            <div className="about-stats">
              <div>
                <div className="stat-value">5+</div>
                <div className="stat-label">Years Active</div>
              </div>
              <div>
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div>
                <div className="stat-value">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="about-image-col">
            <div className="about-images-grid">
              <img src="/images/viyara-logo.png" alt="Lab" className="about-img img-offset" />
              <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Team" className="about-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;