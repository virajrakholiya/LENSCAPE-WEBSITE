"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/ui/accordion";
import Image from "next/image";

import pic from "../../public/image/4.png";
import pic2 from "../../public/image/5.png";
import pic3 from "../../public/image/6.png";
import pic4 from "../../public/image/7.png";
import pic5 from "../../public/image/8.png";
import pic6 from "../../public/image/9.png";

function Service() {
  return (
    <>
      <h1 className="mb-10 mt-10 text-3xl">SERVICE</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-7xl max-md:text-5xl max-sm:text-2xl ">
            CRAFTING BRANDS
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 grid-rows-1 gap-4 max-sm:flex max-sm:flex-col">
            <Image src={pic} width={0} height={0} />
            <Image src={pic2} width={0} height={0} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-7xl max-md:text-5xl max-sm:text-2xl ">
            FAMILY PORTRAIT
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 grid-rows-1 gap-4  max-sm:flex max-sm:flex-col">
            <Image src={pic3} width={0} height={0} />
            <Image src={pic4} width={0} height={0} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-7xl max-md:text-5xl max-sm:text-2xl ">
            WEDDING PHOTO
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 grid-rows-1 gap-4 max-sm:flex max-sm:flex-col">
            <Image src={pic5} width={0} height={0} />
            <Image src={pic6} width={0} height={0} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Service;
