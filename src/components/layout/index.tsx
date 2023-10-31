/*
 * @Author: xiangyue_li
 * @Date: 2023-07-15 18:57:46
 * @LastEditors: xiangyue_li
 */
'use client';
import Head from 'next/head';
import {AuthorCardProps, LayoutProps} from '@/types/layout';
import React, {useState, useRef} from 'react';
import {ThemeContext, RealThemeType} from '@/utils/themeContext';
import {getTheme} from '@/utils/theme';
import {Toaster} from 'react-hot-toast';
import NavBar from './components/NavBar';
import LayoutBody from './components/layoutBody';
import BackToTopBtn from '@/components/BackToTop';
import {usePathname} from 'next/navigation';
import AuthorCard from '@/components/authorCard';
import Toc from '@/components/Toc';

export default function (props: {
  option: LayoutProps;
  title: string;
  authorCardData: AuthorCardProps;
  children: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const {current} = useRef({hasInit: false})
  const [theme, setTheme] = useState<RealThemeType>(getTheme('auto'));
  const path = usePathname();
  const isPost = path.slice(1, 5) === 'post';

  return (
    <>
      <Head>
        <meta name='description' content={props.option.description}></meta>
        <meta name='robots' content='index, follow'></meta>
      </Head>
      <BackToTopBtn></BackToTopBtn>
      {/*todo,谷歌和百度统计*/}
      <ThemeContext.Provider
        value={{
          setTheme,
          theme,
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
          setOpen={setIsOpen}></NavBar>
        {/*主体部分*/}
        <div className=' mx-auto  px-2  py-2 text-gray-700 md:px-4 md:py-4  lg:px-6 '>
          <LayoutBody
            sideBar={
              isPost ? (
                <Toc showSubMenu={'true'}></Toc>
              ) : (
                <AuthorCard option={props.authorCardData}></AuthorCard>
              )
            }>
            {props.children}
          </LayoutBody>
        </div>
      </ThemeContext.Provider>
    </>
  );
}
