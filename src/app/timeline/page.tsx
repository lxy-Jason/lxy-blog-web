import { getSiteData } from '@/setting';
import { getTimelineInfo } from '@/api/article';
import TimeLineItem from '@/components/TimeLineItem';

export default async function () {
  const authorData = await getSiteData();
  const { data } = await getTimelineInfo();
  return (
    <div className='card-shadow dark:bg-dark dark:card-shadow-dark bg-white px-8 py-4 md:px-8 md:py-6'>
      <div>
        <div className='dark:text-dark text-center text-2xl text-gray-700 md:text-3xl'>
          时间线
        </div>
        <div className='dark:text-dark mb-4 mt-2 text-center text-sm font-light text-gray-600'>
          {`${authorData.catelogNum} 分类 × ${authorData.postNum} 文章`}
        </div>
      </div>
      <div className='mt-2 flex flex-col'>
        {Object.keys(data).map((eachDate: string) => {
          return (
            <TimeLineItem
              openArticleLinksInNewWindow={true}
              defaultOpen={true}
              key={`timeline-dateitem-${eachDate}`}
              name={eachDate}
              articleList={data[eachDate]}></TimeLineItem>
          );
        })}
      </div>
    </div>
  );
}
