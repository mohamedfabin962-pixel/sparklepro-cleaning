import { Phone, Mail, MapPin, Clock, Globe, Share2, MessageCircle, Send } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <Section background="navy" className="!pt-24 sm:!pt-32 !pb-14 sm:!pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-8">Get In <span className="text-freshGreen-400">Touch</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
              Have questions or ready to book? Our team is here to help you experience the sparkle.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Grid */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8">Contact Information</h2>

              <ContactInfoCard
                icon={<Phone className="w-5 h-5 sm:w-6 sm:h-6 text-freshGreen-500" />}
                title="Phone"
                content="(800) 555-0123"
                link="tel:+18005550123"
              />

              <ContactInfoCard
                icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6 text-freshGreen-500" />}
                title="Email"
                content="info@sparklepro.com"
                link="mailto:info@sparklepro.com"
              />

              <ContactInfoCard
                icon={<MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-freshGreen-500" />}
                title="Address"
                content="123 Cleaning St, Suite 100, Miami, FL 33101"
              />

              <ContactInfoCard
                icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6 text-freshGreen-500" />}
                title="Business Hours"
                content="Mon - Fri: 8am - 6pm, Sat: 9am - 4pm"
              />

              <div className="pt-6 sm:pt-8 border-t border-slate-200">
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
              <Card className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8">Send Us a Message</h2>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-bold text-navy-900">Name</label>
                      <input type="text" className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-freshGreen-500 transition-all font-medium text-sm sm:text-base" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-bold text-navy-900">Email</label>
                      <input type="email" className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-freshGreen-500 transition-all font-medium text-sm sm:text-base" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-navy-900">Subject</label>
                    <select className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-freshGreen-500 transition-all font-medium appearance-none text-sm sm:text-base">
                      <option>General Inquiry</option>
                      <option>Quote Request</option>
                      <option>Service Question</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-navy-900">Message</label>
                    <textarea rows="5" className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-freshGreen-500 transition-all font-medium resize-none text-sm sm:text-base" placeholder="How can we help?"></textarea>
                  </div>
                  <Button className="w-full py-3.5 sm:py-5 text-base sm:text-lg flex items-center justify-center gap-2">
                    Send Message <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="!py-0">
        <div className="h-64 sm:h-80 md:h-[450px] w-full bg-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 p-4">
             <div className="text-center">
                <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-slate-300 mx-auto mb-2 sm:mb-4" />
                <p className="text-slate-400 font-medium italic text-sm sm:text-base">Interactive Map Placeholder</p>
                <p className="text-slate-400 text-xs sm:text-sm">(Requires Map API Key)</p>
             </div>
          </div>
          {/* Real map would go here */}
        </div>
      </Section>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, content, link }) => (
  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm">
    <div className="p-2.5 sm:p-3 bg-freshGreen-50 rounded-xl sm:rounded-2xl">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-navy-900 text-sm sm:text-base mb-1">{title}</h3>
      {link ? (
        <a href={link} className="text-slate-600 hover:text-freshGreen-500 transition-colors text-xs sm:text-sm">{content}</a>
      ) : (
        <p className="text-slate-600 text-xs sm:text-sm">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;
