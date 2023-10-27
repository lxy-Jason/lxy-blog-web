import { getAuthorCardData } from '@/setting';
import { getCategoryList } from '@/api/category';
import TimeLineItem from '@/components/TimeLineItem';

export default async function () {
  const authorData = await getAuthorCardData();
  const { data } = await getCategoryList();
  console.log(data, 222333);
  return (
    <div className='card-shadow dark:bg-dark dark:card-shadow-dark bg-white px-8 py-4 md:px-8 md:py-6'>
      <div>
        <div className='dark:text-dark text-center text-2xl text-gray-700 md:text-3xl'>
          分类
        </div>
        <div className='dark:text-dark mb-4 mt-2 text-center text-sm font-light text-gray-600'>{`${authorData.catelogNum} 分类 × ${authorData.postNum} 文章`}</div>
      </div>
      <div className='mt-2 flex flex-col'>
        {data.map((item) => {
          return (
            <TimeLineItem
              openArticleLinksInNewWindow={true}
              defaultOpen={false}
              key={item.name}
              name={item.name}
              showYear={true}
              articleList={item.articleList}></TimeLineItem>
          );
        })}
      </div>
    </div>
  );
}
