"use client"
import { Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Land Investment', href: '#services' },
    { name: 'Building Sales', href: '#services' },
    { name: 'Rental Services', href: '#services' },
    { name: 'Property Management', href: '#services' },
    { name: 'Consultation', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bLogo = "/b-logo.png";

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container-max section-padding !pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="font-serif font-bold text-primary text-lg">
                  <Image
                    src={bLogo}
                    alt="AL" 
                    width={50}  
                    height={50} 
                    className="w-12 h-12 md:w-[50px] md:h-[40px] mr-1 bg-white rounded-sm [filter:drop-shadow(0_0_1px_gray)_drop-shadow(0_0_1px_gray)] dark:[filter:none]" 
                  />
                </span>
              </div>
              <div>
                <p className="font-serif font-semibold text-primary-foreground text-lg leading-tight">
                  Bilonia's Pride
                </p>
                <p className="text-xs text-primary-foreground/70">Property Investment</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              Your trusted partner in property investment. We specialize in lands, 
              buildings, and rental services with over 15 years of excellence.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Subscribe to our newsletter for the latest property listings and investment opportunities.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-accent"
              />
              <button className="w-full btn-gold !py-2.5 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Bilonia's Pride Property Investment. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-accent place-self-end flex items-center justify-center hover:bg-accent/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
