import React from 'react';
import { CLIENTS } from '../constants';
import './Clients.css';

const Clients: React.FC = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <p className="clients-label">
          Trusted By Industry Innovators
        </p>

        <div className="clients-scroll-area">
          {/* Mask for fading edges */}
          <div className="mask-left"></div>
          <div className="mask-right"></div>

          <div className="clients-track animate-scroll">
            {/* Original List */}
            {CLIENTS.map((client) => (
              <div key={`orig-${client.id}`} className="client-card">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="client-logo"
                />
                <p className="client-name">{client.name}</p>
              </div>
            ))}
            {/* Duplicate List for seamless loop */}
            {CLIENTS.map((client) => (
              <div key={`dup-${client.id}`} className="client-card">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="client-logo"
                />
                <p className="client-name">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;