import imgclinica from "/public/imgclinica.png";
import imgdoctor from "/public/imgdoctor.png";
import imgdoctor2 from "/public/imgdoctor2.png";
import imgubi from "/public/imgubi.png";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/landing/header";
import Link from "next/link";
import Register from "@/components/Register"
import GoogleMaps from "@/components/GoogleMaps";

//Landing Page
export default function Home() {
  return (
    <>
    {/* <DoctorCard /> */}
      {/* Seccion 1 */}
      <section className="relative w-full h-auto" id="inicio">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={imgclinica}
            alt="background image"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="relative flex flex-wrap justify-between items-center mx-auto p-12">
          <Card className="w-6/12">
            <CardTitle className="text-4xl">Encuentra al Doctor Ideal</CardTitle>
            <CardContent className="mt-2 mb-0 p-0 text-justify">
              Cotizar y comparar precios por consultas, agenda tus citas y
              recibe atención del mejor personal de sanidad privada a un solo
              click de distancia
            </CardContent>
            <Button className="mt-2 rounded-full text-secondary">
              Contáctenos
            </Button>
          </Card>
        </div>
      </section>
      {/* Seccion 2 */}
      <section className="flex flex-row justify-center bg-primary my-6 p-12 w-full overflow-hidden rounded-xl" id="servicios">
        <div className="flex flex-row items-center mx-auto">
          <Image
              src={imgdoctor}
              alt="img doctor"
              className="object-center object-cover size-64"
          />
          <Card className="p-0 w-3/4">
            <CardContent className="flex flex-col gap-2 text-justify text-secondary justify-between h-full p-4">
              <CardTitle className="text-4xl">Nuestros Servicios</CardTitle>
              <ul className="flex flex-col gap-2">
                <li className="flex">
                  <svg className="flex-shrink-0 mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path> </svg>
                  <p> Búsqueda de doctores cercanos a tu ubicación. </p>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path> </svg>
                  <p> Pagos a través de la aplicación. </p>
                  
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path> </svg>
                  <p> Pago seguro, puedes reclamar y recibir un reembolso si has tenido un mal tratamiento. </p>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path> </svg>
                  <p> Acceder a tu diagnóstico y al tratamiento que el doctor le ha recomendado. </p>
                </li>
              </ul>
              <div>
                <Register />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-row items-center gap-12 my-6 w-full h-auto" id="contacto">
        <div className="rounded-xl overflow-hidden w-3/5">
          <GoogleMaps />
        </div>
        <div className="flex flex-col space-y-12">
          <h1 className="font-bold text-3xl">Contáctanos</h1>
          <div className="flex flex-row space-x-4">
            <Card className="w-1/2 text-black text-justify h-full">
                <CardContent className="p-0 h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <CardTitle className="mb-2">Soporte para Miembros</CardTitle>
                    Obtener soporte para clientes premium de nuestra aplicación, su cuenta deberá tener una suscripción activa para este soporte.
                  </div>
                  <div>
                    <p className="text-links"> +51 975624158 </p>
                    <p className="text-links"> soporte@saludvirtual.com </p>
                  </div>
                </CardContent>
            </Card>
            <Card className="w-1/2 text-black text-justify">
                <CardContent className="p-0 h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <CardTitle className="mb-2">Preguntas generales</CardTitle>
                    Para preguntas en general nos puede contactar por los siguiente métodos.
                  </div>
                  <div>
                    <p className="text-links"> +51 997654158 </p>
                    <p className="text-links"> contacto@saludvirtual.com </p>
                  </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}