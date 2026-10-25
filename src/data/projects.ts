import type { Project } from "@/types/portfolio";

const loadImages = (modules: Record<string, string>, order: string[]) =>
  order.map((name) => {
    const match = Object.entries(modules).find(([filePath]) => {
      const fileName = decodeURIComponent(filePath.split("/").pop() ?? "");
      return fileName.split("?")[0] === name;
    });
    if (!match) throw new Error(`Missing project image: ${name}`);
    return match[1];
  });

// Relative globs: Vite does not reliably expand the "@" alias inside import.meta.glob.
const mdImages = import.meta.glob<string>("../assets/mdImages/*.png", {
  eager: true,
  import: "default",
});

const apImages = import.meta.glob<string>("../assets/apImages/*.png", {
  eager: true,
  import: "default",
});

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
    images: loadImages(
      mdImages,
      ["2", "1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"].map(
        (n) => `${n}.png`
      )
    ),
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
    images: loadImages(
      apImages,
      ["1", "9", "4", "8", "3", "2", "7", "5", "6"].map((n) => `ap (${n}).png`)
    ),
    type: "app",
    links: {
      appStore: "https://apps.apple.com/in/app/ayurprana/id6469480400",
      playStore:
        "https://play.google.com/store/apps/details?id=com.liveayurprana.prod&hl=en_IN",
    },
    accent: ["#b86a12", "#e9a23b"],
  },
];
