import { MenuItem, theme } from '@/types/layout';
import { useContext, useEffect, useState } from 'react';
import Headroom from 'headroom.js';
import { ThemeContext } from '@/utils/themeContext';
import Link from 'next/link';
import Item from './components/item';
import ThemeButton from './components/themeButton';

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
  // const [showSearch, setShowSearch] = useState(false);
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
              <ThemeButton defaultTheme={props.defaultTheme}></ThemeButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
