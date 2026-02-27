import { experience } from '@/utilis/data'
import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const Experience = () => {
  return (
    <div>
        {experience.map((exp) => (
  <div className="mb-10 flex mb" key={exp.company}>
    <div className="w-[25%]">
      <h1 className="h3 text-green-500">{exp.company}</h1>
      <p className="text-sm italic text-[#a1a1a1]">{exp.date}</p>
    </div>
    <div className="w-[75%] flex-col">
      <h3 className="h3 text-green-500 italic mb-1">{exp.position}</h3>
      {/* <p>{exp.desc}</p> */}
      <ul>
        {exp.desc.map((item, index) => (
          <li key={index} className="text-base inline-flex gap-2 mb-1"><IoMdCheckmarkCircleOutline className="text-green-500" />{item}</li>
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