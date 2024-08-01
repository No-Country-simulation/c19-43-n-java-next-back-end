'use server'

import ProfileForm from '@/components/ProfileForm'
import { getUser } from '@/api/auth'
import { cookies } from 'next/headers';

export default async function ProfilePage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const user_data = await getUser(token?.value);
  console.log(user_data)
  return (
    <div>
      <h1>Editar Perfil</h1>
      <ProfileForm {...user_data} />
    </div>
  )
}
