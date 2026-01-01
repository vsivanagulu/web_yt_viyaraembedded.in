import React from 'react';
import { Cpu, Linkedin, Twitter, Facebook } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        <div className="brand-col">
          <div className="footer-brand">
            <Cpu aria-hidden="true" />
            <span>VIYARAEMBEDDED</span>
          </div>
          <p className="footer-desc">
            Empowering the next generation of smart devices with robust embedded Linux solutions and custom hardware.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Visit us on LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="Follow us on Twitter"><Twitter /></a>
            <a href="#" aria-label="Like us on Facebook"><Facebook /></a>
          </div>
        </div>
        
        <div>
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Linux BSP Porting</a></li>
            <li><a href="#">Yocto Project</a></li>
            <li><a href="#">Android Porting</a></li>
            <li><a href="#">Zephyr Development</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VIYARAEMBEDDED. All rights reserved.</p>
        <p>Designed for Embedded Innovation</p>
      </div>
    </div>
  </footer>
);

export default Footer;