"use client";

import { BackgroundBeams } from "./ui/background-beams";

export function Contact() {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-4">
      <div className="max-w-2xl w-full p-4">
        <h1 className="relative z-10 text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-base text-center relative z-10">
          I am always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <input
          type="email"
          placeholder="Your email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 p-3 md:p-4 outline-none text-white text-sm md:text-base"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
