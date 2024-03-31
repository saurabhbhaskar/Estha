"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Loader loading={loading} />

      <button
        onClick={() => setLoading(true)}
      >
        Log In
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
