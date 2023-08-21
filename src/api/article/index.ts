import request from "@/api/request";

export function getArticleList(params: object) {

  return request.post('/api/getArticleList', params);
}