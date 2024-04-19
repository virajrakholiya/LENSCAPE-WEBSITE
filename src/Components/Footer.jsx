import Link from "next/link";

function Footer() {
  const data = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "ABOUT",
    },
    {
      id: 3,
      name: "SERVICE",
    },
    {
      id: 4,
      name: "PORTFOLIO",
    },
  ];
  const Services = [
    {
      id: 1,
      name: "Wedding",
    },
    {
      id: 2,
      name: "Family",
    },
    {
      id: 3,
      name: "Portrait",
    },
    {
      id: 4,
      name: "Corporate",
    },
  ];
  const media = [
    { id: 1, name: "Instagram" },
    { id: 1, name: "Youtube" },
    { id: 1, name: "Facebook" },
  ];
  return (
    <div className="mt-10 flex flex-wrap justify-between">
      <div className="flex flex-col gap-5">
        {" "}
        <h1 className="font-semibold">Quick Link</h1>
        {data.map((item, index) => {
          return (
            <Link href={"#"} className="text-mini" key={index}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-5">
        {" "}
        <h1 className="font-semibold">Services</h1>
        {Services.map((item, index) => {
          return (
            <Link href={"#"} className="uppercase text-mini">
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-5">
        {" "}
        <h1 className="font-semibold">Social Media</h1>
        {media.map((item, index) => {
          return (
            <Link href={"#"} className="uppercase text-mini">
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
