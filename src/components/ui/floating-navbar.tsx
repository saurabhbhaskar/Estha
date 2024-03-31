"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../ui/utils/cn";
// import Link from "next/link";
// import { Link } from 'react-router-dom';
import MultiStepLoaderDemo from "../MultiStepLoaderDemo";
import LogoutBtn from '../LogoutBtn';
import {Avatar, AvatarIcon} from "@nextui-org/react";

import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        console.log("logged out")
        authService.logout().then(() => {
            dispatch(logout())
            navigate("/")
            console.log("logged out")
        })
    }

  const authStatus = useSelector(state => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  // console.log(userData);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-10",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a href="#">
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
        </a>
        ))}
        
        {!authStatus && (
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <MultiStepLoaderDemo />
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        )}

        {authStatus && (
          <DropdownMenu>
            <DropdownMenuTrigger>
          <button className="border text-sm font-medium relative border-neutral-300 dark:border-white/[0.2] text-black dark:text-white px-3 py-1 rounded-full flex items-center">
          <div className="pr-2">
            <Avatar
              icon={<AvatarIcon />}
              classNames={{
                base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B] text-lg",
                icon: "text-black/80",
              }}
              size='sm'
              name={userData.name[0]}
            />
          </div>
            {userData.name}
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-15 mt-2">
        <DropdownMenuLabel className='text-bold' >My Account</DropdownMenuLabel>
        <DropdownMenuLabel className='-mt-3 text-gray-500'>{userData.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutHandler}>
          {/* <LogoutBtn /> */}
          Logout
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
          </DropdownMenu>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
