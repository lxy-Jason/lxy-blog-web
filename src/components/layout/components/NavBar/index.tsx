import { MenuItem, theme } from '@/types/layout';
import { useContext, useEffect, useState } from 'react';
import Headroom from 'headroom.js';
import { ThemeContext } from '@/utils/themeContext';
import Link from 'next/link';
import Item from './components/item';
import ThemeButton from './components/themeButton';
import KeyCard from "@/components/KeyCard";
import SearchCard from "@/components/SearchCard";

export default function (props: {
  logo: string;
  logoDark: string;
  categories: string[];
  setOpen: (open: boolean) => void;
  isOpen: boolean;
  siteName: string;
  menus: MenuItem[];
  // showSubMenu: "true" | 'false'
  // showFriends: 'true' | 'false'
  // showRss: 'true' | 'false'
  // headerLeftContent: 'siteName' | 'siteLogo'
  defaultTheme: theme;
  // subMenuOffset: number,
  // openArticleLinksInNewWindow: Boolean
  // children: any //不知道为什么要加这个
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [headroom, setHeadroom] = useState<Headroom>();
  // const {theme} = useContext(ThemeContext)

  // const picUrl = useMemo(() => {
  //   if (theme.includes("dark") && props.logoDark && props.logoDark !== '') {
  //     return props.logoDark
  //   }
  //   return props.logo;
  // }, [theme, props])
  useEffect(() => {
    const el = document.querySelector('#nav');
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
      <SearchCard
        openArticleLinksInNewWindow={true}
        visible={showSearch}
        setVisible={setShowSearch}
      ></SearchCard>
      <div
        id='nav'
        className=' dark:bg-dark nav-shadow dark:nav-shadow-dark sticky top-0 bg-white'
        style={{ zIndex: 90 }}>
        {/*导航栏部分*/}
        <div
          className=' dark:border-nav-dark  flex h-14 w-full items-center border-b border-gray-200'
          style={{ height: 56 }}>
          {/*导航栏左边logo部分*/}
          <div className='mx-4 flex items-center'>
            <Link href='/'>
              <div className='dark:text-dark mr-4 hidden cursor-pointer select-none text-lg font-medium  text-gray-800 md:block lg:text-xl'>
                {props.siteName}
              </div>
            </Link>
          </div>
          {/*todo移动端适配内容*/}

          {/*导航菜单项 + 右边内容*/}
          <div className='nav-content flex h-full flex-grow justify-between'>
            {/*/!*移动端适配todo*!/*/}
            <ul className='dark:text-dark hidden h-full items-center text-sm text-gray-600 md:flex'>
              {props.menus.map((m) => {
                return <Item key={m.id} item={m} />;
              })}
            </ul>
            {/*导航栏右边*/}
            <div className='nav-action flex'>
              <div
                onClick={() => {
                  setShowSearch(true);
                  document.body.style.overflow = "hidden";
                }}
                title="搜索"
                className="flex group transform hover:scale-110 transition-all select-none cursor-pointer"
              >
                <div
                  className="flex items-center mr-0 sm:mr-2 hover:cursor-pointer   transition-all dark:text-dark fill-gray-600">
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2305"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M789.804097 737.772047 742.865042 784.699846 898.765741 940.600545 945.704796 893.672746Z"
                      p-id="2306"
                    ></path>
                    <path
                      d="M456.92259 82.893942c-209.311143 0-379.582131 170.282245-379.582131 379.582131s170.270988 379.570875 379.582131 379.570875c209.287607 0 379.558595-170.270988 379.558595-379.570875S666.210197 82.893942 456.92259 82.893942zM770.128989 462.477097c0 172.721807-140.508127 313.229934-313.206398 313.229934-172.720783 0-313.229934-140.508127-313.229934-313.229934s140.508127-313.229934 313.229934-313.229934C629.620861 149.247162 770.128989 289.75529 770.128989 462.477097z"
                      p-id="2307"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center ">
                  <KeyCard type="search"></KeyCard>
                </div>
              </div>
              <ThemeButton defaultTheme={props.defaultTheme}></ThemeButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
