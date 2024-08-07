"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Navbar, Dropdown, Avatar } from "flowbite-react";
import logo from "../../../../public/assets/images/logo/Full_Logo_Light_Small.png";

interface User {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  email: string;
  initials: string;
}

export default function CustomNav() {
  const [user, setUser] = useState<User>({
    isLoggedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    initials: "",
  });
  const pathname = usePathname();

  useEffect(() => {
    // Simulate user data
    const userdata: User = {
      isLoggedIn: false,
      firstName: "John",
      lastName: "Doe",
      initials: "JD",
      email: "john@doe.com",
    };
    setUser(userdata);
  }, []);

  return (
    <Navbar fluid rounded className="!bg-brand-purple">
      <Navbar.Brand as={Link} href="/">
        <Image
          src={logo}
          alt="codeKase Logo"
          width={100}
          height={100}
          priority
          className="mr-3 h-9"
        />
      </Navbar.Brand>
      <div className="flex md:order-1">
        <Dropdown
          arrowIcon={true}
          inline
          label={
            user.isLoggedIn ? (
              <Avatar placeholderInitials={user.initials} rounded />
            ) : (
              <Avatar rounded />
            )
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {user.isLoggedIn
                ? `${user.firstName} ${user.lastName}`
                : "Hello Guest"}
            </span>
            <span className="block truncate text-sm font-medium">
              {user.isLoggedIn ? user.email : ""}
            </span>
          </Dropdown.Header>
          <Dropdown.Item
            href="/"
            disabled={user.isLoggedIn ? false : true}
            className={!user.isLoggedIn ? "disabled-dropdown" : ""}
          >
            Backend
          </Dropdown.Item>
          <Dropdown.Item
            href="/"
            disabled={user.isLoggedIn ? false : true}
            className={!user.isLoggedIn ? "disabled-dropdown" : ""}
          >
            Coming
          </Dropdown.Item>
          <Dropdown.Item
            href="/"
            disabled={user.isLoggedIn ? false : true}
            className={!user.isLoggedIn ? "disabled-dropdown" : ""}
          >
            Soon
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            {user.isLoggedIn ? "Sign out" : "Sign in"}
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link 
          as={Link} 
          href="/" 
          active={pathname === "/" ? true : false}
        >
            Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/about"
          active={pathname === "/about" ? true : false}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/projects"
          active={pathname === "/projects" ? true : false}
        >
          Projects
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/pricing"
          active={pathname === "/pricing" ? true : false}
        >
          Pricing
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/contact"
          active={pathname === "/contact" ? true : false}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
