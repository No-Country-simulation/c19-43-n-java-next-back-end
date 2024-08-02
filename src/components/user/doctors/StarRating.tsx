"use client"
import { RiStarFill, RiStarHalfFill, RiStarLine, RiStarSFill } from "@remixicon/react"
import { Icon } from "@tremor/react"

interface StarRatProps{
  params:{
    stars:number
    reviews:number
  }
}
export function StarRating({params}:StarRatProps) {
  let {stars, reviews} = params
  stars -= 1 //Restar 1 ya que 5 son todas las estrellas
  if(stars == null) stars = 0
  if(stars > 5) stars = 4
  return(
    <div className="flex flex-row gap-2 items-center">
      {
        [...Array(5)].map((val, i) => (
          <Icon icon={(i>Math.ceil(stars)?RiStarLine:((stars-Math.floor(stars))>0 && Math.ceil(stars)==i?RiStarHalfFill:RiStarFill))} key={i} />
        ))
      }
      <p>Citas Realizadas: {reviews}</p>
    </div>
  )
}