'use client';

import TopPinIcon from './components/topPinIcon';
import { Title } from './components/title';
import Link from 'next/link';
import { getTarget } from '@/utils/getTarget';
import Markdown from '@/components/markdown';
import { useMemo, useState } from 'react';
import { SubTitle } from '@/components/postCard/components/subTitle';

export default function (props: {
  id: number | string;
  title: string;
  updatedAt: Date;
  createdAt: Date;
  category: string;
  content: string;
  type: 'overview' | 'article' | 'about';
  path: string;
  pay?: string[];
  payDark?: string[];
  author?: string;
  tags?: string[];
  next?: { id: number; title: string; pathname?: string };
  pre?: { id: number; title: string; pathname?: string };
  enableComment: 'true' | 'false';
  top?: number;
  private?: boolean;
  // showDonateInAbout?: boolean;
  // hideDonate?: boolean;
  // hideCopyRight?: boolean;
  openArticleLinksInNewWindow: boolean;
  // copyrightAggreement: string;
  // customCopyRight: string | null;
  // showExpirationReminder: boolean;
  showEditButton: boolean;
}) {
  const { content } = props;
  const [lock, setLock] = useState(props.type != 'overview' && props.private);

  const calContent = useMemo(() => {
    if (props.type == 'overview') {
      if (props.private) {
        return '该文章已加密，点击 `阅读全文` 并输入密码后方可查看。';
      }
      const r = content.split('<!-- more -->');
      if (r.length > 1) {
        return r[0];
      } else {
        return content;
      }
    } else {
      return content.replace('<!-- more -->', '');
    }
  }, [props, lock, content]);

  return (
    <div className={'post-card-wrapper mb-5'}>
      <div
        style={{ position: 'relative' }}
        id='post-card'
        className='post-card card-shadow dark:bg-dark dark:nav-shadow-dark overflow-hidden bg-white px-1 py-4 sm:px-3 md:px-5  md:py-6'>
        {props.top != 0 && <TopPinIcon></TopPinIcon>}
        <Title
          type={props.type}
          id={props.id}
          title={props.title}
          openArticleLinksInNewWindow={props.openArticleLinksInNewWindow}
          showEditButton={props.showEditButton}></Title>

        {/*  子标题todo*/}
        <SubTitle
          openArticleLinksInNewWindow={props.openArticleLinksInNewWindow}
          type={props.type}
          id={props.id}
          updatedAt={props.updatedAt}
          createdAt={props.createdAt}
          catelog={props.category}
          enableComment={props.enableComment}
        />
        <div className='relative mx-2  mt-4 text-sm text-gray-600 md:text-base'>
          <div
            className='overflow-hidden'
            style={{
              minHeight: '300px',
              maxHeight: props.type === 'overview' ? '500px' : '',
            }}>
            <Markdown content={calContent}></Markdown>
          </div>
          {props.type === 'overview' && (
            <div className='absolute bottom-0 z-10 flex w-full justify-center bg-gradient-to-b from-transparent to-white pb-2.5 pt-16 dark:to-black'>
              <Link
                href={`/post/${props.id}`}
                target={getTarget(props.openArticleLinksInNewWindow)}>
                <div
                  className=' dark:bg-dark dark:hover:bg-dark-light dark:hover:text-dark-r
                    dark:border-dark dark:text-dark bg rounded border-2 border-gray-800 bg-white px-2
                    py-1 text-sm text-gray-700 transition-all hover:bg-gray-800 hover:text-gray-50
                    md:text-base
                     '>
                  阅读全文
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
