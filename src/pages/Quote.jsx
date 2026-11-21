import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Sparkles, CircleCheckBig, ShieldCheck, MapPin, Calendar, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';

const Quote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <Section className="min-h-[70vh] flex items-center pt-24 sm:pt-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-freshGreen-500 w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl shadow-freshGreen-500/30"
            >
              <CircleCheckBig className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-navy-900 mb-4 sm:mb-6">Quote Request Received!</h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12">
              Thank you for choosing SparklePro. One of our cleaning experts will contact you within the next 2 hours with your customized estimate.
            </p>
            <Button onClick={() => window.location.href = '/'} size="lg" className="w-full sm:w-auto">Back to Home</Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-2">
            <Card className="p-5 sm:p-8 md:p-12 shadow-xl border-none rounded-2xl sm:rounded-3xl">
              <div className="mb-6 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-900 mb-2 sm:mb-4">Get a Free Estimate</h1>
                <p className="text-sm sm:text-base text-slate-600">Complete the form below and we'll get back to you with a transparent, no-obligation quote.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <FormInput
                    label="Full Name"
                    name="fullName"
                    register={register}
                    required
                    errors={errors}
                    placeholder="John Doe"
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    register={register}
                    required
                    errors={errors}
                    placeholder="john@example.com"
                    type="email"
                  />
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    register={register}
                    required
                    errors={errors}
                    placeholder="(555) 000-0000"
                  />
                  <FormInput
                    label="Property Address"
                    name="address"
                    register={register}
                    required
                    errors={errors}
                    placeholder="123 Street Name, City, State"
                  />
                </div>

                <hr className="border-slate-100" />

                {/* Property Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-2 sm:mb-3">Property Type</label>
                    <select
                      {...register("propertyType", { required: true })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-all text-navy-900 font-medium text-sm sm:text-base"
                    >
                      <option value="residential">Residential Home</option>
                      <option value="apartment">Apartment/Condo</option>
                      <option value="commercial">Commercial Office</option>
                      <option value="airbnb">Airbnb/Rental</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-2 sm:mb-3">Cleaning Type</label>
                    <select
                      {...register("cleaningType", { required: true })}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-all text-navy-900 font-medium text-sm sm:text-base"
                    >
                      <option value="standard">Standard Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move In/Out Cleaning</option>
                      <option value="post">Post-Construction</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-2 sm:mb-3">Property Size (Sq Ft)</label>
                    <input
                      type="number"
                      {...register("size", { required: true })}
                      placeholder="e.g. 2500"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-all text-navy-900 font-medium text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-2 sm:mb-3">Frequency</label>
                    <select
                      {...register("frequency")}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-all text-navy-900 font-medium text-sm sm:text-base"
                    >
                      <option value="once">One-Time</option>
                      <option value="weekly">Weekly (10% Off)</option>
                      <option value="biweekly">Bi-Weekly (5% Off)</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-2 sm:mb-3">Additional Notes / Special Instructions</label>
                  <textarea
                    {...register("notes")}
                    placeholder="Tell us about any specific areas you want us to focus on, pet information, or entry instructions."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-all text-navy-900 font-medium min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full py-4 sm:py-6 text-base sm:text-xl">
                  Get My Free Estimate
                </Button>
              </form>
            </Card>
          </div>

          {/* Right Column: Trust Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-navy-900 text-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-freshGreen-500/20 blur-3xl rounded-full" />
               <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 relative z-10">Why SparklePro?</h3>
               <ul className="space-y-4 sm:space-y-6 relative z-10">
                 <SidebarItem icon={<ShieldCheck className="text-freshGreen-500" />} text="Fully Insured & Bonded" />
                 <SidebarItem icon={<Calendar className="text-freshGreen-500" />} text="Flexible Scheduling" />
                 <SidebarItem icon={<MapPin className="text-freshGreen-500" />} text="Serving All Miami Areas" />
                 <SidebarItem icon={<Sparkles className="text-freshGreen-500" />} text="Eco-Friendly Products" />
               </ul>
            </div>

            <Card className="bg-white p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2 sm:mb-4">Need Help?</h3>
              <p className="text-slate-600 text-sm sm:text-base mb-4 sm:mb-6">Have questions before requesting a quote? Give us a call!</p>
              <a href="tel:+18005550123" className="flex items-center gap-3 text-navy-900 font-black text-lg sm:text-xl hover:text-freshGreen-500 transition-colors">
                <div className="bg-slate-100 p-2.5 sm:p-3 rounded-full"><Clock className="w-5 h-5 sm:w-6 sm:h-6 text-freshGreen-500" /></div>
                (800) 555-0123
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

const FormInput = ({ label, name, register, required, errors, placeholder, type = "text" }) => (
  <div>
    <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-2 sm:mb-3">{label}</label>
    <input
      type={type}
      {...register(name, { required })}
      placeholder={placeholder}
      className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border ${errors[name] ? 'border-red-500' : 'border-slate-200'} focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-all text-navy-900 font-medium text-sm sm:text-base`}
    />
    {errors[name] && <span className="text-red-500 text-xs mt-1 font-semibold">This field is required</span>}
  </div>
);

const SidebarItem = ({ icon, text }) => (
  <li className="flex items-center gap-4">
    <div className="bg-white/10 p-2 rounded-lg">{icon}</div>
    <span className="font-semibold">{text}</span>
  </li>
);

export default Quote;
