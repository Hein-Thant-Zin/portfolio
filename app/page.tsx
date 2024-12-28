'use client'
import { Introduction } from "../components/Introduction";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { FloatingNavbar } from "@/components/FloatingNavBar";
import SkillProgress from "@/components/SkillProgress";
import { Timeline } from "@/components/TimeLine";
import BackToTop from "@/components/BackToTop";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <FloatingNavbar />
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center"
      >
        <Introduction />
      </section>
      <section
        id="about"
        className="w-full min-h-screen flex items-center justify-center"
      >
        <Timeline />
      </section>
      <section
        id="skills"
        className="w-full min-h-screen flex items-center justify-center"
      >
        <SkillProgress />
      </section>
      <section
        id="projects"
        className="w-full min-h-screen flex items-center justify-center"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="w-full min-h-screen flex items-center justify-center"
      >
        <Contact />
        
      </section>
      <section>
      <BackToTop />
      </section>
    </main>
  );
}
