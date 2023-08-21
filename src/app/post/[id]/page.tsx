import {Article} from "@/types/article";
import {websiteData} from "@/setting";
import {getArticlePath} from "@/utils/getArticlepath";
import PostCard from "@/components/postCard";
import {articles} from "@/types/article";

const article = articles[0];
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
  showSubMenu: "true" | "false";
}

export default function () {

  return (

    <PostCard
      showEditButton={websiteData.showEditButton === "true"}
      openArticleLinksInNewWindow={
        websiteData.openArticleLinksInNewWindow == "true"
      }
      private={article.private}
      top={article.top || 0}
      id={getArticlePath(article)}
      key={article.id}
      title={article.title}
      updatedAt={new Date(article.updatedAt)}
      createdAt={new Date(article.createdAt)}
      category={article.category}
      content={article.content || ""}
      type={"article"}
      enableComment={websiteData.enableComment}
    ></PostCard>
  )
}