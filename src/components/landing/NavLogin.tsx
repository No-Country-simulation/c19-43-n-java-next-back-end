export const runtime = 'edge'

import User from '@/components/User';
import Login from "../Login";
import Register from "../Register";

import { getUser } from '@/api/auth'
import { cookies } from 'next/headers'
import { UserType } from '@/types/users';
import { useEffect, useState } from 'react';

export default async function NavLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("token")) {
      setIsAuthenticated(true);
    }
  }, []);


  return (
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
  );
}
