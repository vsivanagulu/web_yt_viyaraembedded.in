
import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCTS } from '../../constants';
import './Products.css';

const Products: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="products-page">
      {/* Hero Section */}
      <div className={`products-hero ${isHomePage ? 'products-hero-home' : ''}`}>
        <div className="products-hero-bg-pattern" aria-hidden="true">
          <div className="products-hero-bg-dots"></div>
        </div>
        <div className="products-hero-content">
          <div className="products-hero-badge">
            Our Hardware
          </div>
          <h1 className="products-hero-title">
            Custom Development Boards
          </h1>
          <p className="products-hero-subtitle">
            Production-ready Single Board Computers (SBCs) and System on Modules (SoMs) tailored for industrial and commercial applications.
          </p>
        </div>
      </div>
      
      <section className="products-section">
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-img"
                />
                <div className="product-badge">
                  {product.badge}
                </div>
              </div>
              <div className="product-info">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="product-name">{product.name}</h4>
                </div>
                <p className="product-tagline">{product.tagline}</p>
                
                <ul className="product-specs">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="product-spec-item">
                      <ChevronRight aria-hidden="true" />
                      {spec}
                    </li>
                  ))}
                </ul>
                
                <div className="product-actions">
                  <button 
                    className="btn-datasheet"
                    aria-label={`View datasheet for ${product.name}`}
                  >
                    View Datasheet
                  </button>
                  <Link 
                    to={`/products/${product.id}`}
                    className="btn-learn-more"
                    aria-label={`Learn more about ${product.name}`}
                  >
                    Learn More <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;