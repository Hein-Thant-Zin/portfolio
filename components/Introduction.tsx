"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ProfilePhoto } from "./ProfilePhoto";

const words = `Hi, I'm Hein Thant Zin. I'm a passionate web developer with expertise in modern technologies like React, Next.js, and Node.js.`;

export function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <ProfilePhoto />
      <div className="mt-12 text-center max-w-2xl">
        <TextGenerateEffect words={words} className="text-gray-300" />
      </div>
    </div>
  );
}
