import Link from "next/link";

export const Navlinks = () => {
  const navlinks = [
    { link: "/about", text: "About" },
    { link: "/projects", text: "Project" },
    { link: "/blog", text: "Blog" },
  ];
  return (
    <div>
      <div className="flex items-center gap-3 font-medium" >
        {navlinks.map((ele, idx) => (
          <Link  href={ele?.link} key={idx}>
            {ele?.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
