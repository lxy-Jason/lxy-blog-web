import request from "@/api/request";
import {categoryList} from "@/types/category";

export async function getCategoryList(): Promise<categoryList> {
  return await request.get('/category/getCategoryList')
}