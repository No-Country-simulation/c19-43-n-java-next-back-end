export const runtime = 'edge'

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";

import { navbar_list } from "@/config/config";
import Link from "next/link";
import User from '@/components/User';
import Login from "./Login";
import Register from "./Register";

import { getUser } from '@/api/auth'
import { UserType } from '@/types/users';

import { cookies } from 'next/headers'

export default async function Navbar() {  
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const user_data : UserType = await getUser(token?.value);

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
          {!!user_data ? (
            <>
              <User user={user_data.nombre}/>
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