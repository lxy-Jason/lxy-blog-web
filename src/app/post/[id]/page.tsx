'use client';
import { Article } from '@/types/article';
import { websiteData } from '@/setting';
import PostCard from '@/components/postCard';
import { getArticleById } from '@/api/article';
import { useSelector, useDispatch, getDataById, selectPost } from '@/lib/redux';
import { useEffect } from 'react';

export interface PostPagesProps {
  // article: Article;
  pay: string[];
  payDark: string[];
  author: string;
  pre: {
    id: number;
    title: string;
    pathname?: string;
  };
  next: {
    id: number;
    title: string;
    pathname?: string;
  };
  showSubMenu: 'true' | 'false';
}

export default function ({ params }) {
  // const { data: article }: { data: Article } = await getArticleById(params.id);
  // console.log(article);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataById(params.id));
  }, [params, dispatch]);
  const article = useSelector(selectPost);
  return (
    <PostCard
      showEditButton={websiteData.showEditButton === 'true'}
      openArticleLinksInNewWindow={
        websiteData.openArticleLinksInNewWindow == 'true'
      }
      private={article.private}
      top={article.top || 0}
      id={article._id}
      key={article._id}
      title={article.title}
      path={article.path}
      updatedAt={new Date(article.updatedAt)}
      createdAt={new Date(article.createdAt)}
      category={''}
      content={article.content || ''}
      type={'article'}
      enableComment={websiteData.enableComment}></PostCard>
  );
}
