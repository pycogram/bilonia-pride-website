import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const Testimonials = () => {
const testimonials = [
  {
    id: 1,
    name: 'Chukwuemeka Okonkwo',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Bilonia\'s Pride helped me find the perfect investment property. Their expertise in land acquisition and market analysis was invaluable. Highly recommend their services!',
  },
  {
    id: 2,
    name: 'Blessing Adeyemi',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'From start to finish, the team at Bilonia\'s Pride made buying our dream home seamless. Their professionalism and attention to detail exceeded all expectations.',
  },
  {
    id: 3,
    name: 'Oluwaseun Babatunde',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'I\'ve worked with many real estate companies, but none compare to Bilonia\'s Pride. They found the ideal commercial space for my business within my budget.',
  },
  {
    id: 4,
    name: 'Ngozi Okeke',
    role: 'Rental Client',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Their rental services are exceptional. Quick response times, fair pricing, and they truly care about matching you with the right property. Five stars!',
  },
  {
    id: 5,
    name: 'Ibrahim Yusuf',
    role: 'Land Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Bilonia\'s Pride has been instrumental in growing my real estate portfolio. Their market insights and negotiation skills have saved me thousands. Trusted partners!',
  },
];

  return (
    <section className="section-padding bg-primary">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Don't just take our word for it. Hear from our satisfied clients who have achieved 
            their property goals with Bilonia's Pride.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="bg-card rounded-2xl p-8 h-full shadow-elegant border border-border">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-accent" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={150}
                      height={150}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-accent text-accent-foreground hover:bg-accent/90 border-none" />
            <CarouselNext className="static translate-y-0 bg-accent text-accent-foreground hover:bg-accent/90 border-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
