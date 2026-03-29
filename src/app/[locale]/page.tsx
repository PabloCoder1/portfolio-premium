import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact"; // Novo import
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact /> {/* Adicionado aqui */}
    </main>
  );
}