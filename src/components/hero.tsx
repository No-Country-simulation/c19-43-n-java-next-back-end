import exp from "constants";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps{
  children: React.ReactNode
  imgData: StaticImageData
  imgAlt: string
  title: string
}

export default function Hero(props: HeroProps) {
  return (
    <div className="absolute h-screen w-full">
      <div className="sect absolute inset-0 w-full h-full">
        <Image 
              src={props.imgData} 
              alt={props.imgAlt}
              className="w-full max-h-fit"
              style={{objectFit: 'cover'}}
            />
          <div className="absolute inset-0"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.children}</h1>
      </div>
    </div>
  )
}