import Link from 'next/link'
import React from 'react'
import { IoHeartSharp } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className="flex items-center justify-between rounded-xl border-[1px] border-[#001E28] px-10 py-5">
  
   <span className='flex items-center gap-1'> Built with <IoHeartSharp className="fa" /></span>
   <Link href="/images/Ebuka_Moses_cv2.pdf" target="_blank" rel="noopener noreferrer" className="text-[#a1a1a1] hover:text-white transition-colors duration-200">
    Download My Resume
   </Link>
  
</div>
  )
}

export default Footer