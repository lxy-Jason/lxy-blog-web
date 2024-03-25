/*
 * @Author: xiangyue_li
 * @Date: 2023-07-15 18:12:06
 * @LastEditors: xiangyue_li
 */
// import type {Metadata} from 'next'
import '@/styles';
import {getSiteData, websiteData} from '@/setting';
import Layout from '@/components/layout';
import React from 'react';
import {Providers} from '@/lib/providers';
import {Metadata} from "next";


export default async function RootLayout(props: React.PropsWithChildren) {
  const siteData = await getSiteData();
  return (
    <Providers>
      <html lang='en'>
      <body>
      <Layout
        option={siteData}
        title={siteData.siteName}
        authorCardData={siteData}>
        {props.children}
      </Layout>
      </body>
      </html>
    </Providers>
  );
}

export async function generateMetadata(
): Promise<Metadata> {
  // fetch data
  const data = await getSiteData();
  console.log(data.favicon)
  return {
    title: data.siteName,
    description: data.siteDesc,
  }
}
