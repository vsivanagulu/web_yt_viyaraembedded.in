import React from 'react';
import { Cpu, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        <div className="brand-col">
          <div className="footer-brand">
            <img src="/images/viyara-logo.png" alt="VIYARA EMBEDDED" className="h-10 w-auto" style={{ height: '2.5rem' }} />
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

        <div>
          <h4 className="footer-heading">Contact Information</h4>
          <ul className="footer-links">
            <li><span className="text-slate-400">3rdfloor, Rohini layout, hightech City, Behind Mehfil rst</span></li>
            <li><span className="text-slate-400">Hyderabad, India-500081</span></li>
            <li><a href="mailto:contact@viyaraembedded.in">contact@viyaraembedded.in</a></li>
            <li><a href="tel:+919966635312">+91 99666 35312</a></li>
          </ul>
        </div>


      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} VIYARAEMBEDDED. All rights reserved.</p>
      <p>Designed for Embedded Innovation</p>
    </div>

  </footer >
);

export default Footer;