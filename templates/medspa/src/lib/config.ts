import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "SkinSpirit",
    tagline: "Reveal Your Radiance Today",
    phone: "(510) 368-7500",
    phoneHref: "tel:+15103687500",
    email: "montclair@skinspirit.com",
    address: "2017 Mountain Blvd. , Oakland, CA-94611",
    city: "Oakland",
    serviceAreas: ["Oakland", "Montclair", "East Bay"],
    license: "CA Medical License",
    since: "2002",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox & Dysport", desc: "Smooth fine lines and wrinkles for a refreshed, youthful appearance.", urgent: false },
    { icon: "heart", title: "Dermal Filler", desc: "Restore volume, enhance contours, and achieve natural-looking rejuvenation.", urgent: false },
    { icon: "star", title: "Laser Hair Removal", desc: "Achieve long-lasting smooth skin with advanced, comfortable laser technology.", urgent: false },
    { icon: "thermometer", title: "CoolSculpting", desc: "Freeze away stubborn fat cells to sculpt and contour your body non-invasively.", urgent: false },
    { icon: "shield-check", title: "Signature Facial", desc: "Experience a personalized facial treatment for glowing, healthy skin.", urgent: false },
    { icon: "scissors", title: "Chemical Peels", desc: "Improve skin texture and tone, reducing imperfections for a radiant complexion.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Oakland, CA", stars: 5, text: "I had a fantastic experience with my Botox treatment at SkinSpirit. The staff was incredibly professional and made me feel comfortable throughout the entire process. My results are subtle yet noticeable, exactly what I wanted! I'm so happy with how refreshed I look. Highly recommend their expertise!" },
    { name: "Michael P.", location: "Montclair, CA", stars: 5, text: "The Dermal Filler treatment I received here was exceptional. The practitioner listened to my concerns and delivered results that look completely natural. It's been a few weeks, and I still feel great about the subtle enhancement. The clinic itself is beautiful and very welcoming." },
    { name: "Jessica R.", location: "East Bay, CA", stars: 5, text: "My laser hair removal sessions have been a game-changer. After just a few treatments, I've seen a significant reduction in hair growth. The technicians are always gentle and thorough, explaining each step. It's truly worth the investment for the convenience and confidence it brings." }
  ],

  trustBadges: [
    "20 Years Experience", "Highly Trained Experts", "Personalized Care", "Safe & Trusted Treatments", "Noticeable Results"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 },
    { value: 10000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Experts", desc: "Our team consists of highly trained and certified medical professionals." },
    { icon: "sparkles", title: "Noticeable Results", desc: "We deliver effective treatments that provide visible and lasting improvements." },
    { icon: "shield-check", title: "Safe & Trusted", desc: "Your safety is our priority with rigorously tested and approved procedures." },
    { icon: "heart", title: "Personalized Journey", desc: "We tailor every treatment plan to your unique needs and aesthetic goals." },
    { icon: "clock", title: "20 Years Experience", desc: "Benefit from two decades of leadership and innovation in medical aesthetics." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "We are dedicated to ensuring every client leaves feeling confident and happy." }
  ],

  formServiceOptions: ["Botox & Dysport", "Dermal Filler", "Laser Hair Removal", "CoolSculpting", "Signature Facial", "Chemical Peels"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!