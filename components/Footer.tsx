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

          <div className="mt-8">
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
                const res = await fetch('/subscribe.php', {
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
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-blue-500"
                required
              />
              <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors">
                Subscribe
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
    </div>
  </footer>
);

export default Footer;