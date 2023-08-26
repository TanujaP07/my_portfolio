import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-purple-800">
            About{" "}
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600 text-justify">
            I am a driven Full Stack Developer driven by a passion for
            innovative software solutions. With a solid foundation in Computer
            Science and an unwavering love for creative problem-solving, I
            thrive within collaborative environments where I can leverage my
            technical expertise to transform ideas into reality. From crafting
            web and mobile apps to collaborating with diverse teams and
            embracing emerging technologies, I'm dedicated to exceeding
            expectations with meticulous attention to detail. This portfolio
            showcases a range of projects, each embodying my commitment to
            continuous learning, precision, and achieving excellence. I'm eager
            to connect with fellow developers, collaborators, and
            forward-thinking organizations who share my passion for innovation.
            If you're seeking a dedicated team player with a versatile skill set
            and a fresh perspective, I invite you to explore my portfolio and
            reach out. Here's to embracing the boundless possibilities of
            technology together! 
            I believe that being a great developer is not
            just being able to use one specific language, but being able to
            choose the best tool for the job.
          </p>
          <p className="py-2 text-gray-600 text-justify">
            I started web developer building e-commerce
            websites on CMS platforms such as WordPress. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. My experience as a
            Graduate Teaching Assistant has honed my communication skills,
            making me adept at simplifying complex concepts. In my spare
            time I work on Leetcode, freelance and also have a art page on
            Instagram where I post my sketches.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer hover:text-purple-800">
            You can checkout some of my projects here.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={AboutImg}
            alt="/"
            width="500"
            height="50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
