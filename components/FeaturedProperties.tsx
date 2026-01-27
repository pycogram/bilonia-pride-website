"use client"
import { MapPin, Bed, Bath, Maximize, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { openWhatsApp } from '@/lib/whatsapp';
import Image from 'next/image';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa Estate',
      location: 'Asaba Secretariat',
      price: 'N850,000',
      type: 'For Sale',
      beds: 5,
      baths: 4,
      sqft: '4,500',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'Modern City Apartment',
      location: 'LGA',
      price: 'N550,000/mo',
      type: 'For Rent',
      beds: 3,
      baths: 2,
      sqft: '1,800',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      featured: false,
    },
    {
      id: 3,
      title: 'Commercial Land Plot',
      location: 'Dublina',
      price: 'N4,500,000',
      type: 'Land',
      beds: null,
      baths: null,
      sqft: '10,000',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      featured: false,
    },
    {
      id: 4,
      title: 'Penthouse Suite',
      location: 'Asaba Express',
      price: 'N1,200,000',
      type: 'For Sale',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: 5,
      title: 'Family Home',
      location: 'Akpana',
      price: 'N550,000',
      type: 'For Sale',
      beds: 4,
      baths: 3,
      sqft: '2,800',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      featured: false,
    },
    {
      id: 6,
      title: 'Studio Apartment',
      location: 'Dublina',
      price: 'N1,000,200/mo',
      type: 'For Rent',
      beds: 1,
      baths: 1,
      sqft: '650',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      featured: false,
    },
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'For Sale':
        return 'default';
      case 'For Rent':
        return 'secondary';
      case 'Land':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <section id="properties" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Featured Listings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              Premium Properties
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our handpicked selection of exceptional properties available for purchase and rent.
            </p>
          </div>
          <Button className="btn-gold w-fit flex items-center gap-2">
            Make Inquiries
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-card rounded-xl overflow-hidden shadow-elegant card-hover border border-border"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={`${getBadgeVariant(property.type) === 'default' ? 'bg-accent text-accent-foreground' : ''}`}>
                    {property.type}
                  </Badge>
                  {property.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-primary text-primary-foreground font-bold px-3 py-1.5 rounded-lg text-lg">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Features */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {property.beds && (
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Maximize className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <Button
                  onClick={() => openWhatsApp(property.title)}
                  className="w-full mt-4 bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire on WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
