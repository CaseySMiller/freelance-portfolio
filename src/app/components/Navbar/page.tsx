'use client';

import Image from 'next/image'

import './style.css'

export default function CustomNav() {
  return (
      <div className="custom-navbar">
        <Image 
          src="/assets/images/logo/Full_Logo_Light_Small.png" 
          alt="codeKase Logo" 
          width={100}
          height={100}
          priority
          className='h-auto'
        />
      </div>
  )
}