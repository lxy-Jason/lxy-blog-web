'use client'
import {AuthorCardProps} from "@/types/layout";
import ImageBox from "@/components/imageBox";
import {useContext, useMemo} from "react";
import {ThemeContext} from "@/utils/themeContext";
import Link from "next/link";

export default function (props: {
  option: AuthorCardProps
}) {
  const {theme} = useContext(ThemeContext)
  const logoUrl = useMemo(() => {
    if (theme.includes('dark') && props.option.logoDark && props.option.logoDark !== '') {
      return props.option.logoDark
    }
    return props.option.logo
  }, [theme, props])
  return (
    <div id="author-card" className="sticky ">
      <div
        className="w-52 flex flex-col justify-center items-center bg-white pt-6  pb-4 card-shadow ml-2 dark:bg-dark dark:card-shadow-dark">
        <div className="px-10 flex flex-col justify-center items-center">
          <ImageBox
            alt={'author logo'}
            className={'rounded-full  dark:filter-dark'}
            src={logoUrl}
            lazyLoad={false}
            width={120}
            height={120}
          ></ImageBox>
          <div className="mt-2 font-semibold text-gray-600 mb-2 dark:text-dark">
            {props.option.author}
          </div>
          <div className="text-sm text-gray-500 mb-2 dark:text-dark-light">
            {props.option.desc}
          </div>
          <div className="flex">
            <Link href="/timeline">
              <div
                className="group flex flex-col justify-center items-center text-gray-600 text-sm px-1 dark:text-dark ">
                <div
                  className="group-hover:text-gray-900 font-bold group-hover:font-black dark:group-hover:text-dark-hover">
                  {props.option.postNum}
                </div>
                <div
                  className="group-hover:text-gray-900 group-hover:font-normal text-gray-500 dark:text-dark-light dark:group-hover:text-dark-hover">
                  日志
                </div>
              </div>
            </Link>
            <Link href="/category">
              <div
                className="group flex flex-col justify-center items-center text-gray-600 text-sm px-1 dark:text-dark">
                <div
                  className="group-hover:text-gray-900 font-bold group-hover:font-black dark:group-hover:text-dark-hover">
                  {props.option.catelogNum}
                </div>
                <div
                  className="group-hover:text-gray-900 group-hover:font-normal text-gray-500 dark:text-dark-light dark:group-hover:text-dark-hover">
                  分类
                </div>
              </div>
            </Link>
            <Link href="/tag">
              <div
                className="group flex flex-col justify-center items-center text-gray-600 text-sm px-1 dark:text-dark">
                <div
                  className="group-hover:text-gray-900 font-bold group-hover:font-black dark:group-hover:text-dark-hover">
                  {props.option.tagNum}
                </div>
                <div
                  className=" group-hover:text-gray-900 group-hover:font-normal text-gray-500 dark:text-dark-light dark:group-hover:text-dark-hover">
                  标签
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*社交媒体账号*/}
        {/*<div className="mt-4 w-full">*/}
        {/*  <SocialCard socials={props.option.socials}></SocialCard>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}