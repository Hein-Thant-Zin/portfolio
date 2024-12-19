"use client";

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser, IconCode, IconMail } from "@tabler/icons-react";

export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="fixed top-10 inset-x-0 max-w-md mx-auto z-50">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
