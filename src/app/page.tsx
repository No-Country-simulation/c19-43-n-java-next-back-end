import imgclinica from "/public/imgclinica.png";
import imgdoctor from "/public/imgdoctor.png";
import imgdoctor2 from "/public/imgdoctor2.png";
import imgubi from "/public/imgubi.png";
import logo from '/public/logo-white-text.png';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/landing/header";
import Link from "next/link";
//Landing Page
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {/* <DoctorCard /> */}
      {/* Seccion 1 */}
      <section className="relative w-full h-auto" id="inicio">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={imgclinica}
            alt="background image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="container relative flex flex-wrap items-center justify-between mx-auto p-12">
          <Card className="w-6/12">
            <CardTitle className="text-4xl">Encuentra al Doctor Ideal</CardTitle>
            <CardContent className="mt-2 mb-0 p-0 text-justify">
              Cotizar y comparar precios por consultas, agenda tus citas y
              recibe atención del mejor personal de sanidad privada a un solo
              click de distancia
            </CardContent>
            <Button className="text-secondary rounded-full mt-2">
              Contáctenos
            </Button>
          </Card>
          <div className="w-1/3 mx-auto bg-blue-600 rounded-full opacity-90 overflow-hidden flex flex-wrap items-center justify-center">
            <Image
              src={imgdoctor}
              alt="img doctor"
              className="p-6 object-cover object-center size-64"
            />
          </div>
        </div>
      </section>
      {/* Seccion 2 */}
      <section className="w-full bg-primary p-6" id="servicios">
        <div className="container relative flex flex-wrap items-center justify-between mx-auto">
          <div className="w-1/3 bg-secondary opacity-90">
            <Image src={imgdoctor2} alt="asdf" className="" />
          </div>
          <Card className="w-6/12 text-secondary text-justify">
            <CardTitle className="text-4xl">Nuestros Servicios</CardTitle>
            <CardContent className="mt-2 mb-0 p-0 ">
              <ul>
                <li className="my-1 flex w-full items-center">
                  <svg className="mr-2 flex-shrink-0" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path> </svg>
                  Búsqueda de doctores cercanos a tu ubicación.
                </li>
                <li className="my-1 flex w-full items-center">
                  <svg className="mr-2 flex-shrink-0" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path> </svg>
                  Pagos a través de la aplicación.
                </li>
                <li className="my-1 flex w-full items-center">
                  <svg className="mr-2 flex-shrink-0" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path> </svg>
                  Pago seguro, puedes reclamar y recibir un reembolso si has tenido un mal tratamiento.
                </li>
                <li className="my-1 flex w-full items-center">
                  <svg className="mr-2 flex-shrink-0" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path> </svg>
                  Acceder a tu diagnóstico y al tratamiento que el doctor le ha recomendado.
                </li>
              </ul>
            </CardContent>
            <Button className="text-primary bg-secondary rounded-full mt-2">
              Registrate
            </Button>
          </Card>
        </div>
      </section>
      {/* Seccion 3: Contacto */}
      <section className="w-full bg-secondary p-6 flex flex-wrap h-auto items-center" id="contacto">
        <div className="container relative flex space-x-4 items-center justify-between mx-auto">
          <Image
            src={imgubi}
            alt="background image"
            className="object-cover object-center h-[400px] max-w-[360px]"
          />
          <div className="flex flex-col space-y-12">
            <h1 className="text-5xl">Contáctanos</h1>
            <div className="flex flex-row space-x-4">
              <Card className="w-6/12 text-black text-justify">
                <CardTitle>Soporte para Miembros</CardTitle>
                <div className="">
                  <CardContent className="mt-2 mb-0 p-0 ">
                    Obtener soporte para clientes premium de nuestra aplicación, su cuenta deberá tener una suscripción activa para este soporte.
                    <p className="text-links"> +51 975624158 </p>
                    <p className="text-links"> soporte@saludvirtual.com </p>
                  </CardContent>
                </div>
              </Card>
              <Card className="w-6/12 text-black text-justify">
                <CardTitle>Preguntas generales</CardTitle>
                <div className="">
                  <CardContent className="mt-2 mb-0 p-0 ">
                    Para preguntas en general nos puede contactar por los siguiente métodos.
                    <p className="text-links"> +51 997654158 </p>
                    <p className="text-links"> contacto@saludvirtual.com </p>
                  </CardContent>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="w-full bg-links p-6 flex flex-wrap h-auto items-center justify-center" id="contacto">
        <div className="container relative flex flex-wrap items-center justify-center space-x-6">
          <div>
            <div className="flex flex-row space-x-3 items-center justify-center">
              <Link href="" className="text-secondary">
                <svg className="size-7" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.312 0.835083H18.1959L11.8952 8.03695L19.3079 17.8351H13.5041L8.95886 11.8918L3.7569 17.8351H0.871456L7.61096 10.1317L0.5 0.835867H6.45114L10.5599 6.26822L15.312 0.835083ZM14.3003 16.1095H15.8982L5.58284 2.47059H3.86818L14.3003 16.1095Z" fill="white"/>
                </svg>
              </Link>
              <Link href="" className="text-secondary">
                <svg className="size-7" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.0799 3.15726V16.2895C23.0799 17.143 22.3887 17.8341 21.5352 17.8341H17.9295V9.07994L11.75 13.7157L5.57053 9.07994V17.8351H1.9648C1.76188 17.8351 1.56094 17.7951 1.37348 17.7174C1.18601 17.6397 1.01569 17.5259 0.872246 17.3823C0.728801 17.2388 0.615043 17.0684 0.537474 16.8809C0.459904 16.6934 0.420042 16.4924 0.420166 16.2895V3.15726C0.420166 1.24724 2.60022 0.156737 4.12786 1.30294L5.57053 2.38589L11.75 7.0198L17.9295 2.384L19.3722 1.30294C20.8989 0.157681 23.0799 1.24724 23.0799 3.15726Z" fill="white"/>
                </svg>
              </Link>
            </div>
            <div className="text-secondary text-xs">
              © 2024. Todos los derechos reservados.
            </div>
          </div>
          <div className="inline-block h-auto min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
          <div>
            <Image 
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
