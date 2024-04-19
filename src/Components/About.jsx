import Image from "next/image";
import pic from "./../../public/image/2.png";
import pic2 from "../../public/image/3.png";
import Link from "next/link";

function About() {
  return (
    <div className="mt-16 max-sm:mt-10">
      <h3 className="text-2xl">ABOUT</h3>
      <div className="mt-10 grid grid-cols-2 grid-rows-1 gap-3 max-md:flex max-md:flex-col ">
        <Image
          src={pic}
          width={""}
          height={""}
          alt=""
          className="h-[90vh] w-full object-cover object-center max-md:h-[70vh]"
        />
        <Image
          src={pic2}
          width={""}
          height={""}
          alt=""
          className="h-[90vh] w-full object-cover object-center max-md:h-[70vh]"
        />
      </div>
      <p className="text-font mb-5 mt-10 text-mini">
        At Lenscape, we believe in the power of capturing moments and preserving
        memories. With a passion for photography and a commitment to excellence,
        we strive to provide our clients with stunning imagery that speaks
        volumes. Our team of skilled photographers is dedicated to bringing your
        vision to life, one snapshot at a time.
      </p>
      <Link href={"#"} className="text-lg underline">
        See More Details
      </Link>
    </div>
  );
}

export default About;
