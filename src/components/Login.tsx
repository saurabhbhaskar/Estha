"use client";
// import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../ui/utils/cn";

import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
// import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"
import SignupFormDemo from "./SignupFormDemo";
import MultiStepLoaderDemo2 from "./MultiStepLoaderDemo2";


export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    // this is React Hook Form, read it's documentation on https://react-hook-form.com/

    const [error, setError] = useState("")

    const log = async(data) => {
        setError("")
        console.log(data)
        try {
          console.log("login called")
            const session = await authService.login(data)
            console.log("login called")
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                console.log("login called")
                console.log(userData)
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
            console.log(error)
        }
    }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Login to Estha
      </h2>
      <p className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-300">
        Don&apos;t have any account?&nbsp;
            {/* <Link
                to="/signup"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign Up
            </Link> */}
            <MultiStepLoaderDemo2 />
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form className="my-8" onSubmit={handleSubmit(log)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
          id="email"
          placeholder="usermail@email.com"
          type="email"
          {...register("email", {
            required: true,
            validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            }
          })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
          id="password"
          placeholder="••••••••"
          type="password"
          {...register("password", {
            required: true,})}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-transform duration-300 ease-in-out"
          type="submit"
        >
          Log In &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
