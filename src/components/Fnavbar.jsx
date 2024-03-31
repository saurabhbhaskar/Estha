"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Header from "./Header";
import TempleCardSlider from './TempleCardSlider.jsx'
import Footer from './Footer.jsx'
import BooksCardSlider from './BooksCardSlider.jsx'
import BlogCardSlider from './BlogCardSlider.jsx'
import OrgCardSlider from './OrgCardSlider.jsx'
import CardSlider1 from './CardSlider1.jsx'
import CardSlider from '../functionalities/CardSlider.jsx'
import Card1 from './Card1.jsx'
import Navbar from './Navbar.tsx'


export function Fnavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
        <FloatingNav navItems={navItems} />
            {/* <Navbar /> */}
            <Header />
            <CardSlider1 />
            <TempleCardSlider />
            <BooksCardSlider />
            <BlogCardSlider />
            <OrgCardSlider />
            <Footer />
    </div>
  );
}


