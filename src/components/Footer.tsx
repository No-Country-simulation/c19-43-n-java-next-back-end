import Link from "next/link";
import Image from "next/image";

import logo from '/public/logo-white-text.png';

export default function Footer() {
  return (
    <section className="flex flex-wrap justify-center items-center bg-primary p-6 w-full h-auto" id="contacto">
        <div className="relative flex flex-wrap justify-center items-center space-x-6 container">
          <div>
            <div className="flex flex-row justify-center items-center space-x-3">
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
          <div className="inline-block bg-neutral-100 dark:bg-white/10 w-0.5 h-auto min-h-[1em] self-stretch"></div>
          <div>
            <Image 
              src={logo}
              alt="logo"
            />
          </div>
        </div>
    </section>
  )
}
