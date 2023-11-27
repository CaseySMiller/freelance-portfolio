'use client';

import Image from 'next/image'
import logo from '../../../../public/assets/images/logo/Full_Logo_Light_Small.png'


export default function CustomFooter() {
  return (
      <div className="bg-brand-purple">
        <Image 
          src={logo} 
          alt="codeKase Logo" 
          width={100}
          height={100}
          priority
          // className='h-auto'
        />
      </div>
  )
}