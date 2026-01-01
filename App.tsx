
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServicesIntro from './components/ServicesIntro';
import Products from './components/Products/Products';
import Software from './components/Software';
import About from './components/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ViyaraImx6ullSbc from './components/Products/ViyaraImx6ullSbc';
import ViyaraImx9Sbc from './components/Products/ViyaraImx9Sbc';
import ViyaraImx8mNanoSbc from './components/Products/ViyaraImx8mNanoSbc';
import ViyaraQcs6490Sbc from './components/Products/ViyaraQcs6490Sbc';
import WhatWeDo from './components/WhatWeDo';
import Clients from './components/Clients';
import WhatsAppFAB from './components/WhatsAppFAB';
import ScrollToTopButton from './components/ScrollToTopButton';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      try {
        // Trigger scrolled state after 50px to ensure top state is clean
        setIsScrolled(window.scrollY > 50);
      } catch (error) {
        console.error("Error handling scroll event:", error);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-slate-900 bg-white selection:bg-blue-200 selection:text-blue-900">
      <Navigation isScrolled={isScrolled} />
      <main className="flex-grow">
        {children}
      </main>
      <WhatsAppFAB />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <ServicesIntro />
    <WhatWeDo />
    <Products />
    <Software />
    <About />
    <Testimonials />
    <Clients />
    <Blogs />
    <Contact />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          {/* Specific Routes for Products */}
          <Route path="/products/imx6" element={<ViyaraImx6ullSbc />} />
          <Route path="/products/imx8mnano" element={<ViyaraImx8mNanoSbc />} />
          <Route path="/products/imx9" element={<ViyaraImx9Sbc />} />
          <Route path="/products/qcs6490" element={<ViyaraQcs6490Sbc />} />
          <Route path="/services" element={<Software />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}
