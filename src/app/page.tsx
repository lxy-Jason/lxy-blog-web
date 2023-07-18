import {LayoutProps} from "@/types/layout";
import {websiteData} from "@/setting";
import Layout from '@/components/layout'

export interface IndexPageProps {
  layoutProps: LayoutProps;
}

export default function Home() {
  return (
    <Layout
      option={websiteData}
      title={websiteData.siteName}
    >

    </Layout>
  );
}
