/*
 * @Author: xiangyue_li
 * @Date: 2023-07-15 18:46:24
 * @LastEditors: xiangyue_li
 */
export interface LayoutProps {
  description: string;
  // ipcNumber: string;
  // since: string;
  // ipcHref: string;
  // // 公安备案
  // gaBeianNumber: string;
  // gaBeianUrl: string;
  // gaBeianLogoUrl: string;
  // copyrightAggreement: string;
  logo: string;
  categories: string[];
  favicon: string;
  siteName: string;
  siteDesc: string;
  // baiduAnalysisID: string;
  // gaAnalysisID: string;
  logoDark: string;
  version: string;
  menus: MenuItem[];
  // showSubMenu: "true" | "false";
  // showAdminButton: "true" | "false";
  // showFriends: "true" | "false";
  // headerLeftContent: "siteLogo" | "siteName";
  // enableComment: "true" | "false";
  defaultTheme: "auto" | "dark" | "light";
  // enableCustomizing: "true" | "false";
  // showDonateButton: "true" | "false";
  // showCopyRight: "true" | "false";
  // showRSS: "true" | "false";
  // showExpirationReminder: "true" | "false";
  // openArticleLinksInNewWindow: "true" | "false";
  // showEditButton: "true" | "false";
  // subMenuOffset: number;
  // customCss?: string;
  // customScript?: string;
  // customHtml?: string;
  // customHead?: HeadTag[];
}

export interface MenuItem {
  id: number;
  name: string;
  value: string;
  level: number;
  children?: MenuItem[];
}

export interface HeadTag {
  name: string;
  props: Record<string, string>;
  content: string;
}

export type theme = 'auto' | 'light' | 'dark'