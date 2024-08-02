export const runtime = 'edge'
import { userVerPerfil } from "@/api/data";
import TestButton from "@/components/user/TestButton";
import { cookies } from "next/headers";

// Perfil principal del usuario
export default async function Page() {
  let udata = userVerPerfil()
  return (
    <main className="">
      <TestButton data={udata} />      
    </main>
  )
}