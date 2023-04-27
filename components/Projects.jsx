import Image from "next/image";
import Link from "next/link";
import React from "react";
import picountries from "../public/assets/projects/PI-COUNTRIES.png";
import NOVATECH from "../public/assets/projects/PF-NOVA-TECH (1).png";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="PI COUNTRIES"
            backgroundImg={picountries}
            projectUrl="/Countries"
            tech="React JS"
          />
          <ProjectItem
            title="Ecommerce NOVATECH"
            backgroundImg={NOVATECH}
            projectUrl="/Novatech"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
