import { useEffect, useRef } from 'react';
import Headroom from 'headroom.js';
import MarkdownTocBar from './components/MarkdownTocBar';

export default function (props: {
  content: string;
  showSubMenu: 'true' | 'false';
}) {
  const { current } = useRef({ hasInit: false });
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
        className='card-shadow dark:card-shadow-dark dark:bg-dark ml-2 w-60 overflow-y-auto bg-white pb-2'
        style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <MarkdownTocBar content={props.content} headingOffset={56} />
      </div>
    </div>
  );
}
