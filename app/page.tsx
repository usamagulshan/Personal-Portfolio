"use client"

import About from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/hero";
import Project from "./component/project";
import Skill from "./component/skills";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About />
    <Skill />
    <Project />
    <Contact />
   </div>
  );
}
