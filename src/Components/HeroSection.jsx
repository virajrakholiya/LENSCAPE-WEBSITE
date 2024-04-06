import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import picture from "../../public/image/1.png"; // Import the image file

function HeroSection() {
  return (
    <div className="text-black ">
      <p className="font-semiblod "> LET'S US HELP CREATE YOURS</p>
      <h1 className="mt-5 text-8xl max-md:text-5xl">CAPTURE LIFE'S BEAUTY</h1>
      <p className="text-font mt-10 max-sm:mt-5 text-mini">
        Where every click tells a story - embark on a journey through the
        Lenscape experience and rediscover the world through our lenses
      </p>
      <button className=" mt-5  flex items-center gap-4 border border-black bg-main p-3 px-5 transition-colors duration-500 hover:bg-black hover:text-white">
        Expoler Project <HiOutlineArrowRight size={20} />
      </button>
      <Image
        src={picture}
        width={""}
        height={""}
        className="mt-20 h-[120vh] max-sm:mt-10 w-full max-md:h-[100vh] max-sm:h-[80vw] object-cover object-center"
        alt="Picture of the author"
      />
    </div>
  );
}

export default HeroSection;
