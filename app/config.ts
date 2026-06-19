// ─────────────────────────────────────────────────────────────
//  DQ Blendz — Business configuration
//  Edit the values below to update them everywhere on the site.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: "DQ Blendz",
  tagline: "Master Barber",

  // 👇 Replace this with DQ's real Booksy booking link.
  //    Every "Book Now" button on the site points here.
  booksyUrl: "https://booksy.com/",

  phone: "(555) 123-4567",
  phoneHref: "tel:5551234567",

  instagram: "https://instagram.com/dqblendz",
  instagramHandle: "@dqblendz",

  address: {
    line1: "123 Main Street",
    line2: "Your City, Province A1B 2C3",
    mapsUrl: "https://maps.google.com/?q=DQ+Blendz",
  },

  hours: [
    { day: "Monday", time: "9 AM – 7 PM" },
    { day: "Tuesday", time: "9 AM – 7 PM" },
    { day: "Wednesday", time: "9 AM – 7 PM" },
    { day: "Thursday", time: "9 AM – 8 PM" },
    { day: "Friday", time: "9 AM – 8 PM" },
    { day: "Saturday", time: "8 AM – 6 PM" },
    { day: "Sunday", time: "10 AM – 4 PM" },
  ],
} as const;
