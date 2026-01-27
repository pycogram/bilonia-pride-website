import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import configDetail from '@/config';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'No. 21, Alanza Street,', 
        'Opposite Junior Staff Quarters,',
        'Off Okpanam Road,',
        'Asaba, Delta State, Nigeria.'
      ],
    },                
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        `${configDetail.phoneNumber}`, 
        `${configDetail.phoneNumber_2}`, 
        `${configDetail.phoneNumber_3}`
      ],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [`${configDetail.socialLinks.email}`, 'sales@biloniaspride.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 7:00 PM'],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Let's Discuss Your Property Needs
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to make your next property move? Our team of experts is here to guide you 
            through every step of your real estate journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h3 className="font-serif text-2xl text-foreground mb-6">Send Us a Message</h3>
              
              <form action={`https://formsubmit.co/${configDetail.socialLinks.email}`} method="POST" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input 
                      type="text"
                      name="name"
                      placeholder="Your name" 
                      className="bg-muted border-border focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      name="email" 
                      placeholder="your@email.com" 
                      className="bg-muted border-border focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      name="tel"
                      placeholder="+123 456 7890" 
                      className="bg-muted border-border focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Interest
                    </label>
                    <select name="interest" className="w-full h-10 px-3 rounded-md bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-transparent" required>
                      <option>Select an option</option>
                      <option>Land Purchase</option>
                      <option>Building Purchase</option>
                      <option>Rental Property</option>
                      <option>Property Management</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your property needs..." 
                    rows={5}
                    className="bg-muted border-border focus:border-transparent resize-none"
                    required
                  />
                </div>

                <Button className="btn-gold w-full flex items-center justify-center gap-2">
                  Send Message
                  <Send type="submit" className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
