export interface PhotoDetails {
  id: string;
  title: string;
  desc: string;
  img: string;
  aspect: string;
  tags: string[];
  metadata: {
    camera_body: string;
    lens_system: string;
    aperture: string;
    shutter_speed: string;
    iso: string;
    focal_length: string;
    location: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

// currently used tags:
// "mountains", "snow", "glacier", "ocean", "coast", "forest", "desert"

export const photoDetails: PhotoDetails[] = [
  {
    id: "high-sierra-1",
    title: "The High Sierras",
    desc: "Elevated perspectives from the granite heart.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsRV0JSEUJXCP2EGDNNIv0TJ9qXZBpJOKI6EU53t3wpQXprlJsHgnhBtSm601U3_CGlGWjraiBzou0_gePe_mf6QbqZnATWzT3E78hFvZ5pzM8MDWYnGWVhfG6Ytj7FbuQTClYqls_1ygjUdaRBnMEHaNFoWwIvtkOGKrKfWkyUkJcGaGHHVTdihH9FqotNylKWnzl-_W9LFUOvaNpfD1fOCr2EvF_wRC1AIa0XCgYSi4gGzAeuHRN9CwGMuCRn8mbgxhWzMWYgEM",
    aspect: "",
    tags: ["mountains", "snow", "glacier"],
    metadata: {
      camera_body: "Sony A7R IV",
      lens_system: "FE 24-70mm f/2.8 GM",
      aperture: "f/11",
      shutter_speed: "1/125s",
      iso: "ISO 100",
      focal_length: "35mm",
      location: "Central Park",
      coordinates: {
        lat: 40.785091,
        lng: -73.968285,
      },
    },
  },
  {
    id: "whispering-pines-1",
    title: "Whispering Pines",
    desc: "Where silence speaks through the leaves.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzuK_8MEVrIUZMwiDzLFny0Zr2bnTwBVBA36liTxtJZu503PwX6QVpl_I6DGhwmH50YqNERxM_OIbPlyD808sGMPEH8_i-q7cl_Al1PlsPdqvyD2tSoQmiTEIMw3_iD6yKYch0NYyAV2yVOYNpJwaLpHlX9fO8eMsTaDbs9804LbIzegTuueIv_JpQrCrj5z24VswCkuTp72aj1mLvjDsGqhQZr6jUxKCaaA_hhRE4MquDjqhAYEqwgLzIQcmwrw8nX6OM98Vuv58",
    aspect: "",
    tags: ["forest"],
    metadata: {
      camera_body: "Sony A7R IV",
      lens_system: "FE 24-70mm f/2.8 GM",
      aperture: "f/11",
      shutter_speed: "1/125s",
      iso: "ISO 100",
      focal_length: "35mm",
      location: "Central Park",
      coordinates: {
        lat: 40.785091,
        lng: -73.968285,
      },
    },
  },
  {
    id: "azure-shores-1",
    title: "Azure Shores",
    desc: "Endless horizons where water meets stone.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZpD1HQaxSnOzi4IYyu6bbVbmq6_GPQT73pGgJb4JgV98rm9jSSdSER28fV4niuR6JD601tt_fF2SWmLv6MC99RG0mpqijqNCWRHYnYIV7zgRLP18DTBoeWnGmnTN5Lrm6VtUiF3Ge9-q9PHeP59nGT4cZwtv-UuRDYoOkYB3qq0YUEf5IU_-0_3izYXvwHj00U_AcHCQJUoXJf4c6bVsaj_HCr1DtI1gqaa-d4ZAg2gU_ZVVDg6GtO_XYDvEsxSU9Uyl23Y0Bg4",
    aspect: "aspect-[3/4]",
    tags: ["ocean", "coast"],
    metadata: {
      camera_body: "Sony A7R IV",
      lens_system: "FE 24-70mm f/2.8 GM",
      aperture: "f/11",
      shutter_speed: "1/125s",
      iso: "ISO 100",
      focal_length: "35mm",
      location: "Central Park",
      coordinates: {
        lat: 40.785091,
        lng: -73.968285,
      },
    },
  },
  {
    id: "golden-sands-1",
    title: "Golden Sands",
    desc: "Rhythmic ripples across the Saharan expanse.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDPsZ15bw_LFj7wsFJlY3RT1n0XEcA_P-TvMLaws7ZsQhJIGAJNtdRmMg6uIYwQog6B2FJre2tfD318GaeivPEKI7jeCpscIA6ps5N1bdgDvcwUtGWPPeu83NT-MPji27f3j38FmH-9zuJuAf0ljCRbTOWNYE5hAqS-P-xE7Q0iysEfl-AclTc9VcKLcnPAbEnKY3H4PRB47KvMcGIvDvMRyYbdQnhhdr_bFIzH2xO4tg1x9_GZYUn87LJW7It7Shfk-DrgxaYiA",
    aspect: "aspect-[1/1]",
    tags: ["desert"],
    metadata: {
      camera_body: "Sony A7R IV",
      lens_system: "FE 24-70mm f/2.8 GM",
      aperture: "f/11",
      shutter_speed: "1/125s",
      iso: "ISO 100",
      focal_length: "35mm",
      location: "Central Park",
      coordinates: {
        lat: 40.785091,
        lng: -73.968285,
      },
    },
  },
  {
    id: "crystal-echoes-1",
    title: "Crystal Echoes",
    desc: "Purity preserved in frozen timelessness.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8oz9yKpkVnO9WvC8xxErKvpgpddR3o-ZwjaYYbcp4rS3dMwe_-HhZllubG0522VYftANaJBYlLDHni5Vj6yJlhDiVUH22yM4lRSfa5Br1RSnznB6wV-_kUUXX1SijvEjMLhoxlzLLmt18eCoM_IHplZtVNHyQ2ZtoEgtS9D70Ifl3rLnK3U0VuH2Bx4OX4Eb7C_naMggVfB5QXJSaALKgXpNQncYes2mX7Qi7-I5KzxzHroQ56Qm0ta3VB5RMfEiqfR047P8rAJA",
    aspect: "aspect-[4/5]",
    tags: ["mountains", "snow", "glacier", "ocean"],
    metadata: {
      camera_body: "Sony A7R IV",
      lens_system: "FE 24-70mm f/2.8 GM",
      aperture: "f/11",
      shutter_speed: "1/125s",
      iso: "ISO 100",
      focal_length: "35mm",
      location: "Central Park",
      coordinates: {
        lat: 40.785091,
        lng: -73.968285,
      },
    },
  },
  {
    id: "amber-canopies-1",
    title: "Amber Canopies",
    desc: "The forest's final bloom before slumber.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAtuYzpHFqvUNfKwlabDZuLJht8QftWvdLVgCdDVUvKB703cEWedXhsre7C_dpzDT8pF5v8L0ZJbHAuDYo6J8Y9cpIbvzV6bYhOtgPDSiQ7QIRKLTJpwZrU8QzqCfx4ZfV-Xc1PpC2A4slncRbxKpezaxyPm8jagf-4ZxOBS9aQmLFxHHEGrhGp8KogGpw_FpgbBsXNutgeZFff84xyO1Ga9l_7pTpPJYLv1YX1CQ9vLESPKW7Cd7b2ZEvyAXl38uIC71Fo2uqTOE",
    aspect: "aspect-[16/9]",
    tags: ["forest"],
    metadata: {
      camera_body: "Sony A7R IV",
      lens_system: "FE 24-70mm f/2.8 GM",
      aperture: "f/11",
      shutter_speed: "1/125s",
      iso: "ISO 100",
      focal_length: "35mm",
      location: "Central Park",
      coordinates: {
        lat: 40.785091,
        lng: -73.968285,
      },
    },
  },
  {
    id: "misty-ridges-1",
    title: "Misty Ridges",
    desc: "Hidden trails among the floating clouds.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcvpMc9-KU_DgtBMJBvzoK0gnhJMxKopjP0qV631HGLkgG6iSz_t4VMSqwXvbAdo7VORAIxkM2O4q5w69vZqikEOQp5Csd2wXkAtyoBw6p_caN8eDEsxxpXRwKHn2rk1HMKfdGx-_8PmJQKWIOZJO7_DeuDmgJR7GelxoLiwQw-oQfVIhj4hGkNVkPgjnV4nxeZYCshBS7h-bYfvSXXoX99uJS6rHgonrEsU8FcsdvHduVSo7jsTuzKDOuU1qPZe9z-SYznev-RZY",
    aspect: "aspect-[2/3]",
    tags: ["mountains", "forest"],
    metadata: {
      camera_body: "Sony A7R IV",
      lens_system: "FE 24-70mm f/2.8 GM",
      aperture: "f/11",
      shutter_speed: "1/125s",
      iso: "ISO 100",
      focal_length: "35mm",
      location: "Central Park",
      coordinates: {
        lat: 40.785091,
        lng: -73.968285,
      },
    },
  },
  {
    id: "still-waters-1",
    title: "Still Waters",
    desc: "Reflection of the soul on a quiet morning.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrPRLh_IOmqMXqniUjgrz95PhVCDngO7eiL_eiA71EAgHVMIwxER9DZAatamRQMDxjV0C4Yoer-VPOEOn6DJryzFH4wGH42_CxQzUbA3ne6xpuFHvoviw04DrMKAIKNrVJGG8X3c-sssthTaVmzaF1eH8l2sVyJ8FSsYTbvmMZCTvJrmR1rdMbjhqTRtM8E2Glj2NUXQcrNj5Lh6OHbyctucjO6D5KMZRZpn1i50Jxxu5EEMCrWNHEsEfpkM681DKjxejmhsYV8YI",
    aspect: "aspect-[5/4]",
    tags: ["mountains", "ocean"],
    metadata: {
      camera_body: "Sony A7R IV",
      lens_system: "FE 24-70mm f/2.8 GM",
      aperture: "f/11",
      shutter_speed: "1/125s",
      iso: "ISO 100",
      focal_length: "35mm",
      location: "Central Park",
      coordinates: {
        lat: 40.785091,
        lng: -73.968285,
      },
    },
  },
];
