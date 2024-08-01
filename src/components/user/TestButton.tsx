"use client"
import { Button } from "@tremor/react";

export default function TestButton(data:any) {
  return (
    <Button onClick={()=>{console.log(data);}} aria-label="asdf">Test</Button>
  )
}