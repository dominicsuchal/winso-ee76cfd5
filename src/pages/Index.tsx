import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Product from "@/components/sections/Product";
import KeyBenefits from "@/components/sections/KeyBenefits";
import WhyWinso from "@/components/sections/WhyWinso";
import Audiences from "@/components/sections/Audiences";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Product />
      <Audiences />
      <KeyBenefits />
      <WhyWinso />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
