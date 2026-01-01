import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const techBadges = [
    { text: "Embedded Linux BSP Porting", positionClass: "badge-1", sizeStyle: { width: '8rem', height: '8rem' }, delay: "0s" },
    { text: "Yocto Project", positionClass: "badge-2", sizeStyle: { width: '6rem', height: '6rem' }, delay: "2s" },
    { text: "Device Drivers", positionClass: "badge-3", sizeStyle: { width: '7rem', height: '7rem' }, delay: "4s" },
    { text: "Android BSP", positionClass: "badge-4", sizeStyle: { width: '7rem', height: '7rem' }, delay: "1s" },
    { text: "Zephyr RTOS", positionClass: "badge-5", sizeStyle: { width: '6rem', height: '6rem' }, delay: "3s" },
    { text: "QNX RTOS", positionClass: "badge-6", sizeStyle: { width: '5rem', height: '5rem' }, delay: "5s" },
  ];

  return (
    <section className="hero-section" aria-label="Hero Section">
      {/* Background Pattern */}
      <div className="hero-bg-pattern" aria-hidden="true">
        <div className="hero-bg-dots"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            Innovating Since 2020
          </div>
          <h1 className="hero-title">
            Building the Core of <br />
            <span className="hero-title-highlight">
              Intelligent Devices
            </span>
          </h1>
          <p className="hero-subtitle">
            We provide cutting-edge Embedded Linux, Android BSP, and Custom Hardware solutions to bring your product vision to life.
          </p>
          <div className="hero-actions">
            <div className="hero-buttons">
              <button 
                onClick={() => navigate('/products')}
                className="btn-primary"
                aria-label="View our products"
              >
                View Products
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="btn-secondary"
                aria-label="Explore our services"
              >
                Explore Services
              </button>
            </div>
            
            <button
               onClick={() => navigate('/contact')}
               className="quote-link"
               aria-label="Request a custom quote"
            >
              <Mail className="w-4 h-4" />
              Request a Quote
            </button>
          </div>
        </div>
        
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-container">
            
            {/* Floating Circular Badges */}
            {techBadges.map((badge, idx) => (
              <div 
                key={idx}
                className={`floating-badge animate-float-badge ${badge.positionClass}`}
                style={{ ...badge.sizeStyle, animationDelay: badge.delay }}
              >
                <span className="floating-badge-text">{badge.text}</span>
              </div>
            ))}

            {/* Abstract PCB Illustration Representation */}
            <div className="visual-glow"></div>
            <div className="code-card">
              <div className="code-header">
                <span className="filename">sys_init.c</span>
                <div className="window-controls">
                  <div className="control-dot dot-red"></div>
                  <div className="control-dot dot-yellow"></div>
                  <div className="control-dot dot-green"></div>
                </div>
              </div>
              <div className="code-content">
                <div className="flex"><span className="line-num">01</span><span>import <span className="kw-import">viyara_kernel</span></span></div>
                <div className="flex"><span className="line-num">02</span><span></span></div>
                <div className="flex"><span className="line-num">03</span><span>func <span className="kw-func">init_hardware</span>() {'{'}</span></div>
                <div className="flex"><span className="line-num">04</span><span className="pl-4">imx_config = <span className="kw-new">new</span> Config()</span></div>
                <div className="flex"><span className="line-num">05</span><span className="pl-4">yocto_layer.build()</span></div>
                <div className="flex"><span className="line-num">06</span><span className="pl-4">return <span className="kw-const">READY</span></span></div>
                <div className="flex"><span className="line-num">07</span><span>{'}'}</span></div>
              </div>
              <div className="code-footer">
                <div className="status-indicator">
                  <div className="status-avatar av-os">OS</div>
                  <div className="status-avatar av-hw">HW</div>
                </div>
                <span className="status-text">System Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;