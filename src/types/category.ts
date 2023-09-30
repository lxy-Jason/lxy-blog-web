export type categoryList = {
  data: {
    name: string,
    articleCount: number,
    articleList: {
      title: string,
      updatedAt: string
    }[]
  }[],
  msg: string,
}