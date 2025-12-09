import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Product from "@/components/sections/Product";
import BusinessModel from "@/components/sections/BusinessModel";
import WhyWinso from "@/components/sections/WhyWinso";
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
      <BusinessModel />
      <WhyWinso />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
