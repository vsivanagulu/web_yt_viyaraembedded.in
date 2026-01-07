import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Download, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../../constants';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="pd-not-found">
        <div>
          <h2 className="pd-not-found-title">Product Not Found</h2>
          <Link to="/products" className="pd-not-found-link">
            <ArrowLeft /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pd-section">
      <div className="pd-container">
        <Link to="/products" className="pd-back-link">
          <ArrowLeft /> Back to Products
        </Link>
        
        <div className="pd-grid">
          {/* Image Section */}
          <div className="pd-image-box">
            <img 
              src={product.image} 
              alt={product.name} 
              className="pd-img"
            />
          </div>

          {/* Details Section */}
          <div>
            <div className="pd-badge-small">
              {product.badge}
            </div>
            <h1 className="pd-title">{product.name}</h1>
            <p className="pd-tagline">{product.tagline}</p>
            
            <div className="pd-description">
              <p>
                Unlock the full potential of your embedded applications with the {product.name}. 
                Designed for high-performance industrial and edge computing tasks, this platform allows you to
                bypass complex hardware design and focus on your application logic.
              </p>
            </div>

            <div className="pd-specs-box">
              <h3 className="pd-specs-title">
                <CheckCircle /> Technical Specifications
              </h3>
              <ul className="pd-specs-list">
                {product.specs.map((spec, idx) => (
                  <li key={idx} className="pd-spec-item">
                    <span className="pd-spec-dot"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pd-actions">
              <button className="btn-order">
                <ShoppingCart /> Order Development Kit
              </button>
              <button className="btn-download">
                <Download /> Download Datasheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;