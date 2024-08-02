import Image from 'next/image';

import { Card, CardContent, CardTitle } from "@/components/ui/card";

import imgdoctor from "/public/imgdoctor.png";
import HeaderImage from "@/resources/images/doctores.png";
import Register from "@/components/Register";
import GoogleMaps from "@/components/GoogleMaps";
import SelectCountry from '@/components/SelectCountry';
import LocationSelector from '@/components/LocationSelector';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen container md:mx-auto p-2">
      <SelectCountry />
      <section className="flex flex-col-reverse md:flex-row w-full h-auto my-12" id="inicio">
        <div className="w-full md:w-1/2">
          <LocationSelector />
        </div>
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
          <Image
            src={HeaderImage}
            alt="background image"
            className="w-full h-64 md:h-full object-center object-cover"
          />
        </div>
      </section>



      <section className="flex flex-col md:flex-row justify-center bg-primary my-12 p-4 md:p-12 w-full overflow-hidden rounded-xl" id="servicios">
        <div className="flex flex-col md:flex-row items-center mx-auto">
          <Image
              src={imgdoctor}
              alt="img doctor"
              className="object-center object-cover size-64"
          />
          <Card className="p-0 w-full md:w-3/4">
            <CardContent className="flex flex-col gap-2 text-secondary justify-between h-full p-4">
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


      <section className="px-4 md:p-0 flex flex-col-reverse md:flex-row items-center gap-12 my-12 w-full h-auto" id="contacto">
        <div className="rounded-xl overflow-hidden w-full md:w-3/5">
          <GoogleMaps />
        </div>
        <div className="flex flex-col space-y-12">
          <h1 className="font-bold text-3xl">Contáctanos</h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            <Card className="w-full md:w-1/2 text-black h-full">
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
            <Card className="w-full md:w-1/2 text-black">
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

      <Footer />
    </div>
  );
}