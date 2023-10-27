export type categoryList = {
  data: {
    name: string;
    articleList: {
      title: string;
      date: string;
      id: string;
    }[];
  }[];
  msg: string;
};
