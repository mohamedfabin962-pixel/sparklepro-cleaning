import React from 'react';
import {
  CircleCheckBig,
  Home as HomeIcon,
  Zap,
  Briefcase,
  ArrowRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Header */}
      <Section background="navy" className="!pt-24 sm:!pt-32 !pb-14 sm:!pb-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-8">Our Cleaning <span className="text-freshGreen-400">Expertise</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
              From cozy apartments to large commercial complexes, we provide meticulous cleaning services tailored to your specific requirements.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services List */}
      <Section>
        <Container>
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            <ServiceDetail
              id="house-cleaning"
              title="House Cleaning"
              icon={<HomeIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />}
              image="/images/hero_cleaning_1782142868662.png"
              desc="Our standard house cleaning service is designed to maintain a clean and healthy environment for you and your family. We cover all basic tidying, dusting, and mopping tasks."
              includes={[
                "Dusting all surfaces and furniture",
                "Vacuuming and mopping all floors",
                "Cleaning and sanitizing bathrooms",
                "Wiping down kitchen countertops and appliances",
                "Emptying trash and recycling",
                "Making beds (linens changed upon request)"
              ]}
              benefits="Save time and enjoy a consistently clean home without the stress."
            />

            <ServiceDetail
              id="deep-cleaning"
              title="Deep Cleaning"
              icon={<Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />}
              image="/images/deep_cleaning_1782142904067.png"
              reverse
              desc="For those times when your home needs extra attention. Our deep cleaning service goes beyond the surface to tackle hidden dust, grime, and allergens."
              includes={[
                "Cleaning inside oven and microwave",
                "Wiping down baseboards and door frames",
                "Cleaning inside cabinets and drawers",
                "Detailed scrubbing of bathroom tiles and grout",
                "Dusting light fixtures and ceiling fans",
                "Cleaning behind large appliances"
              ]}
              benefits="Improves indoor air quality and removes stubborn stains and buildup."
            />

            <ServiceDetail
              id="office-cleaning"
              title="Office Cleaning"
              icon={<Briefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />}
              image="/images/office_cleaning_1782142887701.png"
              desc="A clean workspace is a productive workspace. We provide professional cleaning services for businesses of all sizes, ensuring a pristine environment for your team and clients."
              includes={[
                "Sanitizing high-touch surfaces (phones, keyboards)",
                "Cleaning common areas and breakrooms",
                "Detailed dusting of desks and shelves",
                "Emptying waste bins and replacing liners",
                "Window cleaning (interior)",
                "Restroom sanitization and restocking"
              ]}
              benefits="Enhances employee wellbeing and creates a professional impression."
            />
          </div>
        </Container>
      </Section>

      {/* Other Services Grid */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-3 sm:mb-4">Specialized Services</h2>
            <p className="text-slate-600 text-sm sm:text-base">Addressing specific cleaning challenges with professional expertise.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <SpecializedCard
              title="Move In / Out"
              desc="Thorough cleaning to ensure your transition is seamless and your new space is ready for living."
              icon={<ArrowRight />}
            />
            <SpecializedCard
              title="Airbnb Cleaning"
              desc="Quick turnover cleaning with a focus on guest ready standards and restock alerts."
              icon={<Sparkles />}
            />
            <SpecializedCard
              title="Post-Construction"
              desc="Expert dust removal and detailed cleaning after renovation or new builds."
              icon={<TrendingUp />}
            />
          </div>
        </Container>
      </Section>

      {/* Ready CTA */}
      <Section background="white">
        <Container>
          <div className="bg-navy-900 rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8">Need a Custom Cleaning Plan?</h2>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">We understand that every space is unique. Contact us today to discuss your specific needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link to="/quote"><Button size="lg" className="w-full sm:w-auto">Get Free Quote</Button></Link>
                <Link to="/contact"><Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">Contact Us</Button></Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

const ServiceDetail = ({ title, icon, image, desc, includes, benefits, reverse, id }) => (
  <div id={id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className={reverse ? 'lg:order-2' : ''}>
      <div className="bg-freshGreen-500/10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-[2rem] flex items-center justify-center mb-6 sm:mb-10 text-freshGreen-600 shadow-xl shadow-freshGreen-500/5">
        {icon}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mb-4 sm:mb-8 leading-tight">{title}</h2>
      <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-10 leading-relaxed italic border-l-4 border-freshGreen-500 pl-4 sm:pl-6">
        "{desc}"
      </p>

      <div className="mb-8 sm:mb-12">
        <h4 className="font-bold text-navy-900 mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">What's Included:</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 sm:gap-y-4 sm:gap-x-8">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base">
              <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 text-freshGreen-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-50 p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 mb-6 sm:mb-10">
        <h4 className="font-bold text-navy-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-freshGreen-500" />
          The SparklePro Benefit
        </h4>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base">{benefits}</p>
      </div>

      <Link to="/quote">
        <Button size="lg" className="w-full sm:w-auto">Book {title} Now</Button>
      </Link>
    </div>

    <div className={`relative overflow-hidden ${reverse ? 'lg:order-1' : ''}`}>
      <div className="aspect-[4/3] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-freshGreen-500/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      {/* Floating Trust Badge */}
      <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 glass p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] shadow-xl z-20 hidden sm:block">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-1 sm:mb-2">
          <div className="bg-freshGreen-500 text-white p-1.5 sm:p-2 rounded-lg"><CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5" /></div>
          <span className="font-bold text-navy-900 text-sm sm:text-base">Verified Quality</span>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-500 max-w-[150px]">All services performed by our background-checked experts.</p>
      </div>
    </div>
  </div>
);

const SpecializedCard = ({ title, desc, icon }) => (
  <Card className="h-full flex flex-col p-6 sm:p-8 md:p-10 hover:shadow-2xl hover:shadow-navy-900/10 border-transparent hover:border-slate-200 transition-all">
    <div className="bg-navy-900 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg shadow-navy-900/20">
      {React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 sm:mb-4">{title}</h3>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-grow">{desc}</p>
    <Link to="/quote">
      <Button variant="ghost" className="p-0 font-bold flex items-center gap-2 text-freshGreen-600 hover:text-freshGreen-700 h-auto text-sm sm:text-base">
        Book Now <ArrowRight className="w-4 h-4" />
      </Button>
    </Link>
  </Card>
);

export default Services;
