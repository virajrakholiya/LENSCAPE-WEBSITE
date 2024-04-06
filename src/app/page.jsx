import About from "@/Components/About";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import Service from "@/Components/Service";

function page() {
  return (
    <div className=" bg-main font-normal">
      <Navbar />
      <div className="px-[50px] py-[50px] max-sm:px-[20px] max-sm:py-[20px]">
        <HeroSection />
        <About />
        <Service />
        <Footer />
      </div>
    </div>
  );
}

export default page;
