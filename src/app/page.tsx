import {LayoutProps} from "@/types/layout";
import {websiteData, authorCardData} from "@/setting";
import Layout from '@/components/layout'
import AuthorCard from "@/components/authorCard";

//props数据目前使用setting中的数据
export default function Home() {
  return (
    <Layout
      option={websiteData}
      title={websiteData.siteName}
      sideBar={<AuthorCard option={authorCardData}></AuthorCard>}
    >

    </Layout>
  );
}
