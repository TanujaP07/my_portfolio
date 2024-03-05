import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Angular from "../public/assets/skills/angular.png";
import Aws from "../public/assets/skills/aws.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github.png";
import Node from "../public/assets/skills/node.png";
import NextJS from "../public/assets/skills/nextjs.png";
import C from "../public/assets/skills/c.png";
import Cp from "../public/assets/skills/c++.png";
import Cypress from "../public/assets/skills/cypress.png";
import Jest from "../public/assets/skills/jest.png";
import Java from "../public/assets/skills/java.png";
import Python from "../public/assets/skills/python.png";
import Linux from "../public/assets/skills/linux.png";
import Reacti from "../public/assets/skills/react.png";
import Storybook from "../public/assets/skills/storybook.png";
import Tableau from "../public/assets/skills/tableau.png";
import Git from "../public/assets/skills/git.png";
import Js from "../public/assets/skills/js.png";
// import SkillImage from "../lib/data";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-purple-800">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center"> */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-3">
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex items-center justify-center">
              <div className="m-auto">
                <Image src={Html} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                {/* <div className="mt-2 text-center"> */}
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Python} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={C} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Cp} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C++</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Java} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Angular} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next Js</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Aws} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node js</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Git} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Cypress} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Cypress</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Jest} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Jest</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Linux} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Linux</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Reacti} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Storybook} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Storybook</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tableau} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tableau</h3>
              </div>
            </div>
          </div>
          <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Js} alt="/" width="40" height="40" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

// ("use client");

// import React from "react";
// import SectionHeading from "@/styles/section-heading";
// import { skillsData } from "../lib/data";
// // import { useSectionInView } from "@/lib/hooks";
// import { motion } from "framer-motion";

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100
//   },
//   animate: index => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index
//     }
//   })
// }

// export default function Skills() {
//   //   const { ref } = useSectionInView("Skills")

//   return (
//     <section
//       id="skills"
//       //   ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//     >
//       <SectionHeading>My Skills</SectionHeading>
//       <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
//         {skillsData.map((icon, skill, index) => (
//           <motion.li
//             className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
//             key={index}
//             // variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//               once: true,
//             }}
//             custom={index}
//           >
//             {icon}
//             {skill}
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// }
// export default Skills;

//works but needs changes
// const SkillGrid = () => {
//   const skillImage = [
//     { html: require("../public/assets/skills/html.png") },
//     { css: require("../public/assets/skills/css.png") },
//     { javascript: require("../public/assets/skills/js.png") },
//     // Add more skills as needed
//   ];

//   const skills = [
//     { skillName: "html" },
//     { skillName: "css" },
//     { skillName: "javascript" },
//     // Add more skills as needed
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4 justify-center items-center">
//       {skillImage.map((skillImage, index) => (
//         <div key={index} className="m-auto">
//           {/* Use the SkillImage component with dynamic props */}
//           <SkillImage
//             // skillName={skill.skillName}
//             skillImage={skillImage.skillImage}
//             width={64}
//             height={64}
//           />
//         </div>
//       ))}
//       {skills.map((skill, index) => (
//         <div key={index} className="flex flex-col items-center justify-center">
//           <h3>{skill.skillName.toUpperCase()}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SkillGrid;
