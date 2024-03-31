"use client";
import React, { useState } from "react";
import { MultiStepLoader2 as Loader } from "../ui/multi-step-loader2";
import { IconSquareRoundedX } from "@tabler/icons-react";

export default function MultiStepLoaderDemo2() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Loader loading={loading} />

      <button
        onClick={() => setLoading(true)}
        className="text-indigo-500"
      >
        Sign Up
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </>
  );
}
