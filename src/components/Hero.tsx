import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Use product images for the slider
  const sliderImages = [
    { src: "/images/viyara-imx6ull-g.webp", label: "i.MX6ULL SBC" },
    { src: "/images/viyara-imx9-g.webp", label: "i.MX9 AI Kit" },
    { src: "/images/ve-imx8mv2.webp", label: "i.MX8M Nano" }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

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

            {/* Hardware Image Slider */}
            <div className="visual-glow"></div>
            <div className="hero-slider-card group">

              {/* Slider Content */}
              <div className="slider-content">
                {sliderImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`slide-item ${idx === currentImageIndex ? 'active' : 'inactive'}`}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="slide-image"
                    />
                    <div className="slide-label">
                      {img.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Indicators */}
              <div className="slider-indicators">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`indicator-dot ${idx === currentImageIndex ? 'active' : 'inactive'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Tech Badges Grid below Slider */}
            <div className="badges-grid">
              {techBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="floating-badge animate-float-badge"
                  style={{ animationDelay: badge.delay }}
                >
                  <span className="floating-badge-text">{badge.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;