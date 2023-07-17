/*
 * @Author: xiangyue_li
 * @Date: 2023-07-15 18:57:46
 * @LastEditors: xiangyue_li
 */

import Head from "next/head";
import {LayoutProps} from "@/types/layout"
import {useState, useRef} from "react"
import {ThemeContext, RealThemeType} from "@/utils/themeContext";
import {getTheme} from '@/utils/theme'
import {Toaster} from "react-hot-toast";

export default function (props: {
  option: LayoutProps,
  title: string,
  sideBar: any,
  children: any
}) {
  const [isOpen, setIsOpen] = useState(false)
  const {current} = useRef({hasInit: false})
  const [theme, setTheme] = useState<RealThemeType>(getTheme("auto"))
  return (
    <>
      <Head>
        <meta name="description" content={props.option.description}></meta>
        <meta name="robots" content="index, follow"></meta>
      </Head>
      {/*todo,谷歌和百度统计*/}

      <ThemeContext.Provider value={{
        setTheme,
        theme
      }}>
        <Toaster />
      </ThemeContext.Provider>
    </>
  )
}