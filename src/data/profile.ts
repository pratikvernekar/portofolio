import { Github, Instagram, Linkedin } from "lucide-react";
import profileImage from "@/assets/optimized/profile.webp";
import type { Highlight, NavLink, SocialLink } from "@/types/portfolio";

export const profile = {
  name: "Pratik Vernekar",
  initials: "PV",
  role: "Frontend Developer",
  specialty: "React & React Native",
  intro:
    "I build clean, fast and user-friendly web and mobile experiences — from pixel-perfect interfaces to production apps shipped on the App Store and Google Play.",
  about: [
    "I'm a frontend developer specializing in React and React Native, with a strong focus on building scalable and high-performance web and mobile applications.",
    "With hands-on experience in UI development, API integration and optimizing app performance, I create intuitive and visually appealing interfaces that enhance user experiences.",
    "Beyond coding, I enjoy exploring new design trends and experimenting with emerging technologies to stay ahead in the ever-evolving world of development.",
  ],
  availability:
    "I'm currently available for freelance projects, collaborations or full-time positions. Feel free to reach out if you'd like to work together or just want to say hello.",
  email: "vernekarpratik26.pv@gmail.com",
  phone: "+91 95353 30160",
  phoneHref: "tel:+919535330160",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1QuIVgRCOdJnUJmhDgE2RadACxlKKYQek",
  image: profileImage,
};

export const highlights: Highlight[] = [
  { value: "2", label: "Apps live in stores" },
  { value: "iOS + Android", label: "Cross-platform delivery" },
  { value: "Web + Mobile", label: "React ecosystem" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/pratikvernekar", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pratik-vernekar-7b036a170/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pratik._.vernekar/",
    icon: Instagram,
  },
];
