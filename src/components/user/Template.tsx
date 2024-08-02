"use client"
import FooterUser from "@/components/user/FooterUser";
import logo from "/public/logo-white-text.png";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Button, Icon } from "@tremor/react";
import Link from "next/link";
import { sidebar_list } from "@/config/config";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import NavLogin from "@/components/landing/NavLogin";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`hidden md:flex flex-col bg-primary ${
          isOpen ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-16 space-y-3 m-2">
          <Image src={logo} alt="logo" />
          <hr className="text-secondary w-5/6" />
        </div>
        <NavigationMenu className="flex flex-col flex-1 overflow-y-auto">
          <NavigationMenuList className="flex-1 px-2 py-4">
            {sidebar_list.map((item) => (
              <NavigationMenuItem
                key={item.href}
                className="flex items-center px-4 py-2 text-secondary hover:bg-gray-800"
              >
                <Icon className="text-secondary" size="lg" icon={item.icon} />
                <Link href={item.href} passHref>
                  {item.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Topbar */}
        <div className="flex items-center justify-between h-16 bg-primary">
          <div className={`flex items-center px-4`}>
            <Button variant="light" className=" focus:outline-none focus:text-gray-700" onClick={() => setIsOpen(!isOpen)}>
              <Icon className="h-6 w-6 text-secondary" icon={isOpen ? RiCloseLine : RiMenuLine} />
            </Button>
          </div>
          <div className="flex items-center pr-4">
            <NavLogin />
          </div>
        </div>
        {/* Main Content */}
        <div className="grow flex flex-col h-full">
          <div className="grow h-full align-top p-4">
            {children}
          </div>
          {/* Footer */}
          <FooterUser />
        </div>
      </div>
    </div>
  );
}
