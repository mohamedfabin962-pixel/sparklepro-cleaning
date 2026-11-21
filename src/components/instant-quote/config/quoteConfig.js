/**
 * SparklePro Instant Quote & Booking Widget Configuration
 * 
 * Modular pricing rules, business branding, and services configuration.
 * Designed to be easily repurposed for any cleaning business demo.
 */

export const BUSINESS_CONFIG = {
  name: 'SparklePro Cleaning',
  tagline: "Miami's 5-Star Cleaning Professionals",
  phone: '(800) 555-0123',
  email: 'info@sparklepro.com',
  currency: '$',
  responseTime: 'within 2 hours',
  demoNotice: 'Demo Mode: Instant calculation preview for sales demonstration purposes.',
};

export const PROPERTY_TYPES = [
  {
    id: 'apartment',
    label: 'Apartment / Condo',
    desc: 'Single-level flat, loft, or condo unit',
    icon: 'Building2',
    basePrice: 115,
  },
  {
    id: 'house',
    label: 'Single Family House',
    desc: 'Multi-level home, townhouse, or detached property',
    icon: 'Home',
    basePrice: 145,
  },
];

export const SQFT_TIERS = [
  { id: 'under-1000', label: '< 1,000 sq ft', price: 0 },
  { id: '1000-1999', label: '1,000 – 1,999 sq ft', price: 25 },
  { id: '2000-2999', label: '2,000 – 2,999 sq ft', price: 50 },
  { id: '3000-plus', label: '3,000+ sq ft', price: 85 },
];

export const CLEANING_TYPES = [
  {
    id: 'standard',
    label: 'Standard Cleaning',
    desc: 'Regular upkeep for tidy spaces — dusting, vacuuming, mopping & surfaces.',
    multiplier: 1.0,
    popular: false,
    badge: 'Routine Maintenance',
  },
  {
    id: 'deep',
    label: 'Deep Cleaning',
    desc: 'Intensive scrub-down covering soap scum, grime, tile grout & hidden nooks.',
    multiplier: 1.45,
    popular: true,
    badge: 'Most Popular Choice',
  },
  {
    id: 'move',
    label: 'Move-In / Move-Out',
    desc: 'Full-depth turnover cleaning for empty properties getting ready for handover.',
    multiplier: 1.65,
    popular: false,
    badge: 'Complete Reset',
  },
];

export const FREQUENCIES = [
  {
    id: 'onetime',
    label: 'One-Time Clean',
    desc: 'Single visit with no ongoing commitment',
    discountPercent: 0,
    badge: null,
  },
  {
    id: 'monthly',
    label: 'Monthly',
    desc: 'Once every 4 weeks maintenance clean',
    discountPercent: 5,
    badge: 'Save 5%',
  },
  {
    id: 'biweekly',
    label: 'Every 2 Weeks',
    desc: 'Recommended routine for busy households',
    discountPercent: 10,
    badge: 'Most Popular • 10% Off',
  },
  {
    id: 'weekly',
    label: 'Weekly Clean',
    desc: 'Consistently spotless home all year round',
    discountPercent: 15,
    badge: 'Best Value • 15% Off',
  },
];

export const ADDONS = [
  {
    id: 'fridge',
    label: 'Inside Refrigerator',
    price: 35,
    desc: 'Deep clean, wipe shelves & crisper drawers',
    icon: 'Sparkles',
  },
  {
    id: 'oven',
    label: 'Inside Oven',
    price: 35,
    desc: 'Grease removal, baked-on residue & racks scrub',
    icon: 'Flame',
  },
  {
    id: 'windows',
    label: 'Interior Windows',
    price: 45,
    desc: 'Streak-free window panes, sills & tracks',
    icon: 'Sun',
  },
  {
    id: 'cabinets',
    label: 'Inside Cabinets',
    price: 40,
    desc: 'Wipe inside empty kitchen/bathroom cupboards',
    icon: 'Archive',
  },
  {
    id: 'baseboards',
    label: 'Hand-Wiped Baseboards',
    price: 30,
    desc: 'Detailed dust & smudge removal on trim',
    icon: 'Layers',
  },
  {
    id: 'pethair',
    label: 'Pet Hair Treatment',
    price: 25,
    desc: 'Specialized vacuuming for rugs & sofas',
    icon: 'Heart',
  },
];

export const ROOM_RATES = {
  bedroomAdditional: 25, // per bedroom over 1
  bathroomAdditional: 20, // per bathroom over 1
  minBedrooms: 1,
  maxBedrooms: 6,
  minBathrooms: 1,
  maxBathrooms: 5,
};

/**
 * Calculates itemized quote from customer selections
 */
export function calculateQuote(selections) {
  const property = PROPERTY_TYPES.find((p) => p.id === selections.propertyType) || PROPERTY_TYPES[0];
  const sqft = SQFT_TIERS.find((s) => s.id === selections.sqftTier) || SQFT_TIERS[0];
  const cleaning = CLEANING_TYPES.find((c) => c.id === selections.cleaningType) || CLEANING_TYPES[0];
  const frequency = FREQUENCIES.find((f) => f.id === selections.frequency) || FREQUENCIES[0];

  // Base property price
  const basePropertyCost = property.basePrice;

  // Additional rooms calculation
  const extraBedrooms = Math.max(0, (selections.bedrooms || 1) - 1);
  const extraBathrooms = Math.max(0, (selections.bathrooms || 1) - 1);
  const bedroomsCost = extraBedrooms * ROOM_RATES.bedroomAdditional;
  const bathroomsCost = extraBathrooms * ROOM_RATES.bathroomAdditional;

  // Square footage adjustment
  const sqftCost = sqft.price;

  // Subtotal for space layout
  const spaceBase = basePropertyCost + bedroomsCost + bathroomsCost + sqftCost;

  // Apply cleaning type intensity multiplier
  const intensityRate = Math.round(spaceBase * cleaning.multiplier);

  // Add-ons calculation
  const selectedAddonsList = (selections.addons || [])
    .map((id) => ADDONS.find((a) => a.id === id))
    .filter(Boolean);
  const addonsTotal = selectedAddonsList.reduce((acc, item) => acc + item.price, 0);

  // Gross estimate before recurring discounts
  const grossTotal = intensityRate + addonsTotal;

  // Frequency discount
  const discountAmount = Math.round(grossTotal * (frequency.discountPercent / 100));
  const finalPrice = Math.max(89, grossTotal - discountAmount);

  return {
    property,
    sqft,
    cleaning,
    frequency,
    selectedAddonsList,
    breakdown: {
      basePropertyCost,
      extraBedrooms,
      bedroomsCost,
      extraBathrooms,
      bathroomsCost,
      sqftCost,
      cleaningIntensityRate: intensityRate,
      cleaningTypeMultiplier: cleaning.multiplier,
      addonsTotal,
      grossTotal,
      discountPercent: frequency.discountPercent,
      discountAmount,
    },
    estimatedPrice: finalPrice,
    currency: BUSINESS_CONFIG.currency,
  };
}
