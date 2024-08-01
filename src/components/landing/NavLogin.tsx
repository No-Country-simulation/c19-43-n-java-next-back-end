"use client";

import User from '@/components/User';
import { useEffect, useState } from "react";
import Login from "../Login";
import Register from "../Register";

export default function NavLogin() {
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
