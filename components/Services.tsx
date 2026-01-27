import { MapPin, Building2, Key, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from "next/image"; 
import landProperty from '@/public/assets/land-property.jpg';
import buildingProperty from '@/public/assets/building-property.jpg';
import rentalProperty from '@/public/assets/rental-property.jpg';

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Land Investment',
      description: 'Prime land opportunities in strategic locations. We identify and secure the best plots for residential, commercial, and agricultural development.',
      image: landProperty,
      features: ['Strategic Locations', 'Clear Titles', 'Investment Analysis'],
    },
    {
      icon: Building2,
      title: 'Building Sales',
      description: 'From residential homes to commercial complexes, we offer a curated portfolio of quality buildings that meet your investment criteria.',
      image: buildingProperty,
      features: ['Residential Properties', 'Commercial Buildings', 'New Developments'],
    },
    {
      icon: Key,
      title: 'Rental Services',
      description: 'Comprehensive rental solutions including property management, tenant screening, and maintenance services for landlords and tenants alike.',
      image: rentalProperty,
      features: ['Property Management', 'Tenant Screening', 'Maintenance'],
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Property Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From land acquisition to property rentals, we provide end-to-end real estate services 
            tailored to your investment goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-elegant card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="text-accent hover:text-accent/80 hover:bg-transparent p-0 h-auto font-medium group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
