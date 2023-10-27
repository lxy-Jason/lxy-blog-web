import request from '@/api/request';
import {
  Article,
  ArticleData,
  categoryArticleList,
  timelineData,
} from '@/types/article';

export async function getArticleList(params): Promise<ArticleData> {
  return await request.post('/article/getArticleList', params);
}

export async function getArticleById(id): Promise<{
  data: Article;
  msg: string;
}> {
  return await request.get(`/article/getArticleById/${id}`);
}

export async function getAllArticleNum(): Promise<{
  data: number;
  msg: string;
}> {
  return await request.get('/article/getAllArticleNum');
}

export async function getArticleCountByCategoryName(
  name,
): Promise<categoryArticleList> {
  return await request.get(`/article/getArticleCountByCategoryName/${name}`);
}

export async function getTimelineInfo(): Promise<timelineData> {
  return await request.get(`/article/getTimelineInfo`);
}
