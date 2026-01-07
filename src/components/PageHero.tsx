import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, badge }) => {
  return (
    <div className="page-hero">
      {/* Background Pattern similar to Home Hero */}
      <div className="ph-bg-pattern" aria-hidden="true">
        <div className="ph-bg-dots"></div>
      </div>
      
      {/* Content */}
      <div className="ph-content">
        {badge && (
           <div className="ph-badge">
            {badge}
          </div>
        )}
        <h1 className="ph-title">
          {title}
        </h1>
        <p className="ph-subtitle">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHero;