import { Article } from '@/types/article';
import { getArticleList } from '@/api/article';
import PostCard from '@/components/postCard';
import { websiteData } from '@/setting';
import PageNav from '@/components/pageNav';
import React from 'react';

export default async function ({ params }) {
  console.log(params);
  const { num } = params;
  const { data } = await getArticleList({ page: num, pageSize: 5 });
  return (
    <>
      <div className='space-y-2 md:space-y-4'>
        {data.list.map((article) => (
          <PostCard
            showEditButton={websiteData.showEditButton === 'true'}
            openArticleLinksInNewWindow={
              websiteData.openArticleLinksInNewWindow == 'true'
            }
            private={article.private || false}
            top={article.top || 0}
            id={article._id}
            key={article._id}
            title={article.title}
            path={article.path}
            updatedAt={new Date(article.updatedAt)}
            createdAt={new Date(article.createdAt)}
            category={article.category}
            content={article.content || ''}
            type={'overview'}
            enableComment={websiteData.enableComment}></PostCard>
        ))}
      </div>
      <PageNav
        total={data.total}
        current={Number(num)}
        base={'/'}
        more={'/page'}></PageNav>
    </>
  );
}