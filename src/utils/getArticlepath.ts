import { Article } from '@/types/article'

export const getArticlePath = (
  article: Article | { id: number; pathname?: string }
) => {
  const { id, pathname } = article;
  return `${pathname ? pathname : id}`; //有路径用路径没路径用id
};
