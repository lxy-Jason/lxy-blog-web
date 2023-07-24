import {MenuItem, theme} from "@/types/layout";
import {useContext, useEffect, useMemo, useState} from 'react'
import Headroom from 'headroom.js'
import {ThemeContext} from "@/utils/themeContext";
import Link from "next/link";
import Item from "@/components/NavBar/components/item";

export default function (props: {
  logo: string,
  logoDark: string,
  categories: string[],
  setOpen: (open: boolean) => void
  isOpen: boolean
  siteName: string
  menus: MenuItem[]
  // showSubMenu: "true" | 'false'
  // showFriends: 'true' | 'false'
  // showRss: 'true' | 'false'
  // headerLeftContent: 'siteName' | 'siteLogo'
  defaultTheme: theme,
  // subMenuOffset: number,
  // openArticleLinksInNewWindow: Boolean
  children: any //不知道为什么要加这个
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [headroom, setHeadroom] = useState<Headroom>()
  const {theme} = useContext(ThemeContext)

  const picUrl = useMemo(() => {
    if (theme.includes("dark") && props.logoDark && props.logoDark !== '') {
      return props.logoDark
    }
    return props.logo;
  }, [theme, props])
  useEffect(() => {
    const el = document.querySelector("#nav");
    if (el && !headroom) {
      const headroom = new Headroom(el);
      headroom.init();
      setHeadroom(headroom);
    }
    return () => {
      headroom?.destroy();
    };
  }, [headroom, setHeadroom]);
  return (
    <>
      <div
        id="nav"
        className=" bg-white sticky top-0 dark:bg-dark nav-shadow dark:nav-shadow-dark"
        style={{zIndex: 90}}
      >
        {/*导航栏部分*/}
        <div
          className=" flex  items-center w-full border-b border-gray-200 h-14 dark:border-nav-dark"
          style={{height: 56}}
        >
          <div className="mx-4 flex items-center h-full">
            {/*移动端适配内容*/}
            <div
              className="cursor-pointer block md:hidden"
              onClick={() => {
                if (!props.isOpen) {
                  // 要打开
                  headroom?.pin();
                }
                props.setOpen(!props.isOpen);
              }}
            >
              <span>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1340"
                  width="24"
                  height="24"
                  className="dark:text-dark fill-gray-600"
                >
                  <path
                    d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                    p-id="1341"
                  ></path>
                </svg>
              </span>
            </div>
            {/*跳转到首页*/}
            <Link href="/">
              <div
                className="text-gray-800 cursor-pointer select-none text-lg dark:text-dark lg:text-xl font-medium  mr-4 hidden md:block">
                {props.siteName}
              </div>
            </Link>
            <div
              className="flex justify-between h-full flex-grow nav-content"
            >
              {/*/!*移动端适配*!/*/}
              <div
                style={{transform: "translateX(30px)"}}
                className="cursor-pointer md:hidden  flex-grow text-center  flex items-center justify-center select-none dark:text-dark"
              >
                <Link href='/'>
                  <div>{props.siteName}</div>
                </Link>
              </div>
              <ul className='md:flex h-full items-center text-sm text-gray-600 dark:text-dark hidden'>
                {
                  props.menus.map((m) => {
                    return <Item key={m.id} item={m}/>;
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}