import request from "@/api/request";
import {Article, ArticleData} from "@/types/article";



export async function getArticleList(params): Promise<ArticleData> {
  return await request.post('/article/getArticleList', params)
}

export async function getArticleById(id): Promise<{
  data: Article,
  msg: string
}> {
  return await request.get(`/article/getArticleById/${id}`)
}

export async function getAllArticleNum(): Promise<{ data: number, msg:string }> {
  return await request.get('/article/getAllArticleNum')
}