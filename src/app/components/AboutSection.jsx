"use client";
import React , {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [ // contient les info for every tab
  {
    title : "Skills",
    id : "skills",
    content : (
      <ul className="list-disc pl-2">
        <li>React JS</li>
        <li>Javascript</li>
        <li>SQL</li>
        <li>SQLite</li>
        <li>Laravel</li>
        <li>HTML</li>
      </ul>
    )
  },
  {
    title : "Education",
    id : "education",
    content : (
      <ul className="list-disc pl-2">
        <li>Front End Developer - React JS </li>
        <li>Licence en ingénierie des applications mobiles</li>
        <li>Diplôme ts: développement multimédia </li>
        <li>Baccalauréat</li>
      </ul>
    )
  },
  {
    title : "Experience",
    id : "experience",
    content : (
      <ul className="list-disc pl-2">
        <li>Intership (Three months) : marketing digital</li>
        <li>Internship (One month) : Creating a Website and SEO Optimization </li>
      </ul>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const[isPending , startTransition ] = useTransition();

  const handleTabChange = (id) =>{ //useTransition dans React est utilisé pour gérer les transitions entre différents state de votre application, permettant de rendre les mises à jour d'interface utilisateur plus fluides.
    startTransition(()=>{ //startTransition : une fonction que vous utilisez pour signaler le début d'une transition.
      setTab(id);
    })
  }
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="" width={500} height={500} />
      
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
          Hello! I'm a versatile designer and developer with a knack for
          blending creativity with technology. My design expertise spans Adobe
          Photoshop, Illustrator, and Figma,
          enabling me to craft visually stunning and user-friendly interfaces.
          On the development side, I am proficient in React JS, JavaScript, HTML, CSS,
          Bootstrap,  Angular,  Android, Flutter, Python,PHP, Laravel,
          MYSQL, SQL, SQLite, and MongoDB.I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and
          I am excited to work with others to create amazing applications.
        </p>
        <div className="flex flex-row justify-start mt-8">
        <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
        <TabButton 
          selectTab={()=>handleTabChange("education")}
           active={tab === "education"}>
           {" "}
            Education{" "}
        </TabButton>
        <TabButton 
          selectTab={()=>handleTabChange("experience")}
           active={tab === "experience"}>
           {" "}
            Experience{" "}
        </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t)=> t.id === tab).content}</div> {/* content se trouve dans const TAB_DATA */}
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
