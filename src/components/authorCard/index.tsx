'use client';
import { AuthorCardProps } from '@/types/layout';
import ImageBox from '@/components/imageBox';
import { useContext, useMemo } from 'react';
import { ThemeContext } from '@/utils/themeContext';
import Link from 'next/link';

export default function (props: { option: AuthorCardProps }) {
  const { theme } = useContext(ThemeContext);
  const logoUrl = useMemo(() => {
    if (
      theme.includes('dark') &&
      props.option.logoDark &&
      props.option.logoDark !== ''
    ) {
      return props.option.logoDark;
    }
    return props.option.logo;
  }, [theme, props]);
  return (
    <div id='author-card' className='sticky '>
      <div className='card-shadow dark:bg-dark dark:card-shadow-dark ml-2 flex w-52 flex-col  items-center justify-center bg-white pb-4 pt-6'>
        <div className='flex flex-col items-center justify-center px-10'>
          <ImageBox
            alt={'author logo'}
            className={'dark:filter-dark  rounded-full'}
            src={logoUrl}
            lazyLoad={false}
            width={120}
            height={120}></ImageBox>
          <div className='dark:text-dark mb-2 mt-2 font-semibold text-gray-600'>
            {props.option.author}
          </div>
          <div className='dark:text-dark-light mb-2 text-sm text-gray-500'>
            {props.option.desc}
          </div>
          <div className='flex'>
            <Link href='/timeline'>
              <div className='dark:text-dark group flex flex-col items-center justify-center px-1 text-sm text-gray-600 '>
                <div className='dark:group-hover:text-dark-hover font-bold group-hover:font-black group-hover:text-gray-900'>
                  {props.option.postNum}
                </div>
                <div className='dark:text-dark-light dark:group-hover:text-dark-hover text-gray-500 group-hover:font-normal group-hover:text-gray-900'>
                  日志
                </div>
              </div>
            </Link>
            <Link href='/category'>
              <div className='dark:text-dark group flex flex-col items-center justify-center px-1 text-sm text-gray-600'>
                <div className='dark:group-hover:text-dark-hover font-bold group-hover:font-black group-hover:text-gray-900'>
                  {props.option.catelogNum}
                </div>
                <div className='dark:text-dark-light dark:group-hover:text-dark-hover text-gray-500 group-hover:font-normal group-hover:text-gray-900'>
                  分类
                </div>
              </div>
            </Link>
            {/*<Link href="/tag">*/}
            {/*  <div*/}
            {/*    className="group flex flex-col justify-center items-center text-gray-600 text-sm px-1 dark:text-dark">*/}
            {/*    <div*/}
            {/*      className="group-hover:text-gray-900 font-bold group-hover:font-black dark:group-hover:text-dark-hover">*/}
            {/*      {props.option.tagNum}*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*      className=" group-hover:text-gray-900 group-hover:font-normal text-gray-500 dark:text-dark-light dark:group-hover:text-dark-hover">*/}
            {/*      标签*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</Link>*/}
          </div>
        </div>
        {/*社交媒体账号*/}
        {/*<div className="mt-4 w-full">*/}
        {/*  <SocialCard socials={props.option.socials}></SocialCard>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
