"use client";

import Link from "next/link";

const navRoutes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Service",
    href: "/",
  },
  {
    title: "Gallery",
    href: "/",
  },
  {
    title: "About us",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

export const NavRoutes = ({ center }: { center?: string }) => {
  return (
    <div
      className={`font-medium mt-4 md:mt-0 flex flex-col  md:flex-row gap-6 ${center}`}
    >
      {navRoutes.map((route) => (
        <Link
          href={route.href}
          key={route.title}
          className="hover:text-red-200 transition   "
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};
