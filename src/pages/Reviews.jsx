import { Star, Quote as QuoteIcon, CircleCheckBig, ThumbsUp, Filter } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Miami, FL",
      date: "2 days ago",
      rating: 5,
      service: "Deep Cleaning",
      text: "I was blown away by the attention to detail! They spent 4 hours deep cleaning my kitchen and bathrooms, and they look brand new. The team was professional, prompt, and even cleaned under the appliances which most places skip. Highly recommend!",
      verified: true
    },
    {
      name: "Mark Stevens",
      location: "Orlando, FL",
      date: "1 week ago",
      rating: 5,
      service: "Office Cleaning",
      text: "SparklePro has been handling our 5,000 sq ft office for six months now. Their consistency is what sets them apart. We never have to remind them of anything, and the staff loves coming into a fresh office every Monday.",
      verified: true
    },
    {
      name: "Linda Garcia",
      location: "Miami Beach, FL",
      date: "2 weeks ago",
      rating: 5,
      service: "House Cleaning",
      text: "I've tried several services in the area, and SparklePro is by far the most reliable. Their app makes scheduling so easy, and the cleaners are always friendly with my dogs. It's such a relief to have the house taken care of.",
      verified: true
    },
    {
      name: "David Chen",
      location: "Coral Gables, FL",
      date: "3 weeks ago",
      rating: 4,
      service: "Post-Construction",
      text: "We used them after a kitchen renovation. The dust was everywhere! They did a great job getting into every nook and cranny. One small spot in a cabinet was missed but they came back the next day to fix it for free. Excellent service.",
      verified: true
    },
    {
      name: "Emily White",
      location: "Fort Lauderdale, FL",
      date: "1 month ago",
      rating: 5,
      service: "Airbnb Cleaning",
      text: "As a host, turnover speed is everything. SparklePro is incredibly fast but never compromises on quality. My guest reviews for cleanliness have been straight 5 stars since I switched to them.",
      verified: true
    },
    {
      name: "Robert Taylor",
      location: "Miami, FL",
      date: "1 month ago",
      rating: 5,
      service: "Move In Cleaning",
      text: "Moved into a place that was left in pretty bad shape by the previous tenants. SparklePro completely transformed it. I felt comfortable moving my family in immediately after they were done. Lifesavers!",
      verified: true
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <Section background="navy" className="!pt-32 !pb-24 overflow-visible">
        <Container>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-freshGreen-500/20 border border-freshGreen-500/30 text-freshGreen-400 px-6 py-3 rounded-full mb-8 font-bold">
              <Star className="w-5 h-5 fill-freshGreen-400" />
              <span>4.9/5 Average Rating</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">What Our <span className="text-freshGreen-400">Clients</span> Say</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Real reviews from real customers. We pride ourselves on delivering 5-star service every single time.
            </p>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <RatingStat value="500+" label="Verified 5-Star Reviews" />
            <RatingStat value="98%" label="Customer Satisfaction" />
            <RatingStat value="10k+" label="Spaces Cleaned" />
            <RatingStat value="15+" label="Award Wins" />
          </div>
        </Container>
      </Section>

      {/* Reviews Grid */}
      <Section background="gray">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
             <h2 className="text-3xl font-bold text-navy-900">Latest Customer Feedback</h2>
             <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filter by Service
                </Button>
                <Link to="/quote">
                  <Button size="sm">Write a Review</Button>
                </Link>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg">Load More Reviews</Button>
          </div>
        </Container>
      </Section>

      {/* Trust Quote */}
      <Section className="!py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <QuoteIcon className="w-20 h-20 text-freshGreen-500/20 mx-auto mb-10" />
            <p className="text-3xl md:text-4xl font-medium text-navy-900 italic leading-relaxed mb-12">
              "We've tried dozens of cleaning services in the past decade, but none have matched the professionalism and consistency of SparklePro. They truly treat your space like their own."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JM
              </div>
              <div className="text-left">
                <div className="font-bold text-navy-900 text-xl">James Montgomery</div>
                <div className="text-slate-500">Corporate Facilities Director</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Ready CTA */}
      <Section background="navy">
        <Container>
           <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="max-w-2xl text-center lg:text-left">
               <h2 className="text-4xl font-bold mb-6">Ready to Experience the 5-Star Difference?</h2>
               <p className="text-slate-400 text-lg">Join hundreds of happy customers and book your first clean today.</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
               <Link to="/quote" className="w-full sm:w-auto">
                 <Button size="lg" className="w-full">Get Free Quote</Button>
               </Link>
               <a href="tel:+18005550123" className="w-full sm:w-auto">
                 <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white/10">Call Now</Button>
               </a>
             </div>
           </div>
        </Container>
      </Section>
    </div>
  );
};

const RatingStat = ({ value, label }) => (
  <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 text-center">
    <div className="text-4xl font-black text-white mb-2">{value}</div>
    <div className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-tight">{label}</div>
  </div>
);

const ReviewCard = ({ name, location, date, rating, service, text, verified }) => (
  <Card className="flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
        ))}
      </div>
      <span className="text-slate-400 text-xs font-medium">{date}</span>
    </div>
    
    <div className="bg-freshGreen-50 text-freshGreen-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
      {service}
    </div>

    <p className="text-slate-700 leading-relaxed mb-8 flex-grow">"{text}"</p>
    
    <div className="space-y-4 pt-6 border-t border-slate-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-900 font-bold text-sm">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-navy-900 text-sm flex items-center gap-1">
              {name}
              {verified && <CircleCheckBig className="w-3 h-3 text-freshGreen-500" />}
            </div>
            <div className="text-[10px] text-slate-500">{location}</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-slate-400 hover:text-freshGreen-500 cursor-pointer transition-colors">
          <ThumbsUp className="w-3 h-3" />
          <span className="text-[10px] font-bold">Helpful</span>
        </div>
      </div>
    </div>
  </Card>
);

export default Reviews;
