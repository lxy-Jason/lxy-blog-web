/*
 * @Author: xiangyue_li
 * @Date: 2023-07-15 18:57:46
 * @LastEditors: xiangyue_li
 */
'use client'
import Head from "next/head";
import {LayoutProps} from "@/types/layout"
import {useState, useRef} from "react"
import {ThemeContext, RealThemeType} from "@/utils/themeContext";
import {getTheme} from '@/utils/theme'
import {Toaster} from "react-hot-toast";
import NavBar from "./components/NavBar";
import LayoutBody from "./components/layoutBody";

export default function (props: {
  option: LayoutProps,
  title: string,
  sideBar: any,
  children: any
}) {
  const [isOpen, setIsOpen] = useState(false)
  // const {current} = useRef({hasInit: false})
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
        <Toaster/>
        {/*导航栏*/}
        <NavBar
          defaultTheme={props.option.defaultTheme}
          menus={props.option.menus}
          siteName={props.option.siteName}
          logo={props.option.logo}
          logoDark={props.option.logoDark}
          categories={props.option.categories}
          isOpen={isOpen}
          setOpen={setIsOpen}
        >
          {/*主体部分*/}
          <div className=" mx-auto  lg:px-6  md:py-4 py-2 px-2 md:px-4  text-gray-700 ">
            <LayoutBody  sideBar={props.sideBar} >
              {props.children}
            </LayoutBody>
          </div>
        </NavBar>
      </ThemeContext.Provider>
    </>
  )
}