import React from 'react';
import './ServicesIntro.css';

const ServicesIntro: React.FC = () => (
  <section className="services-intro">
    <div className="si-container">
      <div className="si-grid">
         <div className="si-item">
            <span className="si-value">BSP</span>
            <span className="si-label">Porting</span>
         </div>
         <div className="si-divider"></div>
         <div className="si-item">
            <span className="si-value">RTOS</span>
            <span className="si-label">Development</span>
         </div>
         <div className="si-divider"></div>
         <div className="si-item">
            <span className="si-value">HW</span>
            <span className="si-label">Design</span>
         </div>
      </div>
    </div>
  </section>
);

export default ServicesIntro;