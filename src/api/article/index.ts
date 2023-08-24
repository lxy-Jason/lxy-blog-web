import request from "@/api/request";
import {Article} from "@/types/article";

type ArticleData = {
  data: Article[],
  msg: string
}

export async function getArticleList(params): Promise<ArticleData> {
  return await request.post('/article/getArticleList', params)
}

export async function getArticleById(id): Promise<{
  data: Article,
  msg: string
}> {
  return await request.get(`/article/getArticleById/${id}`)
}