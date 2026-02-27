
import Image from "next/image";
import { technologies } from "../utilis/data";

const Skills = () => {
  return (
    <div>
        <div className="grid grid-cols-15 gap-5 mx-auto">
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