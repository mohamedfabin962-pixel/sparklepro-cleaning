import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, Share2, MessageCircle, Send } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="navy" className="!pt-32 !pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Get In <span className="text-freshGreen-400">Touch</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have questions or ready to book? Our team is here to help you experience the sparkle.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Grid */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-8">Contact Information</h2>
              
              <ContactInfoCard 
                icon={<Phone className="w-6 h-6 text-freshGreen-500" />}
                title="Phone"
                content="(800) 555-0123"
                link="tel:+18005550123"
              />
              
              <ContactInfoCard 
                icon={<Mail className="w-6 h-6 text-freshGreen-500" />}
                title="Email"
                content="info@sparklepro.com"
                link="mailto:info@sparklepro.com"
              />
              
              <ContactInfoCard 
                icon={<MapPin className="w-6 h-6 text-freshGreen-500" />}
                title="Address"
                content="123 Cleaning St, Suite 100, Miami, FL 33101"
              />
              
              <ContactInfoCard 
                icon={<Clock className="w-6 h-6 text-freshGreen-500" />}
                title="Business Hours"
                content="Mon - Fri: 8am - 6pm, Sat: 9am - 4pm"
              />

              <div className="pt-8 border-t border-slate-200">
                <h3 className="font-bold text-navy-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-white p-3 rounded-xl shadow-sm text-navy-900 hover:text-freshGreen-500 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-xl shadow-sm text-navy-900 hover:text-freshGreen-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-xl shadow-sm text-navy-900 hover:text-freshGreen-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-8">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900">Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-freshGreen-500 transition-all font-medium" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy-900">Email</label>
                      <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-freshGreen-500 transition-all font-medium" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900">Subject</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-freshGreen-500 transition-all font-medium appearance-none">
                      <option>General Inquiry</option>
                      <option>Quote Request</option>
                      <option>Service Question</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900">Message</label>
                    <textarea rows="5" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-freshGreen-500 transition-all font-medium resize-none" placeholder="How can we help?"></textarea>
                  </div>
                  <Button className="w-full py-5 text-lg flex items-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="!py-0">
        <div className="h-[500px] w-full bg-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
             <div className="text-center">
                <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-400 font-medium italic">Interactive Map Placeholder</p>
                <p className="text-slate-400 text-sm">(Requires Map API Key)</p>
             </div>
          </div>
          {/* Real map would go here */}
        </div>
      </Section>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, content, link }) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
    <div className="p-3 bg-freshGreen-50 rounded-2xl">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-navy-900 mb-1">{title}</h3>
      {link ? (
        <a href={link} className="text-slate-600 hover:text-freshGreen-500 transition-colors">{content}</a>
      ) : (
        <p className="text-slate-600">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;
