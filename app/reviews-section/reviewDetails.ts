import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";
import pre from "../../public/pre.jpg"

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Aarav Mehta",
    role: "Founder",
    company: "TechNova Solutions",
    profileImg: pre,
    testimonial:
      "Working with you was an absolute delight! You took our website from an outdated design to a sleek, modern platform that resonates with our target audience. Your attention to detail and creative problem-solving set you apart!",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "Innovate Digital",
    profileImg: pre,
    testimonial:
      "You have an incredible knack for turning ideas into reality. The landing page you designed for our latest campaign was stunning, fast, and highly effective. It helped us achieve a 40% increase in leads within the first month!",
  },
  {
    name: "Rohan Desai",
    role: "CTO",
    company: "StartupHub India",
    profileImg: pre,
    testimonial:
      "You brought so much value to our project with your frontend expertise and design skills. The dashboard you built for our platform is intuitive, fast, and visually appealing!",
  },
];

