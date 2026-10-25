import reactIcon from "@/assets/React.png";
import reactNativeIcon from "@/assets/science.png";
import javascriptIcon from "@/assets/JavaScript.png";
import typescriptIcon from "@/assets/TypeScript.png";
import reduxIcon from "@/assets/Redux.png";
import gitIcon from "@/assets/Git.png";
import htmlIcon from "@/assets/HTML5.png";
import cssIcon from "@/assets/CSS3.png";
import type { Skill } from "@/types/portfolio";

export const skills: Skill[] = [
  { name: "React", icon: reactIcon },
  { name: "React Native", icon: reactNativeIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Git", icon: gitIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
];

export const additionalSkills: string[] = [
  "Responsive Design",
  "Performance Optimization",
  "Push Notifications",
  "Google Maps",
  "REST APIs",
  "Firebase",
  "Testing",
];
