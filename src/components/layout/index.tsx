/*
 * @Author: xiangyue_li
 * @Date: 2023-07-15 18:57:46
 * @LastEditors: xiangyue_li
 */

import Head from "next/head";
import { LayoutProps } from "@/types/layout"
import { useState,useRef } from "react"
export default function (props:{
  option: LayoutProps,
  title: string,
  sideBar: any,
  children:any
}){
  const [isOpen, setIsOpen] = useState(false)
  const {current} = useRef({hasInit: false})
  return (
    <>
      <Head>
        <meta name="description" content={props.option.description}></meta>
        <meta name="robots" content="index, follow"></meta>
      </Head>
    </>
  )
}