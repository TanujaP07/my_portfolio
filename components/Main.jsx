import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import MainImg from "../public/assets/profilePhoto.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div id="home" className="flex items-center">
      {/* <Image
      // className="rounded-lg object-scale-down h-48 lg:h-80 sm:w-10 md:w-32
      lg:w-96 lg:pl-20 md:pl-5" // src={MainImg}
      // alt="/" // width="500" // height="50"
      /> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
        {/* <div className="rounded-full bg-[#7c2a71] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative"> */}
        <div className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            // src="/images/hero-image.png"
            src={MainImg}
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
            width={300}
            height={300}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="w-full h-screen text-center">
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div className="flex flex-col">
              <p className="uppercase text-sm tracking-widest text-gray-600">
                I like building things for the web
              </p>
              <h1 className="py-4 text-gray-700">
                Hi, I'm <span className="text-purple-800">Tanuja</span>
              </h1>
              <h1 className="py-2 text-gray-700">
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Developer",
                      "Web Developer",
                      "UI/UX Designer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </h1>
              <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
                I specialize in crafting responsive front-end web applications
                seamlessly integrated with robust back-end technologies. My
                passion lies in creating immersive, interactive user experiences
                while continuously expanding my expertise in back-end
                technologies.
              </p>
              <div className="flex items-center justify-between my-4 max-w-[280px] m-auto sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/tanuja-pyneni-121373169/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/TanujaP07"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
