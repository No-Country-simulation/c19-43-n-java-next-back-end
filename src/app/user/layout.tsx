import Template from "@/components/user/Template";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Template>
        <Suspense fallback={<div className='flex flex-wrap items-center'>Cargando...</div>}>
          {children}
        </Suspense>
      </Template>
    </div>
  );
}
