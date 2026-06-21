// ─────────────────────────────────────────────────────────────
//  DQ Blendz — Business configuration
//  Edit the values below to update them everywhere on the site.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: "DQ Blendz",
  tagline: "Vaughan's Underground Barber",

  // Booksy booking link — every "Book Now" button points here.
  booksyUrl:
    "https://booksy.com/en-ca/16342_dq-blendz-shop_barbershop_910856_concord#ba_s=seo",

  // Leave phone empty to hide all phone UI. Add a number later if DQ wants
  // call/text booking, e.g. phone: "(905) 000-0000", phoneHref: "tel:9050000000".
  phone: "",
  phoneHref: "",

  instagram: "https://www.instagram.com/dq_blendz/",
  instagramHandle: "@dq_blendz",

  // 👇 Add the exact shop address + Google Maps link when ready.
  //    (Booksy lists the precise location at booking.)
  address: {
    line1: "Concord, Vaughan",
    line2: "Ontario, Canada",
    mapsUrl: "https://maps.google.com/?q=DQ+Blendz+Shop+Concord+Vaughan",
  },

  // Social proof
  reviewCount: 62,
  reviewsDisplay: "60+",
  rating: "5.0",
  yearsExperience: 6,

  // ── Live reviews widget ───────────────────────────────────────
  // Booksy has no official reviews widget, so the live reviews are
  // served through Elfsight (free tier), which syncs the real Booksy
  // reviews automatically.
  //
  // To turn it on:
  //   1. Go to https://elfsight.com/all-in-one-reviews-widget/
  //      and create a free widget. Choose "Booksy" as the source and
  //      paste DQ's Booksy page URL.
  //   2. Elfsight gives you an embed code that looks like:
  //        <div class="elfsight-app-XXXXXXXX-..."></div>
  //      Copy ONLY the id part (e.g. "elfsight-app-XXXXXXXX-...").
  //   3. Paste that id between the quotes below and save.
  // The fake reviews disappear and the real Booksy reviews show up.
  elfsightWidgetId: "",

  // 👇 Confirm DQ's real hours (Booksy shows them at booking).
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
