import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Download, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../../constants';
import './ProductDetail.css';

const ViyaraImx8mNanoSbc: React.FC = () => {
  const product = PRODUCTS.find(p => p.id === 'imx8mnano')!;

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
                The {product.name} brings affordable high performance to your embedded projects.
                Powered by NXP's i.MX 8M Nano applications processor, it combines multi-core processing with 3D graphics and advanced audio capabilities.
              </p>
              <p>
                Ideal for smart home devices, voice-assisted products, and industrial HMI, this SBC features a heterogeneous architecture with ARM Cortex-A53 cores for general computing and a Cortex-M7 for real-time processing tasks.
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
                <ShoppingCart /> Order Kit
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

export default ViyaraImx8mNanoSbc;