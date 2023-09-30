import {getAuthorCardData} from '@/setting'
import {getCategoryList} from "@/api/category";
import TimeLineItem from "@/components/TimeLineItem";

export default async function () {
  const authorData = await getAuthorCardData()
  const {data} = await getCategoryList()
  console.log(data,111)
  return (
    <div className="bg-white card-shadow dark:bg-dark dark:card-shadow-dark py-4 px-8 md:py-6 md:px-8">
      <div>
        <div className="text-2xl md:text-3xl text-gray-700 text-center dark:text-dark">
          分类
        </div>
        <div
          className="text-center text-gray-600 text-sm mt-2 mb-4 font-light dark:text-dark">{`${authorData.catelogNum} 分类 × ${authorData.postNum} 文章`}</div>
      </div>
      <div className="flex flex-col mt-2">
        {data.map((item) => {
          return (
            <TimeLineItem
              openArticleLinksInNewWindow={
                true
              }
              defaultOpen={false}
              key={item.name}
              date={item.name}
              articleCount={item.articleCount}
              showYear={true}
            ></TimeLineItem>
          );
        })}
      </div>
    </div>
  )
}