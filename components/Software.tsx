
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Cpu, Code, Smartphone, Zap, Server, ClipboardList, PenTool, CheckCircle, Factory, RefreshCw } from 'lucide-react';
import { SERVICES } from '../constants';
import './Software.css';

const Software: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const lifecycleSteps = [
    {
      icon: <ClipboardList />,
      title: "Requirement Analysis",
      description: "We start by deeply understanding your product vision, defining technical specifications, and selecting the optimal hardware-software combination."
    },
    {
      icon: <PenTool />,
      title: "Design & Architecture",
      description: "Our engineers create detailed schematics, PCB layouts, and robust software architectures ensuring scalability and performance."
    },
    {
      icon: <Cpu />,
      title: "Prototyping & Bring-up",
      description: "Rapid development of initial prototypes followed by board bring-up, bootloader customization, and initial OS integration."
    },
    {
      icon: <CheckCircle />,
      title: "Validation & Testing",
      description: "Rigorous testing including thermal analysis, power optimization, and regulatory compliance (FCC/CE) preparation."
    },
    {
      icon: <Factory />,
      title: "Mass Production",
      description: "Seamless transfer to manufacturing, including development of automated test jigs and quality assurance processes."
    },
    {
      icon: <RefreshCw />,
      title: "Maintenance & Support",
      description: "Long-term support with OTA update mechanisms, security patches, and feature enhancements for deployed devices."
    }
  ];

  return (
    <div className={`software-page ${isHomePage ? 'software-home-mode' : ''}`}>
      {/* Header Section */}
      {isHomePage ? (
        <div className="software-home-header">
           <span className="software-hero-badge">Our Expertise</span>
           <h2 className="software-hero-title">Embedded Software Services</h2>
           <p className="software-hero-subtitle">
             From bootloader to user space, we handle the complex layers of embedded software development so you can focus on your application.
           </p>
        </div>
      ) : (
        /* Hero Section for Standalone Page */
        <div className="software-hero">
          <div className="software-hero-bg-pattern" aria-hidden="true">
            <div className="software-hero-bg-dots"></div>
          </div>
          <div className="software-hero-content">
            <div className="software-hero-badge">
              Our Expertise
            </div>
            <h1 className="software-hero-title">
              Embedded Software Services
            </h1>
            <p className="software-hero-subtitle">
              From bootloader to user space, we handle the complex layers of embedded software development so you can focus on your application.
            </p>
          </div>
        </div>
      )}

      <section className="software-content">
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Product Development Life Cycle Section */}
        <div className="lifecycle-section">
          <div className="lifecycle-header">
            <h2 className="lifecycle-subtitle">Process</h2>
            <h3 className="lifecycle-heading">Product Development Life Cycle</h3>
            <p className="lifecycle-intro">
              Our comprehensive approach ensures your product moves smoothly from concept to market.
            </p>
          </div>

          <div className="lifecycle-timeline-container">
            <div className="lifecycle-steps-grid">
              {lifecycleSteps.map((step, idx) => (
                <div key={idx} className="lifecycle-step-card">
                  <div className="step-icon-circle">
                    {step.icon}
                  </div>
                  <h4 className="step-title">
                    <span className="step-number-prefix">0{idx + 1}.</span> {step.title}
                  </h4>
                  <p className="step-description">
                    {step.description}
                  </p>
                  
                  {/* Desktop Connecting Line (Horizontal) - Connects to next step */}
                  {idx !== lifecycleSteps.length - 1 && (
                    <div className="timeline-connector-horizontal"></div>
                  )}

                  {/* Mobile Connecting Line (Vertical) - Connects to next step */}
                  {idx !== lifecycleSteps.length - 1 && (
                    <div className="timeline-connector-mobile"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tech Stack Banner */}
        <div className="tech-stack-container">
          <p className="tech-stack-label">Powering Solutions With</p>
          <div className="tech-stack-icons">
            <span className="tech-stack-item"><Cpu /> NXP i.MX</span>
            <span className="tech-stack-item"><Code /> Yocto Project</span>
            <span className="tech-stack-item"><Smartphone /> Android AOSP</span>
            <span className="tech-stack-item"><Zap /> Zephyr OS</span>
            <span className="tech-stack-item"><Server /> Linux Kernel</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;
