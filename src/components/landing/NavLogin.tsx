'use server'

export const runtime = 'edge'

import User from '@/components/User';
import Login from "../Login";
import Register from "../Register";

import { getUser } from '@/api/auth'
import { cookies } from 'next/headers'
import { UserType } from '@/types/users';

export default async function NavLogin() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const user_data : UserType = await getUser(token?.value);


  return (
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
  );
}
