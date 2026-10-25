import type { Project } from "@/types/portfolio";
import md1 from "@/assets/optimized/md-1.webp";
import md2 from "@/assets/optimized/md-2.webp";
import md3 from "@/assets/optimized/md-3.webp";
import md4 from "@/assets/optimized/md-4.webp";
import md5 from "@/assets/optimized/md-5.webp";
import ap1 from "@/assets/optimized/ap-1.webp";
import ap2 from "@/assets/optimized/ap-2.webp";
import ap3 from "@/assets/optimized/ap-3.webp";
import ap4 from "@/assets/optimized/ap-4.webp";
import ap5 from "@/assets/optimized/ap-5.webp";

export const projects: Project[] = [
  {
    id: 1,
    title: "MDHealthTrak",
    tagline: "Health management for elderly care",
    description:
      "A health management app that simplifies elderly care. Users track symptoms, schedule appointments, log medications and monitor nutrition — with real-time updates and reminders that keep families and healthcare providers in sync.",
    tags: [
      "React Native",
      "JavaScript",
      "Redux",
      "Firebase",
      "Google Maps",
      "OneSignal",
      "Geolocation",
    ],
    images: [md1, md2, md3, md4, md5],
    type: "app",
    links: {
      appStore: "https://apps.apple.com/in/app/mdhealthtrak/id6743380687",
      playStore:
        "https://play.google.com/store/apps/details?id=com.mdht&hl=en_IN",
    },
    accent: ["#08578c", "#1187d5"],
  },
  {
    id: 2,
    title: "AyurPrana+",
    tagline: "Wellness streaming platform",
    description:
      "A streaming platform for inspirational content on Ayurveda, Yoga and Herbalism. It features documentaries, films and wellness practices covering mindfulness, breathwork and traditional healing remedies — available on iOS and Android.",
    tags: ["React Native", "TypeScript", "Redux", "Firebase", "Video Player"],
    images: [ap1, ap2, ap3, ap4, ap5],
    type: "app",
    links: {
      appStore: "https://apps.apple.com/in/app/ayurprana/id6469480400",
      playStore:
        "https://play.google.com/store/apps/details?id=com.liveayurprana.prod&hl=en_IN",
    },
    accent: ["#b86a12", "#e9a23b"],
  },
];
