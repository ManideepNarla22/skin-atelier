// =============================================================================
// SERVICES DATA — Source of truth for all service/treatment content
// =============================================================================

import images from './images';

// ─── Skin Concerns & Conditions ─────────────────────────────────────────────
export const skinServices = [
  {
    title: 'Acne & Acne Scar Management',
    slug: 'acne-acne-scar-management',
    description: 'Comprehensive care for active acne and the scars it leaves behind, combining topical treatment, oral medication where needed, and in-clinic procedures for scarring.',
    image: images.skin.acne,
  },
  {
    title: 'Pigmentation & Melasma Treatment',
    slug: 'pigmentation-melasma-treatment',
    description: 'Targeted treatment for dark spots, patches and melasma, using topical regimens, peels and laser-based options depending on the type and depth of pigmentation.',
    image: images.skin.pigmentation,
  },
  {
    title: 'Uneven Skin Tone & Tanning',
    slug: 'uneven-skin-tone-tanning',
    description: 'Treatments to even out tone and reverse sun-induced tanning, restoring a brighter, more uniform complexion.',
    image: images.skin.unevenTone,
  },
  {
    title: 'Anti-Ageing & Skin Rejuvenation',
    slug: 'anti-ageing-skin-rejuvenation',
    description: 'A combination of medical and aesthetic treatments to address fine lines, loss of firmness and dullness, tailored to your skin\'s stage of ageing.',
    image: images.skin.antiAgeing,
  },
  {
    title: 'Rosacea',
    slug: 'rosacea',
    description: 'Management of persistent facial redness, flushing and sensitivity associated with rosacea, with a plan to reduce flare-ups and triggers.',
    image: images.skin.rosacea,
  },
  {
    title: 'Eczema & Dermatitis Management',
    slug: 'eczema-dermatitis-management',
    description: 'Diagnosis and long-term management of eczema and dermatitis, focused on calming flare-ups and strengthening the skin barrier.',
    image: images.skin.eczema,
  },
  {
    title: 'Psoriasis Management',
    slug: 'psoriasis-management',
    description: 'Ongoing medical management of psoriasis to reduce plaques, inflammation and flare frequency.',
    image: images.skin.psoriasis,
  },
  {
    title: 'Vitiligo Management',
    slug: 'vitiligo-management',
    description: 'Evaluation and treatment planning for vitiligo, including medical and light-based options to help restore skin colour where possible.',
    image: images.skin.vitiligo,
  },
  {
    title: 'Fungal & Bacterial Skin Infections',
    slug: 'fungal-bacterial-skin-infections',
    description: 'Prompt diagnosis and treatment of fungal and bacterial skin infections with appropriate topical or oral therapy.',
    image: images.skin.fungal,
  },
  {
    title: 'Warts, Moles & Skin Growths',
    slug: 'warts-moles-skin-growths',
    description: 'Safe evaluation and removal of warts, moles and other skin growths, with attention to any that need closer monitoring.',
    image: images.skin.warts,
  },
  {
    title: 'Hair & Nail Disorders',
    slug: 'hair-nail-disorders',
    description: 'Diagnosis and treatment of dermatological conditions affecting the hair and nails, beyond routine cosmetic hair concerns.',
    image: images.skin.hairNail,
  },
  {
    title: 'Pediatric Dermatology',
    slug: 'pediatric-dermatology',
    description: 'Gentle, age-appropriate skin care and treatment for children\'s dermatological concerns.',
    image: images.skin.pediatric,
  },
];

