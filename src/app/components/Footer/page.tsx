"use client";

import Link from "next/link";
import Image from "next/image";
import { Footer } from "flowbite-react";

import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";


export default function CustomFooter() {
  return (
    <Footer className="!bg-brand-purple">
      <div className="w-full px-5 py-3 sm:flex sm:items-center sm:justify-between">
        <Link
          href="https://www.coloradosos.gov/biz/BusinessEntityDetail.do?quitButtonDestination=BusinessEntityResults&nameTyp=ENT&masterFileId=20231913437&entityId2=20231913437&fileId=20231913437&srchTyp=ENTITY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Footer.Copyright by="codeKase Ltd.™" year={2023} className="custom-copyright"/>
        </Link>

        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Link
            href="https://www.upwork.com/freelancers/~01332533512b7b4849"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:hover:text-white"
          >
            <Footer.Icon icon={BiLogoUpwork} />
          </Link>
          <Link
            href="https://github.com/CaseySMiller"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:hover:text-white"
          >
            <Footer.Icon icon={BsGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/casey-miller-3b376444/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:hover:text-white"
          >
            <Footer.Icon icon={BsLinkedin} />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100017456736791"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:hover:text-white"
          >
            <Footer.Icon icon={BsFacebook} />
          </Link>
        </div>
      </div>
    </Footer>
  );
}
