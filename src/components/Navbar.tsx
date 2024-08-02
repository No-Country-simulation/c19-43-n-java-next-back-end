"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";

import { navbar_list } from "@/config/config";
import Link from "next/link";
import User from '@/components/User';
import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Image from "next/image";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("token")) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <nav className="w-full">
      <div className="flex flex-row justify-between mx-auto my-0 py-4 px-2 md:px-4 w-full container">
        <h1 className="my-auto">
          <a href="/">
          <img src="/icon.svg" alt="" />
          </a>
        </h1>
        <NavigationMenu className="my-auto md:flex hidden">
          <NavigationMenuList className="flex flex-row items-center gap-4 h-full">
            {navbar_list.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} passHref>
                  {item.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-row gap-2 my-auto">
          {isAuthenticated ? (
            <>
              <User />
            </>
          ) : (
            <>
              <Login />
              <Register />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}