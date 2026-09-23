// =============================================================================
// CENTRALIZED IMAGE MANAGEMENT
// =============================================================================
// When the client provides final assets, update ONLY the URLs in this file.
// All components reference images through this configuration.
// =============================================================================

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const asset = (path) => `${base}${path.replace(/^\//, '')}`;

// Reference images from Unsplash (free, high-quality, no CORS issues)
// These serve as premium placeholders matching the Avah Skin aesthetic.

const images = {
  // ─── Hero Images ──────────────────────────────────────────────────────
  hero: {
    home: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
    services: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
    about: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
    contact: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80',
  },

  // ─── Clinic / Interior Images (REPLACE LATER with actual clinic photos) ─
  clinic: {
    hero: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
    interior: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
    reception: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
    consultation: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=80',
    doctor: asset('assets/doctor.webp'),
  },

  // ─── Clinic Gallery (About page) ────────────────────────────────────────
  clinicGallery: [
    { src: asset('images/clinic_images/clinic-lounge-1.webp'), alt: 'Skin Atelier clinic lounge' },
    { src: asset('images/clinic_images/clinic-lounge-2.webp'), alt: 'Skin Atelier clinic lounge' },
    { src: asset('images/clinic_images/clinic-lounge-3.webp'), alt: 'Skin Atelier clinic seating area' },
    { src: asset('images/clinic_images/clinic-product-display.webp'), alt: 'Skin Atelier product display' },
    { src: asset('images/clinic_images/clinic-treatment-room-1.webp'), alt: 'Skin Atelier treatment room' },
    { src: asset('images/clinic_images/clinic-treatment-room-2.webp'), alt: 'Skin Atelier treatment room' },
    { src: asset('images/clinic_images/clinic-treatment-room-3.webp'), alt: 'Skin Atelier treatment room' },
  ],

  // ─── Welcome / About Section ──────────────────────────────────────────
  welcome: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80',
  about: 'assets/about-female-doctor.png',


  // ─── Three Pillars (Home page) ────────────────────────────────────────
  pillars: {
    skin: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    aesthetics: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    hair: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },

  // ─── Skin Treatment Images ────────────────────────────────────────────
  skin: {
    acne: asset('images/services/acne-scar-treatment.jpg'),
    pigmentation: asset('images/services/skin-pigmentation.png'),
    unevenTone: asset('images/services/specific-skin-concerns.jpg'),
    antiAgeing: asset('images/services/anti-ageing-treatment.jpg'),
    rosacea: asset('images/services/medical-dermatology.jpg'),
    eczema: asset('images/services/medical-dermatology.jpg'),
    psoriasis: asset('images/services/medical-dermatology.jpg'),
    vitiligo: asset('images/services/medical-dermatology.jpg'),
    fungal: asset('images/services/medical-dermatology.jpg'),
    warts: asset('images/services/other-treatments.jpg'),
    hairNail: asset('images/services/hair-loss-treatment.jpg'),
    pediatric: asset('images/services/medical-dermatology.jpg'),
  },

  // ─── Aesthetic Treatment Images ───────────────────────────────────────
  aesthetics: {
    peels: asset('images/services/chemical-peels.jpg'),
    mediFacials: asset('images/services/specific-skin-concerns.jpg'),
    hydrafacial: asset('images/services/specific-skin-concerns.jpg'),
    microneedling: asset('images/services/acne-scar-treatment.jpg'),
    prpSkin: asset('images/services/anti-ageing-treatment.jpg'),
    skinBoosters: asset('images/services/anti-ageing-treatment.jpg'),
    botox: asset('images/services/anti-ageing-treatment.jpg'),
    fillers: asset('images/services/anti-ageing-treatment.jpg'),
    laserHairReduction: asset('images/services/laser-hair-removal.jpg'),
    laserPigmentation: asset('images/services/skin-pigmentation.png'),
    laserRejuvenation: asset('images/services/anti-ageing-treatment.jpg'),
    underEye: asset('images/services/specific-skin-concerns.jpg'),
    lip: asset('images/services/other-treatments.jpg'),
  },

  // ─── Hair Treatment Images ────────────────────────────────────────────
  hair: {
    hairFall: asset('images/services/hair-loss-treatment.jpg'),
    femaleLoss: asset('images/services/hair-loss-treatment.jpg'),
    maleLoss: asset('images/services/hair-loss-treatment.jpg'),
    prpHair: asset('images/services/hair-loss-treatment.jpg'),
    gfc: asset('images/services/hair-loss-treatment.jpg'),
    mesotherapy: asset('images/services/hair-loss-treatment.jpg'),
    dandruff: asset('images/services/hair-loss-treatment.jpg'),
    alopecia: asset('images/services/hair-loss-treatment.jpg'),
    prematureGreying: asset('images/services/hair-loss-treatment.jpg'),
  },

  // ─── Services Overview Images (9 categories from Avah Skin source) ───────
  services: {
    // 1. Laser Hair Removal — downloaded from Avah Skin (Unwanted Hair Treatment)
    laserHairRemoval: asset('images/services/laser-hair-removal.jpg'),
    // 2. Acne & Scar Treatment — downloaded from Avah Skin
    acneScar: asset('images/services/acne-scar-treatment.jpg'),
    // 3. Specific Skin Concerns — downloaded from Avah Skin
    specificSkin: asset('images/services/specific-skin-concerns.jpg'),
    // 4. Hair Loss Treatment — downloaded from Avah Skin (Hair Regrowth Treatment)
    hairLoss: asset('images/services/hair-loss-treatment.jpg'),
    // 5. Anti Ageing Treatment — downloaded from Avah Skin
    antiAgeing: asset('images/services/anti-ageing-treatment.jpg'),
    // 6. Medical Dermatology — downloaded from Avah Skin
    medical: asset('images/services/medical-dermatology.jpg'),
    // 7. Chemical Peels — placeholder until provided by user (missing on Avah Skin services page)
    chemicalPeels: asset('images/services/chemical-peels.jpg'),
    // 8. Skin Pigmentation — downloaded from Avah Skin
    skinPigmentation: asset('images/services/skin-pigmentation.png'),
    // 9. Other Treatments — downloaded from Avah Skin
    otherTreatments: asset('images/services/other-treatments.jpg'),
  },
};

export default images;
