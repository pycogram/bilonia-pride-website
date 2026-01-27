import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    'Over 15 years of industry experience',
    'Transparent and honest dealings',
    'Expert market analysis and guidance',
    'End-to-end property management',
    'Legal documentation support',
    'After-sales service excellence',
  ];

  const highlights = [
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
    },
    {
      icon: Users,
      value: '5,000+',
      label: 'Satisfied Clients',
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Success Rate',
    },
  ];

  return (
    <section id="about" className="section-padding bg-primary">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6 leading-tight">
              Building Trust Through{' '}
              <span className="text-gold-gradient">Excellence</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              At Bilonia's Pride Property Investment, we believe that every client deserves 
              personalized attention and expert guidance. Our dedicated team works tirelessly 
              to find the perfect property that matches your vision and investment goals.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="btn-gold">Learn More About Us</Button>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-navy-light rounded-2xl p-8 lg:p-10 border border-primary-foreground/10">
              <h3 className="font-serif text-2xl text-primary-foreground mb-8 text-center">
                Our Track Record
              </h3>
              
              <div className="space-y-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary-foreground">{item.value}</p>
                      <p className="text-primary-foreground/60 text-sm">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                <blockquote className="text-primary-foreground/80 italic text-center">
                  "Your trusted partner in property investment since 2010"
                </blockquote>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
