"use client";
import { cn } from "./utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import SignupFormDemo from "../components/SignupFormDemo";
import Login from "../components/Login";

export const MultiStepLoader = ({ loading }) => {
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl"
        >
          {/* <SignupFormDemo /> */}
          <Login />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
