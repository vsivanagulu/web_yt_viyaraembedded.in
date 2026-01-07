import React from 'react';
import { Cpu, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        <div className="brand-col">
          <div className="footer-brand">
            <img src="/images/viyara-logo.png" alt="VIYARA EMBEDDED" className="h-20 w-auto" style={{ height: '5rem' }} />
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

        <div className="subscribe-col">
          <h4 className="footer-heading">Subscribe to our Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4">Get the latest insights on embedded systems.</p>
          <form className="flex flex-col gap-2" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const emailInput = form.elements.namedItem('email') as HTMLInputElement;
            const email = emailInput.value;
            const btn = form.querySelector('button');
            const statusMsg = document.getElementById('sub-status');

            if (btn) btn.disabled = true;
            if (statusMsg) statusMsg.textContent = 'Subscribing...';

            try {
              const res = await fetch('/api/subscribe.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
              });
              const data = await res.json();

              if (statusMsg) {
                statusMsg.textContent = data.message;
                statusMsg.className = data.status === 'success' ? 'text-green-400 text-sm' : 'text-red-400 text-sm';
              }
              if (data.status === 'success') form.reset();

            } catch (err) {
              if (statusMsg) {
                statusMsg.textContent = 'Connection error.';
                statusMsg.className = 'text-red-400 text-sm';
              }
            } finally {
              if (btn) btn.disabled = false;
            }
          }}>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-blue-500 hover:via-indigo-400 hover:to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p id="sub-status" className="text-sm h-5"></p>
          </form>
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