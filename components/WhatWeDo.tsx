import React from 'react';
import { Cpu, Code, Wifi, CheckCircle2, Factory, ExternalLink } from 'lucide-react';
import './WhatWeDo.css';

const WhatWeDo: React.FC = () => {
  const capabilities = [
    {
      icon: <Cpu />,
      title: "Hardware Engineering",
      description: "From concept to production, we design carrier boards and custom hardware tailored to your mechanical and electrical constraints.",
      features: ["Schematic Capture", "High-Speed PCB Design", "Signal Integrity Analysis"],
      variant: "blue"
    },
    {
      icon: <Code />,
      title: "Embedded Software",
      description: "We build the invisible foundation of your device. Robust bootloaders, customized kernels, and optimized drivers.",
      features: ["Linux Kernel & U-Boot", "RTOS Integration", "HAL & Middleware"],
      variant: "emerald"
    },
    {
      icon: <Wifi />,
      title: "Connectivity & IoT",
      description: "Seamlessly connect your devices to the cloud. We handle the full stack from local protocols to cloud dashboards.",
      features: ["MQTT / CoAP / HTTPs", "OTA Update Mechanisms", "Edge Computing Logic"],
      variant: "purple"
    },
    {
      icon: <Factory />,
      title: "EMS Service",
      description: "Comprehensive electronics manufacturing solutions partnering with Srilin Electronics Private Limited.",
      features: ["PCB Assembly", "Box Build Assembly", "Testing & Certification"],
      link: "https://www.srilinelectronics.com/",
      variant: "amber"
    }
  ];

  return (
    <section className="wwd-section">
      <div className="wwd-container">
        <div className="wwd-header">
          <span className="wwd-badge">Capabilities</span>
          <h3 className="wwd-title">What We Do</h3>
          <p className="wwd-intro">
            We provide end-to-end engineering services to turn complex requirements into reliable products.
          </p>
        </div>

        <div className="wwd-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className={`wwd-card wwd-card-${cap.variant}`}>
              <div className="wwd-icon-box">
                {cap.icon}
              </div>
              <h4 className="wwd-card-title">{cap.title}</h4>
              <p className="wwd-card-desc">
                {cap.description}
              </p>
              <ul className="wwd-features">
                {cap.features.map((feature, fIdx) => (
                  <li key={fIdx} className="wwd-feature-item">
                    <CheckCircle2 />
                    {feature}
                  </li>
                ))}
              </ul>
              {cap.link && (
                <div className="wwd-link-container">
                  <a 
                    href={cap.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="wwd-link"
                  >
                    Visit Partner Site <ExternalLink />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;