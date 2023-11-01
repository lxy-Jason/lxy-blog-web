import { useEffect, useRef } from 'react';
import Headroom from 'headroom.js';
import MarkdownTocBar from './components/MarkdownTocBar';
import { selectPost, useSelector } from '@/lib/redux';

export default function (props: { showSubMenu: 'true' | 'false' }) {
  const { current } = useRef({ hasInit: false });
  const article = useSelector(selectPost);
  useEffect(() => {
    if (!current.hasInit) {
      const el = document.querySelector('#toc-card');
      if (el) {
        current.hasInit = true;
        const headroom = new Headroom(el, {
          classes: {
            initial: `side-bar${
              props.showSubMenu == 'true' ? '' : ' no-submenu'
            }`,
            pinned: 'side-bar-pinned',
            unpinned: 'side-bar-unpinned',
            top: 'side-bar-top',
            notTop: 'side-bar-not-top',
          },
        });
        headroom.init();
      }
    }
  }, [current]);
  return (
    <div className='sticky' id='toc-card'>
      <div
        id='toc-container'
        className='card-shadow dark:card-shadow-dark dark:bg-dark ml-2 w-60 overflow-y-auto bg-white'
        style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <MarkdownTocBar content={article.content} headingOffset={56} />
      </div>
    </div>
  );
}
