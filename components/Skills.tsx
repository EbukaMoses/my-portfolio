
import Image from "next/image";
// import { technologies } from "../utilis/data";

export const technologies = [
  {
    title: "Html",
    icon: "/images/html.png",
  },
  {
    title: "Css",
    icon: "/images/css.png",
  },
  {
    title: "Bootstrap",
    icon: "/images/bootstrap.png",
  },
  {
    title: "Sass",
    icon: "/images/sass.png",
  },
  {
    title: "Tailwind",
    icon: "/images/tailwind.png",
  },
  {
    title: "JavaScript",
    icon: "/images/js.png",
  },
  {
    title: "Typescript",
    icon: "/images/typescript.png",
  },
  {
    title: "ReactJs",
    icon: "/images/react.png",
  },
  // {
  //   title: "Next",
  //   icon: "/images/nextjs.jpg",
  // },
  {
    title: "NextJs",
    icon: "/images/nextjs.webp",
  },
  {
    title: "Redux",
    icon: "/images/redux.png",
  },
  {
    title: "Express",
    icon: "/images/express.png",
  },
  {
    title: "Node",
    icon: "/images/node.png",
  },
  {
    title: "Php",
    icon: "/images/php.png",
  },
  {
    title: "Mysql",
    icon: "/images/mysql.png",
  },
  {
    title: "MongoDB",
    icon: "/images/mongodb.png",
  },
  {
    title: "Slidity",
    icon: "/images/Solidity.jpg",
  },
  {
    title: "Rust",
    icon: "/images/rust.jpg",
  },
  {
    title: "Git",
    icon: "/images/git.png",
  },
  {
    title: "Github",
    icon: "/images/github.png",
  },
  // {
  //   title: "Vscode",
  //   icon: "/images/vscode.png",
  // },
  {
    title: "Wordpress",
    icon: "/images/wordpress.png",
  },
  {
    title: "Corel Draw",
    icon: "/images/coredraw.png",
  },
  {
    title: "Photoshop",
    icon: "/images/photoshop.png",
  },
];

const Skills = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-15 md:grid-cols-10 grid-cols-5 gap-5 mx-auto">
        {technologies.map((tech) => (
          <span key={tech.title} className="flex flex-col items-center justify-center">
            <Image src={tech.icon} alt={tech.title} width={50} height={50} />
            <span className="text-xs text-[#A1A1A1]">{tech.title}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills