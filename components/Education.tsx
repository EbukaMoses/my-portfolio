import { education } from '@/utilis/data'
import Link from 'next/link';
import React from 'react'

interface EducationItem {
    uni: string;
    date: string;
    course: string;
    desc: string;
}

const Education = () => {
    return (
        <div className="space-y-6">
            {education.map((edu, index) => (
                <div 
                    key={index}
                    className="bg-[#00141E] rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                            <Link href="" className="text-xl font-semibold text-[#a1a1a1] mb-2">
                                {edu.uni}
                            </Link>
                            <p className="text-sm text-[#a1a1a1] font-medium mb-3">
                                {edu.date}
                            </p>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-medium italic text-[#a1a1a1] mb-2">
                                {edu.course}
                            </h4>
                            {edu.desc && (
                                <p className="text-[#a1a1a1] text-sm leading-relaxed">
                                    {edu.desc}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education