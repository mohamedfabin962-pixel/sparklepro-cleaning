import React from 'react';
import { ShieldCheck, Users, Target, Heart, Award, Sparkles } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Header */}
      <Section background="navy" className="!pt-24 sm:!pt-32 !pb-14 sm:!pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-8">Our Mission is <span className="text-freshGreen-400">Your Spotless Space</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
              SparklePro Cleaning Services was founded with a simple goal: to provide the highest quality cleaning services with a focus on trust, reliability, and excellence.
            </p>
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="/images/hero_cleaning_1782142868662.png" alt="Company Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 md:-bottom-10 md:-right-6 bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 hidden sm:block">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-1 sm:mb-2">5+</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs sm:text-sm">Years of Excellence</div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4 sm:mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Started in 2018, SparklePro began as a small family-owned business in Miami. We noticed a gap in the market for cleaning services that truly prioritized customer trust and attention to detail.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                Today, we've grown into a premier cleaning agency serving hundreds of homes and businesses across the city, but our core values remain the same: integrity, professionalism, and a passion for clean spaces.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100">
                  <div className="bg-freshGreen-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <ShieldCheck className="text-freshGreen-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="font-bold text-navy-900 text-sm sm:text-base">Registered</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Fully licensed & bonded</p>
                </div>
                <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100">
                  <div className="bg-navy-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Award className="text-navy-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="font-bold text-navy-900 text-sm sm:text-base">Certified</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Eco-friendly standards</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">The principles that guide everything we do, every day.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            <ValueCard icon={<Target />} title="Excellence" desc="We don't just clean; we restore spaces to their best state." />
            <ValueCard icon={<Users />} title="Trust" desc="Every team member is carefully vetted and background-checked." />
            <ValueCard icon={<Heart />} title="Care" desc="We treat your home and office as if it were our own." />
            <ValueCard icon={<Sparkles />} title="Innovation" desc="Using the latest cleaning technology and eco-friendly products." />
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-3 sm:mb-4">Meet Our Team</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">The dedicated professionals behind SparklePro.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <TeamMember name="Elena Rodriguez" role="Founder & CEO" />
            <TeamMember name="Marcus Thompson" role="Operations Manager" />
            <TeamMember name="Jessica Miller" role="Quality Supervisor" />
          </div>
        </Container>
      </Section>

      {/* Trust Badges Scroll */}
      <div className="bg-navy-900 py-8 sm:py-12 overflow-hidden border-y border-white/10 w-full max-w-full min-w-0">
        <div className="flex animate-scroll whitespace-nowrap gap-8 sm:gap-16 md:gap-32 items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4 text-white opacity-40 font-bold text-base sm:text-xl uppercase tracking-widest italic">
              <Sparkles className="text-freshGreen-500 w-5 h-5 sm:w-6 sm:h-6" />
              Satisfaction Guaranteed
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <Section className="text-center">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4 sm:mb-8">Want to Join Our Team?</h2>
          <p className="text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">We are always looking for passionate cleaning professionals. If you have any questions, feel free to reach out.</p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Us</Button>
          </Link>
        </Container>
      </Section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <Card className="hover:border-navy-500/20 transition-all">
    <div className="bg-navy-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-navy-900/20">
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </div>
    <h3 className="text-xl font-bold text-navy-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </Card>
);

const TeamMember = ({ name, role }) => (
  <div className="text-center group">
    <div className="aspect-square rounded-2xl sm:rounded-3xl md:rounded-[3rem] bg-slate-100 mb-6 sm:mb-8 overflow-hidden relative shadow-lg">
      {/* Placeholder for team photo */}
      <div className="absolute inset-0 flex items-center justify-center text-slate-300">
        <Users className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-1 sm:mb-2">{name}</h3>
    <p className="text-slate-500 font-medium text-sm sm:text-base">{role}</p>
  </div>
);

export default About;
