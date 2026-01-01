import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Download, ShoppingCart } from 'lucide-react';
import './ProductDetail.css';

const ViyaraImx6ullSbc: React.FC = () => {
  const product = {
    name: "Viyara i.MX6ULL SBC",
    tagline: "Industrial Grade Efficiency",
    specs: ["ARM Cortex-A7 @ 900MHz", "Low Power Consumption", "Industrial Temp Range", "Connectivity: CAN, UART, Ethernet"],
    image: "https://yoctotutor.com/images/Trainings-siva/viyara-6ull_GREEN.webp",
    badge: "Best Seller"
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
                Unlock the full potential of your embedded applications with the {product.name}. 
                Designed for high-performance industrial and edge computing tasks, this Single Board Computer (SBC) allows you to
                bypass complex hardware design and focus on your application logic.
              </p>
              <p>
                Built around the NXP i.MX6ULL processor, it offers an excellent balance of power efficiency and processing capability, making it ideal for IoT gateways, HMI panels, and industrial controllers.
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

export default ViyaraImx6ullSbc;