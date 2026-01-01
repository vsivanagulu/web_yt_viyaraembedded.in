
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { BLOGS } from '../../constants';
import './Blogs.css';

const Blogs: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`blogs-page ${isHomePage ? 'blogs-home-mode' : ''}`}>
      {/* Header Section */}
      {isHomePage ? (
        <div className="blogs-home-header">
          <span className="blogs-hero-badge">Latest Insights</span>
          <h2 className="blogs-hero-title">Engineering Blog</h2>
          <p className="blogs-hero-subtitle">
            Insights, tutorials, and deep dives into Embedded Linux, Yocto, and Real-Time Operating Systems.
          </p>
        </div>
      ) : (
        <div className="blogs-hero">
          <div className="blogs-hero-bg-pattern" aria-hidden="true">
            <div className="blogs-hero-bg-dots"></div>
          </div>
          <div className="blogs-hero-content">
            <div className="blogs-hero-badge">
              Latest Insights
            </div>
            <h1 className="blogs-hero-title">
              Engineering Blog
            </h1>
            <p className="blogs-hero-subtitle">
              Insights, tutorials, and deep dives into Embedded Linux, Yocto, and Real-Time Operating Systems.
            </p>
          </div>
        </div>
      )}
      
      <section className="blogs-content-section">
        <div className="blogs-grid">
          {BLOGS.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-category">{blog.category}</div>
              <h4 className="blog-title">{blog.title}</h4>
              <p className="blog-excerpt">
                {blog.excerpt}
              </p>
              <div className="blog-meta">
                <div className="blog-meta-info">
                  <span>{blog.date}</span>
                  <span className="blog-meta-separator">•</span>
                  <span>5 min read</span>
                </div>
                <ArrowRight className="blog-arrow-icon" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more-container">
           <button className="load-more-btn">
            Load More Articles
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
