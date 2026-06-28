import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Portfolio } from "@/sections/Portfolio";
import { Testimonials } from "@/sections/Testimonials";
import { CTA } from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
