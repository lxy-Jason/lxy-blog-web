import {MenuItem, theme} from "@/types/layout";
import {useContext, useEffect, useMemo, useState} from 'react'
import Headroom from 'headroom.js'
import {ThemeContext} from "@/utils/themeContext";
import Link from "next/link";
import Item from "@/components/NavBar/components/item";
import ThemeButton from "@/components/NavBar/components/themeButton";

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
  // const [showSearch, setShowSearch] = useState(false);
  const [headroom, setHeadroom] = useState<Headroom>()
  const {theme} = useContext(ThemeContext)

  // const picUrl = useMemo(() => {
  //   if (theme.includes("dark") && props.logoDark && props.logoDark !== '') {
  //     return props.logoDark
  //   }
  //   return props.logo;
  // }, [theme, props])
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
            {/*todo移动端适配内容*/}
            {/*导航栏左边*/}
            <Link href="/">
              <div
                className="text-gray-800 cursor-pointer select-none text-lg dark:text-dark lg:text-xl font-medium  mr-4 hidden md:block">
                {props.siteName}
              </div>
            </Link>
            {/*导航菜单项 + 右边内容*/}
            <div
              className="flex justify-between h-full flex-grow nav-content"
            >
              {/*/!*移动端适配todo*!/*/}
              <ul className='md:flex h-full items-center text-sm text-gray-600 dark:text-dark hidden'>
                {
                  props.menus.map((m) => {
                    return <Item key={m.id} item={m}/>;
                  })
                }
              </ul>
              {/*导航栏右边*/}
              <div className='flex nav-action'>
                <ThemeButton defaultTheme={props.defaultTheme}></ThemeButton>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}