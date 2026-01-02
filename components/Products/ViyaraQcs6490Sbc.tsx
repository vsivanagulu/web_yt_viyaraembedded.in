
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Download, ShoppingCart, Shield, Zap, Cpu } from 'lucide-react';
import { PRODUCTS } from '../../constants';
import './ProductDetail.css';

const ViyaraQcs6490Sbc: React.FC = () => {
  const product = PRODUCTS.find(p => p.id === 'qcs6490')!;

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
                The {product.name} is our most powerful Single Board Computer yet, built for the next generation of industrial IoT, premium robotics, and high-end edge computing.
              </p>
              <p>
                Powered by the Qualcomm® QCS6490 processor, it delivers exceptional compute performance, advanced on-device AI up to 12 TOPS, and comprehensive connectivity including 5G and Wi-Fi 6E. This platform is engineered for longevity and reliability in demanding environments.
              </p>
            </div>

            <div className="pd-specs-box">
              <h3 className="pd-specs-title">
                <CheckCircle /> Key Technical Highlights
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
                <ShoppingCart /> Order Evaluation Kit
              </button>
              <button className="btn-download">
                <Download /> Download Full Specs
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-slate-400 text-sm border border-slate-700/50 p-3 rounded-lg">
                <Cpu className="w-5 h-5 text-blue-500" />
                <span>Kryo™ 670 CPU</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm border border-slate-700/50 p-3 rounded-lg">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>Adreno™ 643 GPU</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm border border-slate-700/50 p-3 rounded-lg">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>Secure Processing Unit</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm border border-slate-700/50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span>Yocto / Android 13+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViyaraQcs6490Sbc;
