export const runtime = 'edge'
import { getUser } from "@/api/auth";
import { userVerPerfil } from "@/api/data";
import ProfileForm from "@/components/ProfileForm";
import TestButton from "@/components/user/TestButton";
import { cookies } from "next/headers";

// Perfil principal del usuario
export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const user_data = await getUser(token?.value);
  return (
    <div className="bg-white p-4 rounded">
      <h1 className="mx-4">Editar Perfil</h1>
      <ProfileForm {...user_data} />   
    </div>
  )
}