import Link from "next/link";
import logo from '/public/logo-white-text.png';
import Image from "next/image";
import NavLogin from "./NavLogin";

export default function Header() {
  return (
    <div className="w-full relative z-10 bg-primary">
      <nav className="container relative flex flex-wrap items-center justify-between p-8">
        <Link className="font-bond text-3xl text-secondary" href="#">
          <Image src={logo} alt="Salud Virtual" />
        </Link>
        <div className="space-x-12 text-xl text-secondary">
          <Link className="" href="#inicio">Inicio</Link>
          <Link className="" href="#servicios">Nuestros Servicios</Link>
          <Link className="" href="#contacto">Contacto</Link>
        </div>
        <div className="space-x-2 text-xl">
          <NavLogin />
        </div>
      </nav>
    </div>
  );
}