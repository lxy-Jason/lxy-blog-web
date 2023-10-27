/*
 * @Author: xiangyue_li
 * @Date: 2023-07-15 18:12:06
 * @LastEditors: xiangyue_li
 */
// import type {Metadata} from 'next'
import '@/styles';
import { getAuthorCardData, websiteData } from '@/setting';
import Layout from '@/components/layout';
import React from 'react';
import AuthorCard from '@/components/authorCard';
// export const metadata: Metadata = {
//   title: 'lxy-blog-web',
//   description: 'lxy-Jason的博客',
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authorCardData = await getAuthorCardData();
  return (
    <html lang='en'>
      <body>
        <Layout
          option={websiteData}
          title={websiteData.siteName}
          sideBar={<AuthorCard option={authorCardData}></AuthorCard>}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
