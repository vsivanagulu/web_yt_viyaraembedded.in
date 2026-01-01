import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import './Testimonials.css';

const Testimonials: React.FC = () => (
  <section className="testimonials-section">
    <div className="tm-container">
      <div className="tm-header">
        <span className="tm-badge">Success Stories</span>
        <h3 className="tm-title">Trusted by Industry Leaders</h3>
        <p className="tm-intro">
          See how we've helped companies across the globe solve their most complex embedded challenges.
        </p>
      </div>

      <div className="tm-grid">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="tm-card">
            <Quote className="tm-quote-icon" />
            
            <p className="tm-text">
              "{testimonial.content}"
            </p>
            
            <div className="tm-author">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="tm-avatar"
              />
              <div>
                <h4 className="tm-name">{testimonial.name}</h4>
                <div className="tm-role">{testimonial.role}</div>
                <div className="tm-company">{testimonial.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;