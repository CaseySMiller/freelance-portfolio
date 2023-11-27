'use client';

import Image from 'next/image'
import { Button } from 'flowbite-react';
import logo from '../../../../public/assets/images/logo/Full_Logo_Light_Small.png'

import './style.css'

export default function CustomNav() {
  return (
      <div className="custom-navbar">
        <Image 
          src={logo} 
          alt="codeKase Logo" 
          width={100}
          height={100}
          priority
        />

      </div>
  )
}