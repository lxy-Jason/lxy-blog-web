'use client';
import { useState } from 'react';
import ArticleList from './components/ArticleList';
import { timelineArticleDate } from '@/types/article';

export default function (props: {
  name: string;
  defaultOpen?: boolean;
  showYear?: boolean;
  openArticleLinksInNewWindow: boolean;
  articleList: timelineArticleDate[];
}) {
  const [visible, setVisible] = useState(Boolean(props.defaultOpen));
  const calMaxHeight = props.articleList.length * 50;

  return (
    <div className='mb-4 overflow-hidden'>
      <div className='z-50 mb-4 flex items-center '>
        <div className='dark:text-dark text-xl font-bold md:text-2xl'>
          {props.name}
        </div>

        <div className='dark:text-dark-400 ml-2 text-sm font-normal text-gray-400 md:text-base'>{`${props.articleList.length}篇`}</div>
        <div
          onClick={() => {
            setVisible(!visible);
          }}
          style={{ width: 22.5 }}
          className='dark:text-dark-light dark:hover:bg-dark-light dark:hover:text-dark-r dark:bg-dark-1 ml-2 inline-block cursor-pointer  rounded bg-gray-200 text-center text-lg font-normal leading-tight transition-all hover:bg-gray-500 hover:text-gray-100'>
          +
        </div>
      </div>
      <div
        className='z-0 transition-all '
        style={{ maxHeight: visible ? `${calMaxHeight}px` : '0' }}>
        <ArticleList
          name={props.name}
          articleList={props.articleList}
          showYear={props.showYear}></ArticleList>
      </div>
    </div>
  );
}
