import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Carlos | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Carlos Amado</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/carlos-amado-8a61981b9/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/riquiamado"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>

        <p>
          I am a Full-Stack web developer with experience using JavaScript,
          React, Redux, Node and MongoDB. During my participation in a
          programming bootcamp, I gained skills and knowledge in developing
          scalable and robust web applications. During my training, I developed
          an individual project using React and Node.js, in which I used Redux
          as a tool for state management. Likewise, I worked in a group project
          of a virtual store (ecommerce) in which I contributed with the design
          and implementation of the search functionality, integration with
          payment gateways and order management. I also have experience using
          other technologies, such as CSS, HTML, Git, Express.js, and other
          useful tools for web development. I am passionate about technology and
          continuous learning, and I feel motivated to work on challenging
          projects that allow me to continue growing professionally and adding
          value to the tech industry.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>MONGODB
            <span className="px-2">|</span>NODEJS
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
