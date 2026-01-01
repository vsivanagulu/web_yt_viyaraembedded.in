import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Download, ShoppingCart } from 'lucide-react';
import './ProductDetail.css';

const ViyaraImx9Sbc: React.FC = () => {
  const product = {
    name: "Viyara i.MX9 AI Kit",
    tagline: "Next-Gen Edge Computing",
    specs: ["ARM Cortex-A55 + M33", "Dedicated NPU for ML", "High-Speed Interfaces", "Advanced Security Features"],
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "New Arrival"
  };

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
                Experience the future of Edge AI with the {product.name}. 
                Designed for high-performance machine learning applications, this kit leverages the power of the NXP i.MX9 series processor.
              </p>
              <p>
                 With its dedicated Neural Processing Unit (NPU) and heterogeneous architecture featuring both Cortex-A55 and Cortex-M33 cores, it delivers efficient real-time processing and advanced security for next-generation smart devices.
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
                <ShoppingCart /> Pre-Order Kit
              </button>
              <button className="btn-download">
                <Download /> Download Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViyaraImx9Sbc;