// ─── Aesthetic Treatments ───────────────────────────────────────────────────
export const aestheticServices = [
  {
    title: 'Chemical Peels',
    slug: 'chemical-peels',
    description: 'Controlled exfoliation to reveal smoother, brighter skin and improve tone, texture and mild pigmentation.',
    image: images.aesthetics.peels,
  },
  {
    title: 'Medi-Facials',
    slug: 'medi-facials',
    description: 'Medical-grade facials that go deeper than a salon facial, targeting specific skin concerns while hydrating and rejuvenating.',
    image: images.aesthetics.mediFacials,
  },
  {
    title: 'Hydrafacial',
    slug: 'hydrafacial',
    description: 'A multi-step treatment that cleanses, exfoliates and hydrates in one session for an immediate glow.',
    image: images.aesthetics.hydrafacial,
  },
  {
    title: 'Microneedling',
    slug: 'microneedling',
    description: 'Fine-needle treatment that stimulates the skin\'s own collagen production to improve texture, scarring and firmness.',
    image: images.aesthetics.microneedling,
  },
  {
    title: 'PRP for Skin',
    slug: 'prp-for-skin',
    description: 'Platelet-rich plasma derived from your own blood, used to stimulate skin repair and rejuvenation.',
    image: images.aesthetics.prpSkin,
  },
  {
    title: 'Skin Boosters',
    slug: 'skin-boosters',
    description: 'Micro-injections of hydrating actives that improve skin quality, hydration and glow from within.',
    image: images.aesthetics.skinBoosters,
  },
  {
    title: 'Botox',
    slug: 'botox',
    description: 'Injections that relax targeted facial muscles to soften the appearance of fine lines and wrinkles.',
    image: images.aesthetics.botox,
  },
  {
    title: 'Fillers',
    slug: 'fillers',
    description: 'Dermal fillers used to restore volume, define contours and smooth deeper lines.',
    image: images.aesthetics.fillers,
  },
  {
    title: 'Laser Hair Reduction',
    slug: 'laser-hair-reduction',
    description: 'Long-term reduction of unwanted hair using laser technology, suitable for most areas of the face and body.',
    image: images.aesthetics.laserHairReduction,
  },
  {
    title: 'Laser Pigmentation Treatments',
    slug: 'laser-pigmentation-treatments',
    description: 'Laser-based treatment for stubborn pigmentation and dark spots that don\'t respond to topical treatment alone.',
    image: images.aesthetics.laserPigmentation,
  },
  {
    title: 'Laser Skin Rejuvenation',
    slug: 'laser-skin-rejuvenation',
    description: 'Laser treatments that improve overall skin texture, tone and radiance.',
    image: images.aesthetics.laserRejuvenation,
  },
  {
    title: 'Under-Eye Rejuvenation',
    slug: 'under-eye-rejuvenation',
    description: 'Targeted treatment for dark circles, hollowing and fine lines around the delicate under-eye area.',
    image: images.aesthetics.underEye,
  },
  {
    title: 'Lip Enhancement & Rejuvenation',
    slug: 'lip-enhancement-rejuvenation',
    description: 'Subtle enhancement and hydration treatments to improve lip volume, shape and texture.',
    image: images.aesthetics.lip,
  },
];

// ─── Hair Treatments ────────────────────────────────────────────────────────
export const hairServices = [
  {
    title: 'Hair Fall Evaluation & Treatment',
    slug: 'hair-fall-evaluation-treatment',
    description: 'A thorough assessment to identify the cause of hair fall, followed by a treatment plan suited to your specific case.',
    image: images.hair.hairFall,
  },
  {
    title: 'Female Pattern Hair Loss',
    slug: 'female-pattern-hair-loss',
    description: 'Diagnosis and long-term management of pattern hair loss in women, combining medical and in-clinic treatments.',
    image: images.hair.femaleLoss,
  },
  {
    title: 'Male Pattern Hair Loss',
    slug: 'male-pattern-hair-loss',
    description: 'Evidence-based treatment options for male pattern baldness, tailored to the stage and extent of hair loss.',
    image: images.hair.maleLoss,
  },
  {
    title: 'PRP for Hair',
    slug: 'prp-for-hair',
    description: 'Platelet-rich plasma injected into the scalp to stimulate hair follicles and support regrowth.',
    image: images.hair.prpHair,
  },
  {
    title: 'GFC / Advanced Hair Regenerative Treatments',
    slug: 'gfc-advanced-hair-regenerative-treatments',
    description: 'Growth Factor Concentrate and other advanced regenerative treatments to support hair density and scalp health.',
    image: images.hair.gfc,
  },
  {
    title: 'Mesotherapy',
    slug: 'mesotherapy',
    description: 'Scalp injections of hair-boosting nutrients to improve blood flow and stimulate regrowth.',
    image: images.hair.mesotherapy,
  },
  {
    title: 'Dandruff & Scalp Disorders',
    slug: 'dandruff-scalp-disorders',
    description: 'Diagnosis and treatment of dandruff and other underlying scalp conditions affecting hair health.',
    image: images.hair.dandruff,
  },
  {
    title: 'Alopecia Management',
    slug: 'alopecia-management',
    description: 'Assessment and ongoing management of alopecia, with treatment plans suited to the type and severity.',
    image: images.hair.alopecia,
  },
  {
    title: 'Premature Greying Evaluation',
    slug: 'premature-greying-evaluation',
    description: 'Evaluation of premature greying to identify contributing factors and discuss realistic management options.',
    image: images.hair.prematureGreying,
  },
];

