import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentsProject from "@/components/RecentsProject";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <h1>
          <FloatingNav className="" navItems={navItems}/>
          <Hero />
          <Grid />
          <RecentsProject />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </h1>
      </div>
    </main>
  );
}
