// =============================================================================
// CENTRALIZED IMAGE MANAGEMENT
// =============================================================================
// When the client provides final assets, update ONLY the URLs in this file.
// All components reference images through this configuration.
// =============================================================================

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
    doctor: '/assets/doctor.webp',
  },

  // ─── Welcome / About Section ──────────────────────────────────────────
  welcome: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80',
  about: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',

  // ─── Three Pillars (Home page) ────────────────────────────────────────
  pillars: {
    skin: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    aesthetics: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    hair: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },

  // ─── Skin Treatment Images ────────────────────────────────────────────
  skin: {
    acne: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    pigmentation: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80',
    unevenTone: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
    antiAgeing: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    rosacea: '/assets/treatments/rosacea.jpg',
    eczema: '/assets/treatments/eczema.jpg',
    psoriasis: '/assets/treatments/psoriasis.jpg',
    vitiligo: '/assets/treatments/vitiligo.jpg',
    fungal: '/assets/treatments/fungal.jpg',
    warts: '/assets/treatments/warts.jpg',
    hairNail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    pediatric: '/assets/treatments/pediatric.jpg',
  },

  // ─── Aesthetic Treatment Images ───────────────────────────────────────
  aesthetics: {
    peels: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    mediFacials: '/assets/treatments/medi-facials.jpg',
    hydrafacial: '/assets/treatments/hydrafacial.jpg',
    microneedling: '/assets/treatments/microneedling.jpg',
    prpSkin: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    skinBoosters: '/assets/treatments/skin-boosters.jpg',
    botox: '/assets/treatments/botox.jpg',
    fillers: '/assets/treatments/fillers.jpg',
    laserHairReduction: '/assets/treatments/laser-hair-reduction.jpg',
    laserPigmentation: '/assets/treatments/laser-pigmentation.jpg',
    laserRejuvenation: '/assets/treatments/laser-rejuvenation.jpg',
    underEye: '/assets/treatments/under-eye.jpg',
    lip: '/assets/treatments/lip-enhancement.jpg',
  },

  // ─── Hair Treatment Images ────────────────────────────────────────────
  hair: {
    hairFall: '/assets/treatments/hair-fall.jpg',
    femaleLoss: '/assets/treatments/female-hair-loss.jpg',
    maleLoss: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    prpHair: '/assets/treatments/prp-hair.jpg',
    gfc: '/assets/treatments/gfc.jpg',
    mesotherapy: '/assets/treatments/mesotherapy.jpg',
    dandruff: '/assets/treatments/dandruff-scalp.jpg',
    alopecia: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    prematureGreying: '/assets/treatments/premature-greying.jpg',
  },

  // ─── Services Overview Images (9 categories from reference) ──────────────
  services: {
    // 1. Laser Hair Removal — existing asset
    laserHairRemoval: '/assets/treatments/laser-hair-reduction.jpg',
    // 2. Acne & Scar Treatment — skin/acne Unsplash
    acneScar: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1000&q=80',
    // 3. Specific Skin Concerns — bright skin consultation
    specificSkin: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80',
    // 4. Hair Loss Treatment — existing asset
    hairLoss: '/assets/treatments/hair-fall.jpg',
    // 5. Anti Ageing — existing botox/fillers asset
    antiAgeing: '/assets/treatments/botox.jpg',
    // 6. Medical Dermatology — existing psoriasis asset
    medical: '/assets/treatments/psoriasis.jpg',
    // 7. Chemical Peels — existing medi-facials (closest match)
    chemicalPeels: '/assets/treatments/medi-facials.jpg',
    // 8. Skin Pigmentation — existing laser pigmentation asset
    skinPigmentation: '/assets/treatments/laser-pigmentation.jpg',
    // 9. Other Treatments — Unsplash clinic treatment
    otherTreatments: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1000&q=80',
  },
};

export default images;