// ─── Services Navigation Data ───────────────────────────────────────────────
export const servicesNavigation = {
  skin: {
    label: 'Skin',
    path: '/services/skin',
    items: skinServices.map(s => ({ title: s.title, slug: s.slug })),
  },
  aesthetics: {
    label: 'Aesthetics',
    path: '/services/aesthetics',
    items: aestheticServices.map(s => ({ title: s.title, slug: s.slug })),
  },
  hair: {
    label: 'Hair',
    path: '/services/hair',
    items: hairServices.map(s => ({ title: s.title, slug: s.slug })),
  },
};

// ─── FAQ Data ───────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: 'Who is the best dermatologist in Nizampet, Hyderabad?',
    answer: 'Skin Atelier is led by Dr. Saritha Thotakura, MBBS, MD, who provides personalised, evidence-based dermatology and aesthetic care for skin, hair, and related concerns.',
  },
  {
    question: 'What conditions does Skin Atelier treat?',
    answer: 'We treat a wide range of skin concerns (acne, pigmentation, eczema, psoriasis, vitiligo and more), offer aesthetic treatments (peels, facials, injectables, laser), and manage hair and scalp conditions such as hair fall and dandruff.',
  },
  {
    question: 'Do I need an appointment?',
    answer: 'Yes, we recommend booking a consultation in advance so Dr. Saritha can give your concern proper time and attention.',
  },
  {
    question: 'What are your clinic hours?',
    answer: 'Skin Atelier is open daily from 9am to 8pm, and closed on Sundays.',
  },
];

// ─── Business Information ───────────────────────────────────────────────────
export const businessInfo = {
  name: 'Skin Atelier',
  doctor: 'Dr. Saritha Thotakura',
  doctorFull: 'Dr. Saritha Thotakura, MBBS, MD',
  address: '4th Floor, 1-2-39/10, above Aakruti, Nizampet Main Road, Hyderabad, 20 meters from JNTU Metro Station',
  phone: '+91 6303050820',
  phoneFormatted: '+91 6303050820',
  phoneTel: 'tel:+916303050820',
  email: 'skinatelier66@gmail.com',
  hours: '9am – 8pm, daily',
  closed: 'Sunday: Closed',
  instagram: '@theskinatelier_official',
  instagramUrl: 'https://www.instagram.com/theskinatelier_official/',
  facebook: 'https://www.facebook.com/SkinAtelierHyd/',
  googleMaps: 'https://maps.app.goo.gl/4PsiUq7wknMZXEqw7',
  whatsappNumber: '916303050820',
  whatsappUrl: 'https://wa.me/916303050820?text=Hello%20Skin%20Atelier%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Saritha%20Thotakura.',
  whatsappMessage: 'Hello Skin Atelier, I would like to book a consultation with Dr. Saritha Thotakura.',
};
