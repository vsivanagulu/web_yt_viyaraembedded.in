
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import './Contact.css';

const Contact: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: 'Custom Board Support Package',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          interest: 'Custom Board Support Package',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to connect to the server. Please check your internet connection.');
    }
  };

  return (
    <div className={`contact-page ${isHomePage ? 'contact-home-mode' : ''}`}>
      {!isHomePage && (
        <SEO
          title="Contact Us - Viyara Embedded Solutions"
          description="Ready to optimize your hardware with custom software solutions? Reach out to us for a consultation or quote."
          url="https://viyaraembedded.in/contact"
        />
      )}
      {/* Header Section */}
      {isHomePage ? (
        <div className="contact-home-header">
          <span className="contact-hero-badge">Get In Touch</span>
          <h2 className="contact-hero-title">Start Your Next Project</h2>
          <p className="contact-hero-subtitle">
            Ready to optimize your hardware with custom software solutions? Reach out to us for a consultation or quote.
          </p>
        </div>
      ) : (
        <div className="contact-hero">
          <div className="contact-hero-bg-pattern" aria-hidden="true">
            <div className="contact-hero-bg-dots"></div>
          </div>
          <div className="contact-hero-content">
            <div className="contact-hero-badge">
              Get In Touch
            </div>
            <h1 className="contact-hero-title">
              Start Your Next Project
            </h1>
            <p className="contact-hero-subtitle">
              Ready to optimize your hardware with custom software solutions? Reach out to us for a consultation or quote.
            </p>
          </div>
        </div>
      )}

      <section className="contact-content-section">
        <div className="contact-grid">
          <div>
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Mail />
                </div>
                <div className="contact-detail-text">
                  <p className="contact-label">Email us at</p>
                  <p className="contact-value">contact@viyaraembedded.in</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Phone />
                </div>
                <div className="contact-detail-text">
                  <p className="contact-label">Call us</p>
                  <p className="contact-value">+91 99666 35312</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MapPin />
                </div>
                <div className="contact-detail-text">
                  <p className="contact-label">Visit us</p>
                  <p className="contact-value">3rdfloor, Rohini layout, hightech City</p>
                  <p className="contact-value">Behind Mehfil rst, Hyderabad, India-500081</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div>
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option>Custom Board Support Package</option>
                  <option>i.MX6ULL Hardware</option>
                  <option>i.MX9 Hardware</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                  <span className="font-medium">Success!</span> Your message has been sent successfully. We will get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                  <span className="font-medium">Error!</span> {errorMessage}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
