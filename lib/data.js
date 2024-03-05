import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Graduate Teaching Assistant",
    location: "Denton, TX",
    description:
      "Assisted professors in Software Engineering, Fundamentals of Databases and Human Computer Interfaces. Was in charge of projects and grading.",
    icon: React.createElement(FaUniversity),
    date: "Jan '21 - Decc '22",
  },
  {
    title: "Got my Masters Degree",
    location: "Denton, TX",
    description:
      "I did my Masters in Computer Science and graduated in December 2022. I immediately found a job as a Full-Stack Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Addison, TX",
    description:
      "I worked as a software developer. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb '23 - Sept '23",
  },
  {
    title: "Full-Stack Developer",
    location: "Greenville, SC",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Angular, Next.js, TypeScript, Tailwind and Prisma. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
];

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     // imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     // imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     // imageUrl: wordanalyticsImg,
//   },
// ];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];

// export const SkillImage = {
//   git: require("../public/assets/skills/git.png"),
//   js: require("../public/assets/skills/js.png"),
//   angular: require("../public/assets/skills/angular.png"),
// };
// const SkillImage = ({ skillName, skillImage, width = 64, height = 64 }) => {
//   // Check if skillImage is an object and if skillName exists in it
//   if (typeof skillImage === "object" && skillName in skillImage) {
//     const imageSrc = skillImage[skillName];
//     return <img src={imageSrc} alt={skillName} width={width} height={height} />;
//   } else {
//     // Handle the case where skillImage is not a valid object
//     return (
//       <img
//         src={require("../public/assets/skills/html.png")}
//         alt={skillName}
//         width={width}
//         height={height}
//       />
//     );
//   }
// };

// export default SkillImage;
