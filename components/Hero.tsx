"use client"
import { ArrowRight, Building2, MapPin, Home, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import Image from "next/image"; 
import heroBg from '@/public/assets/hero-bg.jpg';
import Link from 'next/link';

const Hero = () => {
  const stats = [
    { icon: Building2, value: '500+', label: 'Properties Sold' },
    { icon: MapPin, value: '50+', label: 'Prime Locations' },
    { icon: Home, value: '1000+', label: 'Happy Clients' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg} 
          alt="Luxury property"
          fill
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-navy-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-sm font-medium">Trusted Since 2010</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Your Dream Property Awaits with{' '}
            <span className="text-gold-gradient">Bilonia's Pride</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Premier property investment solutions in lands, buildings, and rentals. 
            Building wealth through real estate excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12" style={{ animationDelay: '0.3s' }}>
            <Link href="/#properties">
              <Button className="btn-gold flex items-center hover:border-gray-500 border border-transparent gap-2 text-base">
                Explore Properties
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button 
              onClick={() => openWhatsApp()}
              variant="outline" 
              className="border-primary-foreground/30 text-charcoal hover:text-white font-bold hover:bg-primary-foreground/10 w-[80%] sm:w-auto px-6 py-3 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
