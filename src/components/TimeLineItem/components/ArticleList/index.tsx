import dayjs from 'dayjs';
import Link from 'next/link';

import { getTarget } from '@/utils/link';
import { getArticleCountByCategoryName } from '@/api/article';
import { timelineArticleDate } from '@/types/article';

export default (props: {
  name: String;
  articleList: timelineArticleDate[];
  showYear: Boolean;
}) => {
  return (
    <div className='space-y-2'>
      {props.articleList.map((article) => (
        <Link
          href={`/post/${article.id}`}
          key={article.id}
          target={getTarget(true)}>
          <div className='dark:border-dark-2 dark:hover:border-nav-dark-light group flex cursor-pointer items-center border-b border-dashed border-gray-200 pb-1 hover:border-gray-400 '>
            <div className='dark:text-dark-400 dark:group-hover:text-dark-light flex-shrink-0 flex-grow-0  text-sm text-gray-400 group-hover:text-gray-600'>
              {props.showYear
                ? dayjs(article.date).format('YYYY-MM-DD')
                : dayjs(article.date).format('MM-DD')}
            </div>
            <div className='dark:text-dark dark:group-hover:text-dark ml-2 flex-shrink flex-grow overflow-hidden text-base text-gray-600 group-hover:text-gray-800 md:ml-4'>
              {article.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
