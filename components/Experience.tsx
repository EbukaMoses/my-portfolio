import { experience } from '@/utilis/data'
import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const Experience = () => {
  return (
    <div>
        {experience.map((exp) => (
  <div className="mb-10 flex lg:flex-row flex-col mb" key={exp.company}>
    <div className="lg:w-[25%] w-full">
      <h1 className="h3 text-green-500">{exp.company}</h1>
      <p className="text-sm italic text-[#a1a1a1]">{exp.date}</p>
    </div>

    <div className="lg:w-[75%] w-full flex-col">
      <h3 className="h4 text-green-600 italic mb-1">{exp.position}</h3>
      {/* <p>{exp.desc}</p> */}
      <ul>
        {exp.desc.map((item, index) => (
          <li key={index} className="text-base font-Roboto font-normal inline-flex gap-2 mb-1"><IoMdCheckmarkCircleOutline className="text-green-500" />{item}</li>
        ))}
      </ul>
      {/* {exp.desc.map((item, index) => (
          <p key={index}>{item}</p>
        ))} */}
    </div>
  </div>
))}
    </div>
  )
}

export default Experience