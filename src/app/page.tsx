import {websiteData, authorCardData} from "@/setting";
import AuthorCard from "@/components/authorCard";
import PostCard from "@/components/postCard";
import {articles, getArticle} from "@/types/article";
import {getArticlePath} from "@/utils/getArticlepath";
import RootLayout from "@/app/layout";
import {getArticleList} from "@/api/article";
//props数据目前使用setting中的数据
export default function Home() {
  return (
    articles.map((article) => (
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
          type={"overview"}
          enableComment={websiteData.enableComment}
        ></PostCard>
      )
    )
  )
}
console.log(111)
