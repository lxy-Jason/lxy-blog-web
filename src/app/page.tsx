import {websiteData, authorCardData} from "@/setting";
import PostCard from "@/components/postCard";
import {Article, articles, getArticle} from "@/types/article";
import {getArticleList} from "@/api/article";
import PageNav from "@/components/pageNav";
import React from "react";


//props数据目前使用setting中的数据
export default async function Home() {
  const {data}: { data: Article[] } = await getArticleList({page: 1, pageSize: 5})
  return (
    <>
      <div className="space-y-2 md:space-y-4">
        {data.map((article) => (
            <PostCard
              showEditButton={websiteData.showEditButton === "true"}
              openArticleLinksInNewWindow={
                websiteData.openArticleLinksInNewWindow == "true"
              }
              private={article.private || false}
              top={article.top || 0}
              id={article._id}
              key={article._id}
              title={article.title}
              path={article.path}
              updatedAt={new Date(article.updatedAt)}
              createdAt={new Date(article.createdAt)}
              category={""}
              content={article.content || ""}
              type={"overview"}
              enableComment={websiteData.enableComment}
            ></PostCard>
          )
        )}
      </div>
      <PageNav
        total={10}
        current={1}
        base={"/"}
        more={"/page"}
      ></PageNav>
    </>

  )
}
