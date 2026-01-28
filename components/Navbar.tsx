"use client"
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import configDetail from '@/config';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState('');
  const bLogo = "/b-logo.png";

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Select random phone number on client side only
  useEffect(() => {
    const phoneNumbers = [
      configDetail.phoneNumber,
      configDetail.phoneNumber_2,
      configDetail.phoneNumber_3
    ].filter(Boolean);
    
    const randomPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    setSelectedPhone(randomPhone);
  }, []);

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (selectedPhone) {
      window.location.href = `tel:${selectedPhone}`;
    }
  };

  const handleWhatsAppClick = () => {
    openWhatsApp();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container-max section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-serif font-bold text-primary text-lg">
                <Image
                  src={bLogo}
                  alt="AL" 
                  width={50}  
                  height={50} 
                  className="w-12 h-10 md:w-[50px] md:h-[40px] bg-white rounded-sm [filter:drop-shadow(0_0_1px_gray)_drop-shadow(0_0_1px_gray)] dark:[filter:none]" 
                />
              </span>
            </div>
            <div className="block">
              <p className="font-serif font-semibold text-primary-foreground text-lg leading-tight">
                Bilonia's Pride
              </p>
              <p className="text-xs text-primary-foreground/70">Property Investment</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => 
              (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))
            }
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="#" 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call Us</span>
            </a>
            <Button 
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <a 
                  href="#" 
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors w-fit"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Call Us</span>
                </a>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="flex bg-neutral-700 border border-transparent hover:border-gray-200 mt-4 items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors w-fit"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;