import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "SkinSpirit",
    tagline: "Radiant Skin, Confident You",
    phone: "(510) 368-7500",
    phoneHref: "tel:+15103687500",
    email: "montclair@skinspirit.com",
    address: "2017 Mountain Blvd.",
    city: "Oakland",
    serviceAreas: ["Oakland", "Montclair"],
    license: "Licensed & Certified",
    since: "2002",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox & Dysport", desc: "Smooth away wrinkles and fine lines for a refreshed appearance.", urgent: false },
    { icon: "droplets", title: "Dermal Filler", desc: "Restore volume and contour to achieve a youthful, natural look.", urgent: false },
    { icon: "heart", title: "Laser Hair Removal", desc: "Achieve long-lasting smooth skin with advanced laser technology.", urgent: false },
    { icon: "shield-check", title: "Morpheus8", desc: "Fractionated RF microneedling for skin tightening and resurfacing.", urgent: false },
    { icon: "star", title: "Signature Facial", desc: "Indulge in a customized facial for ultimate skin rejuvenation.", urgent: false },
    { icon: "scissors", title: "Chemical Peels", desc: "Reveal brighter, smoother skin by gently exfoliating the surface.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Oakland, CA", stars: 5, text: "I had a wonderful experience with my Botox treatment at SkinSpirit. The staff was incredibly professional and made me feel comfortable throughout the entire process. My results are fantastic, and I look so much more refreshed. Highly recommend their expertise!" },
    { name: "Michael P.", location: "Montclair, CA", stars: 5, text: "The dermal filler treatment I received at SkinSpirit exceeded my expectations. The practitioner was very knowledgeable and took the time to understand my goals. I'm thrilled with the natural-looking volume restoration. It was a truly positive experience from start to finish." },
    { name: "Jessica R.", location: "Oakland, CA", stars: 5, text: "My laser hair removal sessions have been amazing! The technicians are so thorough and gentle, and I've seen incredible results after just a few treatments. SkinSpirit provides a clean, welcoming environment, and I always feel well cared for." }
  ],

  trustBadges: [
    "20 Years Trusted Provider", "Highly Trained Experts", "Noticeable Results", "Safe & Trusted Treatments", "GAF Master Elite"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 },
    { value: 100, label: "Treatments Offered", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Experts", desc: "Our team consists of highly trained and certified medical professionals." },
    { icon: "sparkles", title: "Noticeable Results", desc: "Experience visible and natural-looking enhancements with our treatments." },
    { icon: "shield-check", title: "Safe & Trusted", desc: "We prioritize your safety with proven, FDA-approved procedures." },
    { icon: "clock", title: "20 Years Experience", desc: "Benefit from two decades of expertise in aesthetic medicine." },
    { icon: "heart", title: "Personalized Care", desc: "Receive tailored treatment plans designed for your unique needs." },
    { icon: "home", title: "Comfortable Environment", desc: "Relax in our modern, welcoming clinic designed for your comfort." }
  ],

  formServiceOptions: ["Botox & Dysport", "Dermal Filler", "Laser Hair Removal", "Morpheus8", "Signature Facial", "Chemical Peels"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!