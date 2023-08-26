import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Tanuja Pyneni | Resume</title>
        <meta
          name="description"
          content="I’m a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#b3a5c1] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Tanuja Pyneni</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/tanuja-pyneni-121373169/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/TanujaP07"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
              <a
                className="button"
                href="../assets/pdfs/TP_Resume.pdf"
                download="Tanuja-Pyneni_Reume.pdf"
                title="Download"
              >
                <FaDownload size={20} style={{ marginRight: "1rem" }} />
              </a>
          </div>
        </div>
        {/*<div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
  </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
  </p>*/}

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Programming Languages</span>
            <span className="px-2">|</span>Python
            <span className="px-2">|</span> Java
            <span className="px-2">|</span>C<span className="px-2">|</span>C++
            <span className="px-2">|</span>JavaScript
          </p>
          <p className="py-2">
            <span className="font-bold">Web and Database Technologies</span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span> CSS
            <span className="px-2">|</span>TailwindCSS
            <span className="px-2">|</span>Node.js
            <span className="px-2">|</span>React.js
            <span className="px-2">|</span>Angular
            <span className="px-2">|</span>Next.js
            <span className="px-2">|</span>MySQL
          </p>
          <p className="py-2">
            <span className="font-bold">IDEs and Testing Frameworks</span>
            <span className="px-2">|</span>Visual Studio Code
            <span className="px-2">|</span>Eclipse
            <span className="px-2">|</span>Atom
            <span className="px-2">|</span>NetBeans
            <span className="px-2">|</span>Cypress
            <span className="px-2">|</span>Jest
          </p>
          <p className="py-2">
            <span className="font-bold">Tools and Technologies</span>
            <span className="px-2">|</span>AWS
            <span className="px-2">|</span>Tableau
            <span className="px-2">|</span>Android Studio
            <span className="px-2">|</span>Anaconda
            <span className="px-2">|</span>GitHub
            <span className="px-2">|</span>Jupyter Notebook
            <span className="px-2">|</span>Jira
            <span className="px-2">|</span>Postman
            <span className="px-2">|</span>Confluence
            <span className="px-2">|</span>OS Forensics
          </p>
          <p className="py-2">
            <span className="font-bold">Certifications</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
            <span className="px-2">|</span>Python for Everybody Specialization
            (Coursera)
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">IntelOps</span>
            <span className="px-2">|</span>Addison, TX
          </p>
          <p className="py-1 italic">
            Full Stack Developer (02/2023 – Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="text-justify">
              Developed and implemented a streamlined coding process, resulting
              in a 20% increase in productivity and reduced debugging time by
              30%.
            </li>
            <li className="text-justify">
              Leading a team of 4 onsite and offshore (India) teams on Sass
              based product website that simplifies cloud native technology.
            </li>
            <li className="text-justify">
              Created a UI template with dynamic react components for all
              IntelOps UI designs reducing more than 50% of work when designing
              new webpages in the future.
            </li>
            <li className="text-justify">
              Working on creating A.I. based framework to democratize cloud
              native open-source solutions for software companies.
            </li>
            <li className="text-justify">
              Researched and analyzed industry trends to generate compelling
              blog content for multiple front-end technologies, resulting in a
              30% increase in website traffic.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">University of North Texas</span>
            <span className="px-2">|</span>Denton, TX
          </p>
          <p className="py-1 italic">
            Graduate Teaching Assistant (08/2021 – 12/2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="text-justify">
              Assisting the Professors of UNT in Human Computers and Interfaces
              and Secure E-commerce and Fundamentals of Databases.
            </li>
            <li className="text-justify">
              Grading and Planning student assignments, exams, and quizzes in
              the courses. Improved the class average by 40% than the year
              before.
            </li>
            <li className="text-justify">
              Managed, guided, and helped over 600 students with any doubts in
              the coursework over a period of 1.5 years.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Appstek Corp</span>
            <span className="px-2">|</span>Hyderabad, India
          </p>
          <p className="py-1 italic">
            Full-Stack Developer (02/2020 – 12/2020)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="text-justify">
              Developed and implemented the product website using Angular,
              resulting in a 50% increase in user engagement and a 25% decrease
              in bounce rate.
            </li>
            <li className="text-justify">
              Developed and implemented a user-friendly web and mobile
              application for a construction company, streamlining inventory
              management processes and reducing product purchase errors by 35%.
            </li>
            <li className="text-justify">
              Collaborated with cross-functional teams to gather requirements,
              design wireframes, and conduct usability testing, resulting in an
              application with a 90% user satisfaction rate.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        {/* Education */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">University of North Texas</span>
            <span className="px-20">|Denton, TX</span>
          </p>
          <p className="py-1 italic">
            <span className="font-normal">Masters in Computer Science</span>
            <span className="px-16"> |GPA: 3.82/4.0|December 2022</span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="text-justify">
              Relevant Courses: Computer Networks, Introduction to Big Data and
              Data Science, Scientific Data Visualization, Methods of Empirical
              Analysis, Fundamentals of Databases, Software Engineering,
              Usability Testing, Computer Forensics
            </li>
          </ul>

          <p className="italic">
            <span className="font-bold">
              Vidya Jyothi Institute of Technology
            </span>
            <span className="px-2">|</span>Denton, TX
          </p>
          <p className="py-1 italic">
            <span className="font-normal">Bachelors in Computer Science</span>
            <span className="px-16"> |GPA: 8.67/10.0|December 2022</span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="text-justify">
              Relevant Courses: Data Structures & Algorithms, Object Oriented
              Programming with C++, Design and Analysis of Algorithms, Operating
              Systems, Big Data, Internet Security, Cloud Computing, Formal
              Languages and Automata Theory.
            </li>
          </ul>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Relevant Projects
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Penna Care – Web and Mobile application
            </span>
          </p>
          <p className="py-1 italic">Full-Stack Developer (2020)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="text-justify">
              The main idea of the product was to create an application that our
              client (cement company) and their dealers can use to place orders
              and keep track of things online.
            </li>
            <li className="text-justify">
              The project helps the client company to track its dealers, their
              orders, sales, and the profits they make, increasing their sales
              by 20%.
            </li>
            <li className="text-justify">
              The dealer can place orders, make payments, and get product
              updates on the app which increased efficiency by 75%.
            </li>
            <li className="text-justify">
              Used Angular for the UI of the application, Java and Oracle for
              backend.
            </li>
            <li className="text-justify">
              We used Agile development methodologies and used JIRA for tracking
              our work.
            </li>
          </ul>
        </div>
        <div className="py-1">
          <p className="italic">
            <span className="font-bold italic">
              Student Employee Orientation
            </span>
          </p>
          <p className="py-1 italic">
            Front-end Developer, Class Project (2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="text-justify">
              Developed a web application for student employees for the various
              jobs available at UNT like an orientation course, so that they can
              get an idea of what their job is about and the things they need to
              know before they can start working.
            </li>
            <li className="text-justify">
              Created UI using Angular, NodeJS and JavaScript to retrieve from
              backend.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
