import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  CircleCheckBig,
  Star,
  Users,
  ArrowRight,
  ShieldCheck,
  Zap,
  Leaf,
  Clock,
  DollarSign,
  ThumbsUp,
  Home as HomeIcon,
  Briefcase,
  Sparkles,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';

/* ─── Shared fade-up variant (reused, not recreated per render) ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <div>
      {/* ─── HERO SECTION ─── */}
      <section
        aria-label="Hero"
        className="relative flex flex-col justify-center overflow-hidden min-h-[85vh] sm:min-h-screen pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 md:pb-32"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <picture>
            <source
              srcSet="/images/hero_cleaning_1782142868662.webp"
              type="image/webp"
            />
            <img
              src="/images/hero_cleaning_1782142868662.png"
              alt=""
              role="presentation"
              width="1920"
              height="1080"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/92 via-navy-900/65 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-freshGreen-500/20 border border-freshGreen-500/30 text-freshGreen-400 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 font-semibold text-xs sm:text-sm backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Fully Insured &amp; Trusted Since 2018</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight break-words">
                Professional Cleaning <br />
                <span className="text-freshGreen-500">Services You Can Trust</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-lg">
                Experience a spotless home or office with Miami's 5-star cleaning professionals. Reliable, insured, and 100% satisfaction guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/quote" aria-label="Get a free cleaning quote">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:+18005550123" aria-label="Call SparklePro at 800-555-0123">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                    Call Now
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6 items-center text-xs sm:text-sm" role="list" aria-label="Trust badges">
                <div className="flex items-center gap-2 text-white/80" role="listitem">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  <span className="font-semibold">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 text-white/80" role="listitem">
                  <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 text-freshGreen-500" aria-hidden="true" />
                  <span className="font-semibold">Insured &amp; Bonded</span>
                </div>
                <div className="flex items-center gap-2 text-white/80" role="listitem">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-freshGreen-500" aria-hidden="true" />
                  <span className="font-semibold">Background Checked</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── STATS SECTION ─── */}
      <div className="relative z-20 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 pb-4">
        <Container>
          <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[3rem] shadow-2xl px-5 py-6 sm:px-8 sm:py-10 md:px-12 md:py-12 border border-slate-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
              <StatItem number="500+" label="Happy Clients" />
              <StatItem number="5+" label="Years Experience" />
              <StatItem number="10k+" label="Spaces Cleaned" />
              <StatItem number="98%" label="Satisfaction" />
            </div>
          </div>
        </Container>
      </div>

      {/* ─── SERVICES SECTION ─── */}
      <Section background="gray" id="services" className="pt-12 sm:pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-3 sm:mb-6">Our Premium Services</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600">Tailored cleaning solutions for every need. We handle everything from residential to commercial with precision and care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full min-w-0">
            <ServiceCard
              icon={<HomeIcon className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />}
              title="House Cleaning"
              desc="Regular tidying and maintenance for a fresh, healthy home environment."
              image="/images/hero_cleaning_1782142868662.webp"
              fallback="/images/hero_cleaning_1782142868662.png"
            />
            <ServiceCard
              icon={<Zap className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />}
              title="Deep Cleaning"
              desc="Comprehensive scrub-down covering every nook and cranny of your space."
              image="/images/deep_cleaning_1782142904067.webp"
              fallback="/images/deep_cleaning_1782142904067.png"
            />
            <ServiceCard
              icon={<Briefcase className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />}
              title="Office Cleaning"
              desc="Professional disinfecting and cleaning for a productive workspace."
              image="/images/office_cleaning_1782142887701.webp"
              fallback="/images/office_cleaning_1782142887701.png"
            />
            <ServiceCard
              icon={<ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />}
              title="Move In / Out"
              desc="Ensure your old or new home is spotless for a stress-free transition."
              image="/images/hero_cleaning_1782142868662.webp"
              fallback="/images/hero_cleaning_1782142868662.png"
            />
            <ServiceCard
              icon={<Sparkles className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />}
              title="Airbnb Cleaning"
              desc="Specialized cleaning and turnover services for hosts and property managers."
              image="/images/deep_cleaning_1782142904067.webp"
              fallback="/images/deep_cleaning_1782142904067.png"
            />
            <ServiceCard
              icon={<TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />}
              title="Post Construction"
              desc="Detailed site cleanup to remove dust and debris after renovation."
              image="/images/office_cleaning_1782142887701.webp"
              fallback="/images/office_cleaning_1782142887701.png"
            />
          </div>
        </Container>
      </Section>

      {/* ─── WHY CHOOSE US ─── */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full min-w-0">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6 sm:mb-8 leading-tight">Why Choose SparklePro Cleaning Services?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                <FeatureItem icon={<ShieldCheck className="text-freshGreen-500" aria-hidden="true" />} title="Fully Insured" desc="Peace of mind for every cleaning session." />
                <FeatureItem icon={<Leaf className="text-freshGreen-500" aria-hidden="true" />} title="Eco-Friendly" desc="Safe for pets, children, and the planet." />
                <FeatureItem icon={<Clock className="text-freshGreen-500" aria-hidden="true" />} title="Timely Service" desc="We value your time as much as you do." />
                <FeatureItem icon={<DollarSign className="text-freshGreen-500" aria-hidden="true" />} title="Transparent Pricing" desc="No hidden fees, no surprises." />
                <FeatureItem icon={<Star className="text-freshGreen-500" aria-hidden="true" />} title="5-Star Quality" desc="Meticulous attention to every detail." />
                <FeatureItem icon={<ThumbsUp className="text-freshGreen-500" aria-hidden="true" />} title="Satisfaction Guarantee" desc="Not happy? We'll make it right." />
              </div>
            </div>
            <div className="relative overflow-hidden pb-10 sm:pb-12 lg:pb-0 w-full min-w-0">
              <div className="aspect-square rounded-2xl sm:rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl w-full min-w-0">
                <picture className="w-full h-full block min-w-0">
                  <source srcSet="/images/deep_cleaning_1782142904067.webp" type="image/webp" />
                  <img
                    src="/images/deep_cleaning_1782142904067.png"
                    alt="Deep cleaning service in progress"
                    loading="lazy"
                    className="w-full h-full object-cover min-w-0 max-w-full"
                  />
                </picture>
              </div>
              <div className="absolute -bottom-4 left-3 right-3 sm:left-0 sm:right-auto sm:-bottom-8 lg:-left-8 bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[2rem] shadow-xl border border-slate-100 max-w-[calc(100%-1.5rem)] sm:max-w-xs">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
                  <div className="bg-freshGreen-500 p-2 sm:p-3 rounded-xl">
                    <Sparkles className="text-white w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-bold text-navy-900 text-sm sm:text-base">Premium Standard</span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm italic">"The most thorough cleaning I've ever had. Truly professional!"</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── HOW IT WORKS ─── */}
      <Section background="navy">
        <Container>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">How It Works</h2>
            <p className="text-slate-400 text-sm sm:text-base">Our simple 4-step process to a cleaner space.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Step number="1" title="Request a Quote" desc="Tell us about your space and cleaning needs." />
            <Step number="2" title="Schedule Service" desc="Pick a date and time that works best for you." />
            <Step number="3" title="Professional Cleaning" desc="Our team arrives and cleans your space meticulously." />
            <Step number="4" title="Enjoy Your Clean Space" desc="Relax and enjoy your fresh, healthy environment." />
          </div>
        </Container>
      </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Homeowner in Miami"
              text="SparklePro has been cleaning my home for 2 years. They are reliable, professional, and do an amazing job every single time."
            />
            <TestimonialCard
              name="Michael Chen"
              role="Office Manager"
              text="Our office has never looked better. The attention to detail is impressive, and the crew is always on time."
            />
            <TestimonialCard
              name="Emily Rodriguez"
              role="Airbnb Host"
              text="The only cleaning service I trust for my rentals. They handle everything and the guests always comment on how clean it is."
            />
          </div>
        </Container>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section background="white">
        <Container>
          <div className="bg-navy-900 rounded-2xl sm:rounded-3xl md:rounded-[4rem] p-6 sm:p-12 md:p-20 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-freshGreen-500/20 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-8">Ready for a Spotless Home?</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12">Join 500+ happy clients and experience the SparklePro difference today.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link to="/quote" aria-label="Get a free cleaning quote">
                  <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl">Get Free Quote</Button>
                </Link>
                <a href="tel:+18005550123" aria-label="Call SparklePro today">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl border-white text-white hover:bg-white/10">Call Today</Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

/* ─── Internal Components (memoized to prevent unnecessary re-renders) ─── */

const StatItem = memo(({ number, label }) => (
  <div className="text-center">
    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mb-1 sm:mb-2">{number}</div>
    <div className="text-slate-500 font-medium uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">{label}</div>
  </div>
));
StatItem.displayName = 'StatItem';

const ServiceCard = memo(({ icon, title, desc, image, fallback }) => (
  <Card className="group overflow-hidden p-0 h-full flex flex-col w-full min-w-0 max-w-full">
    <div className="w-full min-w-0 aspect-[16/10] sm:aspect-[16/9] md:h-56 overflow-hidden relative">
      <picture className="w-full h-full block min-w-0">
        <source srcSet={image} type="image/webp" />
        <img
          src={fallback}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 min-w-0 max-w-full"
        />
      </picture>
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg text-navy-900" aria-hidden="true">
        {icon}
      </div>
    </div>
    <div className="p-5 sm:p-6 md:p-8 flex-grow flex flex-col min-w-0 w-full">
      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 sm:mb-4 break-words">{title}</h3>
      <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 flex-grow break-words">{desc}</p>
      <Link to="/services" className="inline-flex items-center gap-2 text-navy-900 font-bold hover:text-freshGreen-500 transition-colors group/link text-sm sm:text-base mt-auto" aria-label={`Learn more about ${title}`}>
        Learn More <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
      </Link>
    </div>
  </Card>
));
ServiceCard.displayName = 'ServiceCard';

const FeatureItem = memo(({ icon, title, desc }) => (
  <div className="flex gap-3 sm:gap-4">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h4 className="font-bold text-navy-900 text-sm sm:text-base mb-1">{title}</h4>
      <p className="text-xs sm:text-sm text-slate-600">{desc}</p>
    </div>
  </div>
));
FeatureItem.displayName = 'FeatureItem';

const Step = memo(({ number, title, desc }) => (
  <div className="relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] bg-navy-800/50 border border-navy-700">
    <div className="text-5xl sm:text-6xl font-black text-freshGreen-500/10 absolute top-4 right-6 sm:right-8 select-none" aria-hidden="true">{number}</div>
    <div className="bg-freshGreen-500 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold mb-4 sm:mb-6 text-sm sm:text-base" aria-hidden="true">
      {number}
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">{title}</h3>
    <p className="text-xs sm:text-sm text-slate-400">{desc}</p>
  </div>
));
Step.displayName = 'Step';

const TestimonialCard = memo(({ name, role, text }) => (
  <Card className="flex flex-col h-full p-5 sm:p-6 md:p-8">
    <div className="flex gap-1 mb-4 sm:mb-6" role="img" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
      ))}
    </div>
    <p className="text-slate-700 text-sm sm:text-base italic mb-6 sm:mb-8 flex-grow">"{text}"</p>
    <div className="flex items-center gap-3 sm:gap-4 border-t border-slate-100 pt-4 sm:pt-6">
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center font-bold text-navy-900 text-sm sm:text-base"
        aria-label={`${name} avatar`}
      >
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-bold text-navy-900 text-sm sm:text-base">{name}</div>
        <div className="text-[11px] sm:text-xs text-slate-500">{role}</div>
      </div>
    </div>
  </Card>
));
TestimonialCard.displayName = 'TestimonialCard';

export default Home;
