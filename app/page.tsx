"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex flex-col min-h-screen mx-auto sm:px-10 px-5 overflow-x-hidden">
      <FloatingNav navItems={navItems} />

      <div className="flex-1 w-full max-w-7xl mx-auto">
        <Hero />
        <Experience />
        <RecentProjects />
        <Grid />
        <Approach />
      </div>

      {/* Footer al final */}
      <Footer />
    </main>
  );
};

export default Home;

