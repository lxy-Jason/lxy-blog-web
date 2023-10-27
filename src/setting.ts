import {
  AuthorCardProps,
  LayoutProps,
  MenuItem,
  SocialItem,
  SocialType,
} from '@/types/layout';
import { getCategoryList } from '@/api/category';
import { getAllArticleNum } from '@/api/article';

export const defaultMenu: MenuItem[] = [
  {
    id: 0,
    name: '首页',
    value: '/',
    level: 0,
  },
  // {
  //     id: 1,
  //     name: "标签",
  //     value: "/tag",
  //     level: 0,
  // },
  {
    id: 2,
    name: '分类',
    value: '/category',
    level: 0,
  },
  {
    id: 3,
    name: '时间线',
    value: '/timeline',
    level: 0,
  },
  // {
  //     id: 4,
  //     name: "友链",
  //     value: "/link",
  //     level: 0,
  // },
  // {
  //     id: 5,
  //     name: "关于",
  //     value: "/about",
  //     level: 0,
  // },
];

export const websiteData: LayoutProps = {
  description: 'just a blog website',
  logo: 'https://avatars.githubusercontent.com/u/94227696?s=400&u=7fff9765087b9819f0f48ba7428e972d5b1baaee&v=4',
  categories: ['前端', '后端'],
  favicon:
    'https://avatars.githubusercontent.com/u/94227696?s=400&u=7fff9765087b9819f0f48ba7428e972d5b1baaee&v=4',
  siteName: 'lxy-blog',
  siteDesc: 'just a blog',
  version: '1.0.0',
  menus: defaultMenu,
  logoDark:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpc.meitu.com%2Farticle%2Ftupianbianji1%2F0tupianbianji280%3FparamsObj%3D%257B%2522id%2522%253A%25220tupianbianji280%2522%252C%2522articleId%2522%253A%25221078%2522%252C%2522tagId%2522%253A%252224%2522%252C%2522tagName%2522%253A%2522%25E5%259B%25BE%25E7%2589%2587%25E7%25BC%2596%25E8%25BE%2591%2522%257D&psig=AOvVaw1IcDq1eyald0SRbiiFkGq3&ust=1689774632713000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCOjktJuzmIADFQAAAAAdAAAAABAE',
  defaultTheme: 'light',
  showEditButton: 'true',
  openArticleLinksInNewWindow: 'true',
  enableComment: 'false',
};

const socialsData: SocialItem[] = [
  {
    updatedAt: '2023-7-29',
    type: 'github',
    value: 'https://github.com/lxy-Jason',
  },
  {
    updatedAt: '2023-7-29',
    type: 'email',
    value: 'sbishgtlo@gmail.com',
  },
];

export const getAuthorCardData = async (): Promise<AuthorCardProps> => {
  const { data: catelogeData } = await getCategoryList();
  const { data: postNum } = await getAllArticleNum();
  return {
    author: 'lxy-Jason',
    desc: 'to do some cool',
    logo: 'https://avatars.githubusercontent.com/u/94227696?s=400&u=7fff9765087b9819f0f48ba7428e972d5b1baaee&v=4',
    logoDark:
      'https://tupian.qqw21.com/article/UploadPic/2013-4/201342774330725.jpg',
    postNum: postNum,
    catelogNum: catelogeData.length,
    tagNum: 0,
    enableComment: 'false',
    socials: socialsData,
  };
};