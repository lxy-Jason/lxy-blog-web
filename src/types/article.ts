import {getArticleList} from "@/api/article";

export type Article = {
  content: string;
  // category: string;
  // tags: string[];
  createdAt: string;
  title: string;
  updatedAt: string;
  _id: number;
  top?: number;
  private?: boolean;
  author?: string;
  copyright?: string;
  path: string;
}

//mock数据
export const articles = [
  {
    "title": "因为选择艰难症，自己写了一套开源博客系统",
    "content": "\n\n![合并.png](https://pic.mereith.com/img/1d0dd6572d4487e30d2366b6836eae61.%E5%90%88%E5%B9%B6.png)\n\n> 项目主页: [https://vanblog.mereith.com](https://vanblog.mereith.com)<br/>\n> 开源地址: [https://github.com/mereithhh/van-blog](https://github.com/mereithhh/van-blog)<br/>\n> Demo 站: [https://blog-demo.mereith.com](https://blog-demo.mereith.com)<br/>\n> 喜欢的话可以给个 star 哦 🙏\n\n<!-- more -->\n\n## 前因\n\n我大二那年，第一次接触到了个人博客这个东东。看着别人炫酷的个人网站很羡慕，于是第一次买了一台云服务器，在网上到处搜教程，用 `hexo` 和 `next` 主题部署了我的第一版博客。\n\n那时候抱着巨大的热情，我折腾了背景，折腾了 `live2d`，折腾了鼠标特效，等等。\n\n但用了一阵子觉得有些很不方便。因为 `hexo` 这类的静态网站生成器本身是没有后台的，所以我必须用自己的方式写 `markdown` 文件、敲命令行、发布到网上（那时候还不会搞 CI/CD）。\n\n后面我陆续尝试了其他带后台的博客系统，比如 `typecho` 、`wordpress` ，后者给我的感觉有些臃肿，前者感觉挺依赖主题的，很多也没有满足我的审美，有些特效加多了还挺卡，而且自带的编辑器和图床也没有很好用。\n\n毕业的时候我用 `react` 写了一版带前后台的博客，`SSR` 渲染的博客，但是因为当时没有一个统一的规划，小问题不断，也不支持暗色模式，也没有内置图床，加载速度也并没有很快。\n\n工作后闲暇时间，我又用 `gastby` 重构了一版博客，加载速度快了很多，但本质上 `gastby` 也是个静态页面生成器，而且每次发版都要全量构建。\n\n## 后果\n\n辞职后在家有时间了，我又想折腾一下博客，我的核心要求大概是：\n\n1. 最好是静态页面（`SSG`），方便 `SEO` 和 `CDN`。\n2. 要带一个方便的后台。\n3. 要内置图床，支持剪切板上传图片，支持不同的图床。\n4. 前后台都要支持移动端，都要支持暗色模式且能自动切换。\n5. `SSG` 的话希望不要每次发版都全量构建。\n6. 不要花里胡哨的特效，首屏加载一定要快。\n7. 可以 `docker` 一键部署。\n8. 支持访客统计和评论。\n\n于是我调研了一番，发现现有的没有特别符合要求的，于是干脆自己写了一个，具有以下的特点：\n\n- [x] 快到极致的响应速度，Lighthouse 接近满分。\n- [x] 独一份的按需全自动 HTTPS，甚至不用填域名。\n- [x] 包括完整的前后台和服务端。\n- [x] 前台和后台都为响应式设计，完美适配移动端和多尺寸设备。\n- [x] 前台和后台都支持黑暗模式，并可自动切换。\n- [x] 前台为静态网页（SSG），并支持秒级的增量渲染，每次改动无需重新构建全部页面。\n- [x] 静态网页，CDN 友好。\n- [x] 基于 React，项目工程化，二次开发友好。\n- [x] SEO 和无障碍友好。\n- [x] 版本号展示和更新提醒。\n- [x] 内置强大的分析功能，可统计访客等数据。并配有精美看板。\n- [x] 内嵌评论系统。\n- [x] 强大的 markdown 编辑器，支持图表和数学公式，一键插入 more 标记，一键剪切板及本地图片上传，\n- [x] TOC、草稿、代码复制、访客数、评论数、分类、标签、搜索、加密、友链、打赏、自定义导航栏。\n- [x] 多个布局设置，可自定义页面细节。\n- [x] 支持自定义页面。\n- [x] 可添加具有指定权限的协作者。\n- [x] 高度客制化，可添加自定义 CSS、HTML 和 JS 代码。\n- [x] 内置图床，并支持各种 OSS 图床、github 图床（外部图床基于 picgo）等。\n- [x] 极致轻量化，没有花里胡哨。页面秒切换、图片懒加载。\n- [x] docker 一键部署，支持 ARM 平台。\n- [x] 支持 GA、百度分析\n- [x] 简单易用的后台，支持数据的导出与导入。\n- [x] 完善的 API，完全利用本项目后台和服务端，自己写前端或适配其他页面生成器\n- [x] 有较完善的日志记录，后台可直接查看登录日志和 Caddy 日志。\n\n我把它命名为 [VanBlog](https://vanblog.mereith.com)，有兴趣的话可以试一下哦。\n\n> 项目主页:[https://vanblog.mereith.com](https://vanblog.mereith.com)\n> 开源地址:[https://github.com/mereithhh/van-blog](https://github.com/mereithhh/van-blog)\n> Demo 站: [https://blog-demo.mereith.com](https://blog-demo.mereith.com)\n\n## 一键脚本部署\n\n```bash\ncurl -L https://vanblog.mereith.com/vanblog.sh -o vanblog.sh && chmod +x vanblog.sh && ./vanblog.sh\n```\n\n其他部署方式和详细说明请移步 [项目文档](https://vanblog.mereith.com/guide/docker.html) \n\nPS: 不然的话每次改一点部署文档，所有平台都要改好麻烦233\n\n## 预览图\n\n\n![前台-白色.png](https://pic.mereith.com/img/2afb648e4cd43b8479bba29caa0f5679.%E5%89%8D%E5%8F%B0-%E7%99%BD%E8%89%B2.png)\n\n\n![前台-黑色.png](https://pic.mereith.com/img/2658c90cda2f9a7ef69a9795d05ce6c7.%E5%89%8D%E5%8F%B0-%E9%BB%91%E8%89%B2.png)\n\n\n![后台-白色.png](https://pic.mereith.com/img/7b343a679cdf9a51d6674b1f5ad45dd7.%E5%90%8E%E5%8F%B0-%E7%99%BD%E8%89%B2.png)\n\n\n![后台-黑色.png](https://pic.mereith.com/img/cc4b603d6db746c3fb9b1a34beb74cbc.%E5%90%8E%E5%8F%B0-%E9%BB%91%E8%89%B2.png)\n\n![](https://pic.mereith.com/img/7b0e81378a84eba82e4fbfde9cb5bc7d.clipboard-2022-08-27.png)\n\n",
    "tags": [
      "开源"
    ],
    "top": 99,
    "category": "前端技术",
    "hidden": false,
    "private": false,
    "viewer": 937,
    "visited": 937,
    "createdAt": "2022-08-18T09:48:17.104Z",
    "updatedAt": "2023-06-30T11:15:06.103Z",
    "id": 155,
    "lastVisitedTime": "2023-07-28T13:21:17.696Z",
    "pathname": ""
  },
  {
    "title": "手撸一个nodejs分布式爬虫，还要可视化",
    "content": "曾经我最开始入编程就是从爬虫开始的，后来很久都么接触过相关的技术。最近我有一堆 vps 闲置，配置都不高，不知道干什么用，好像就是 ip 资源比较值钱，为啥不做个爬虫呢？\n\n它必须是分布式的，比如有日志，有重试机制，有任务管理，有可视化看板，还要能检测源站状态。\n\n以前其实学过一些爬虫框架，但现在我想试试以目前的水平能不能手撸一个，毕竟温习原来的框架也需要时间不是。\n\n断断续续写了大半天，写完了，还配了个看板，大概这样子：\n\n![spider.png](https://pic.mereith.com/img/b1079a16dd6ff94ae9d08ee52b0e1d69.spider.webp)\n\n写完了盯着自己的看板，一种成就感不予言表。 不知不觉我好像真的具有了用代码来完成一整个事情的能力🤨（以前只能完成某件事的一部分），所以写一篇文章纪念一下。\n\n<!-- more -->\n\n## 介绍\n\n\n整个架构并不复杂，大概分为几个组件（文件）：\n\n- 任务生成器\n- 任务执行器（spider）\n- 状态上报器\n\n### 任务生成器\n\n这个组件会根据我的需求生成任务上传到数据库中，后面的执行器就会拉取任务执行，任务的状态信息也会存在数据库里。\n\n以小说爬虫举例子，大概这个东西分为两步：\n\n- 探测小说站的所有小说 url 范围\n- 根据这个范围生成任务\n\n每个任务大概有这两个核心字段：\n\n- 任务 url\n- 任务状态: `idle` | `processing` | `success` | `failed`\n\n### 执行器（爬虫）\n大概是这样的：\n\n- 根据最大并行限制，从数据库获取上一步生成的任务。把任务状态改成 processing\n- 爬取数据，保存\n- 如果成功了，状态就是 success，不然就是 failed\n- 中间哪里失败了，就回滚状态\n\n当然，还有一些其他参数，不一一说明。另外我把每一个组件都抽成个类，对于这个组件，只要输入特定几个参数，并实现核心爬取函数就可以了。 改动很少的代码就可以完成不同种类任务的适配。\n\n### 状态上报\n一个很简单的 `prometheus` 上报器，他会每间隔一定时间，抓取数据库中任务表里不同状态的任务数量人后上报。\n\n另外还会定时 `ping` 一下源站，看看延时啥的，也上报一下。 最后配一个看板就好啦。\n\n配看板的过程中顺便温习了一下 `grafana` 和 `prometheus` 的部署和配置 - -\n\n## 结尾\n也许以后我会更好的抽象一下，抽象程度够高的话，我就做一个 `nodejs` 的爬虫框架（起码自己用着很舒服），然后写个 UI、写个后台，做一个爬虫解决方案？\n\n其实我知道，有很多现有的方案，我这么折腾也没啥用，也算是重复造轮子。但是造轮子本身可以检验自己的技术，增加经验，实现之后真的是很快乐的事情，不是吗？\n",
    "tags": [
      "爬虫"
    ],
    "top": 0,
    "category": "后端技术",
    "hidden": false,
    "author": "mereith",
    "pathname": "",
    "private": false,
    "viewer": 35,
    "visited": 35,
    "createdAt": "2023-06-30T11:13:54.615Z",
    "updatedAt": "2023-06-30T11:13:54.615Z",
    "id": 176,
    "lastVisitedTime": "2023-07-29T14:53:08.927Z"
  },
  {
    "title": "HomeLab 分享",
    "content": "作为一名从初中就开始自己装机的垃圾佬，工作之后当然要组一台服务器放家里了！（不然为什么我们两个人我要租三居室，当然是一个拿出来做书房放🐔箱了呀！）\n\n\n![image.png](https://pic.mereith.com/img/31030104a2ee8cb11bb4ae5b7848589d.image.webp)\n\n\n<!-- more -->\n\n## 概览\n\n大概的里面放了:\n- 联通 1000M 和移动 200M 两条宽带\n- 一台 UPS\n- 一台 EPYC 服务器（7302 16c32t 、128G 、8TB P4510、Tesla P40 24G）\n- 一台 e5 洋垃圾服务器（e5 2670v2 x2、64G）\n- 一台万兆 5 口交换机\n- 一台 8 口 2.5G 交换机\n- 一台软路由 n5095（装了 esxi )\n- 一台威联通 TS-551 的 NAS\n\n\n## 架构\n\n![流程图.jpg](https://pic.mereith.com/img/063b5a579d33220af8166dd301b19599.%C3%A6%C2%B5%C2%81%C3%A7%C2%A8%C2%8B%C3%A5%C2%9B%C2%BE.webp)\n\n- 同一个网段，只有一层 NAT\n- 提供网络的软硬件与服务器分开，方便维护和管理（之前 ALL IN BOOM 过）\n- 软路由内使用 Esxi\n- iKuai 负责流控、DHCP、多线负载均衡\n- Openwrt 负责魔法上网\n- Debian 负责提供内网的 http/https 反代服务（nginx-ingress-controller)、一键回家的 WireGuard，和一些网络基本设施监控运维（prometheus、grafana 等）\n- 两台服务器均使用 PVE 并组成集群，网卡用了万兆双口电卡 X540-AT2\n- EPYC Server 内虚拟了 win2022，直通 p3510 8TB SSD 提供内网高速存储服务。\n- NAS 接了一个 usb 2.5g 网卡到交换机上，提供存储、照片、视频等服务+ PVE 集群的备份服务\n- 有一台 UPS 接到了 nas 上，通过 nas 的 nut server，同步 ups 状态到所有设备，实现断电自动关机\n\n\n## PVE 集群\n\n用 pve 是因为开源，很多东西可以折腾，整体上两台服务器都是超融合的架构。\n![image.png](https://pic.mereith.com/img/f3dd7131d426849aebd43e92f7d89735.image.webp)\n目前的话，主要是干这些活儿的：\n- 有一台 ubuntu 的虚机机，负责我的所有开源项目的开发（用了 code-server 作为我的云开发方案），有点事随时随地，想怎么开发就怎么开发，有浏览器就行，非常舒服。\n- Tesla P40 24G 计算卡直通给 ubuntu 开发虚拟机中，通过 nvidia docker 方案，跑一些感兴趣的模型啥的？（但是后面发现性能还是不行，画个画要画半天哦）折腾过 virtualGPU，但感觉也没啥用，后来就老老实实直通了。\n- 一台跑 MC server 的虚拟机，里面有大学时期做的大学的我的世界地图（但是没人玩了，当个纪念）\n- 一台 win2022 开启了 NFS、SMB3、ISCSI 协议，共享 P3510 8TB 固态。（我折腾过 TrueNAS 、unRaid、黑裙啥的），但最后还是跑了 win2022（因为各种原因）\n- 原来还有几个各个版本的虚拟机（win7、xp、win10、win11、mac os。。。），后来重置都删了，留了一个 windows 的虚拟机，RDP 连接玩玩用。\n- 有一堆，各种主流操作系统的模板，可以在想玩的时候，随时起一个主流的操作系统虚拟机。\n- 玩了一圈，发现 linux 老老实实 ssh、windows 老老实实 rdp 最方便，其次就建议用 SPICE 协议\n- 试过各种能找到的 VDI 解决方案，最后老老实实买了台主力台式机，放弃了虚拟桌面代替电脑。\n\n## NAS\nNas 对我来说最大的作用就是保存资料和重要照片，对照片进行分类整理了。\n用过 Prism 等开源照片管理方案，但感觉都有很大缺陷，最后上了威联通（买了个便宜二手的）。\nNAS 的型号是 TS-551，里面装了：\n- 两块 4T 机械，Raid 1\n- 一块2T 的企业级 stat 固态做系统盘\n- 一块 4T 机械，无 Raid\n另外跑了一堆服务。\n\n## 服务合影\n\n![image.png](https://pic.mereith.com/img/384f2b448e987e17538bff11cd558063.image.webp)\n\n![image.png](https://pic.mereith.com/img/7bfbfebe0b777200119dffff71e102c7.image.webp)\n",
    "tags": [
      "homelab"
    ],
    "top": 0,
    "category": "折腾搞机",
    "hidden": false,
    "author": "mereith",
    "pathname": "",
    "private": false,
    "viewer": 60,
    "visited": 60,
    "createdAt": "2023-06-28T09:32:23.953Z",
    "updatedAt": "2023-06-28T09:32:23.953Z",
    "id": 174,
    "lastVisitedTime": "2023-07-29T10:54:23.211Z"
  },
  {
    "title": "我的个人工作流——开源项目推荐",
    "content": "没事的时候我经常会翻翻 github 有什么新鲜的开源项目，部署下来把玩一番，不知不觉发现我平时的学习工作生活已经离不开它们了。  \n而经过一番折腾，我也形成了具有我个人特色的一套工具体系，或者说工作流？ 本文稍微总结一下我是怎么管理我折腾/开发中所需要的各种工具的。\n\n<!-- more -->\n\n## 走过的弯路\n### 自托管 vs 公有云\n几年前我是自托管的粉丝，我觉得把什么东西都放到自己的服务器上，有一种莫名的安全感。  \n于是我自己部署 `gitlab`，自己部署 `jenkins` ，自己部署 `openfaas`，自己部署 `grafana`...  \n最后我发现很多自托管的需求是瞎折腾，比如代码库这种事，我自己部署代码库，我要配置不低的服务器，我要维护，而我写的垃圾代码根本没人在乎，我为啥不放到 `github` 上，还能让大家图一乐。   \n后来我想记笔记，我部署了很多笔记项目，但我发现其实很多现成的东西就够了，而且更好用，比如 `OneNote`，比如 `印象笔记` 之类的。  \n我不禁思考，**我为什么要自托管呢？**  \n现在我想明白了，自托管肯定是有一些东西吸引我的，要么是他们跨平台支持的好（我平台用的杂），要么是数据安全性有保障，要么是灵活性更好功能更多（没有功能，我提pr总行吧）\n但单纯的为了折腾而折腾，还是没必要了。 \n\n![image.png](https://pic.mereith.com/img/d5c855ab5245b58688b48bdb9ba82eae.image.webp)\n<p style=\"text-align:center;\">(我部署过的一堆东西) </p>\n曾经无数次我费劲吧泪部署了一个超级难部署的东西，最后根本不会用！以前时间多还能享受折腾的快乐，工作以后哪有那么多时间，还是以实际为主。\n\n### 不要没需求创造需求\n对吧？比如我有一堆服务器，我想监控他们的状态，我最开始部署了 `grafana` + `prometheus` + `alert manager`，但我真的需要这么详细的数据吗？ 我平时根本不看啊。\n\n我的实际需求是什么？我只需要时不时的能看看服务器的内存、CPU 占用率，确定他们在线就好了，最好能给我加个离线报警啥的就更好了。\n\n后来我发现了 [哪吒监控](https://nezha.wiki/) 这个项目，完美符合我的需求，甚至还能做一些轻运帷的活儿，完美。\n\n![image.png](https://pic.mereith.com/img/0777306a757adb5822ac842ba3bac776.image.webp)\n<p style=\"text-align:center;\">哪吒监控</p>\n\n## 博客与导航站\n当然推荐我自己写的项目了！\n\n### VanBlog\n就是本博客所用的系统。  \n项目地址：https://vanblog.mereith.com  \n演示地址：https://blog-demo.mereith.com\n\n![image.png](https://pic.mereith.com/img/8d7b3ac9de1d9ff4fd134b06a3f4c1a7.image.webp)\n\n### VanNav\n我觉得还挺好用的导航站，细节满满，还有浏览器插件。  \n项目地址：https://github.com/mereithhh/van-nav   \n演示地址：https://demo-tools.mereith.com\n\n![image.png](https://pic.mereith.com/img/6af30f5929bcb0df1404004ec81393fc.image.webp)\n\n\n## 笔记/阅读相关\n\n### Trilium\n一个很好的开源笔记，优点是树状无限套娃很适合搭建自己的知识库，缺点是移动端支持不好，没有移动端 app。 电脑端的 app 我觉得还没有直接用 web 强...\n\n项目地址：https://github.com/zadam/trilium   \n\n\n![image.png](https://pic.mereith.com/img/491614f276ceed89d2bcb3b3b79efaf4.image.webp)\n\n### Cubox\n这不是一个开源项目，但是我觉得最好用的稍后阅读软件(个人知识库），它有非常全的客户端和收集方式，可以从各种地方搜集信息，汇总起来。\n\n项目地址：https://cubox.pro/\n\n\n![image.png](https://pic.mereith.com/img/5ce27352eedaa994e077f45e51313b63.image.webp)\n\n### inoreader\n不知什么时候，我开始用 rss 了，真香！到处找东西，不如主动订阅。这也不是一个开源项目，但很好用，免费版也够用了。（好像要翻墙？）\n\n\n![image.png](https://pic.mereith.com/img/295dd3156e094aff3c5ad49ab232596b.image.webp)\n\n### reader\n开源的在线阅读器，多端无缝适配，而且可以导入自定义书源，阅读记录也是同步的！\n\n项目地址：https://github.com/hectorqin/reader\n\n![image.png](https://pic.mereith.com/img/21f084ce0c493acd7014b0bbf1bb8886.image.webp)\n\n\n## 效率相关\n\n### Vaultwarden\n开源的密码管理工具，用了它我就基本不记密码了，而且安全！\n\n项目地址：https://github.com/dani-garcia/vaultwarden\n\n\n![image.png](https://pic.mereith.com/img/2283cc51d274cb7eb690bab2c3130b3e.image.webp)\n\n\n\n未完待续...\n\n\n\n\n",
    "tags": [],
    "top": 0,
    "category": "实用笔记",
    "hidden": false,
    "author": "mereith",
    "pathname": "",
    "private": false,
    "viewer": 47,
    "visited": 47,
    "createdAt": "2023-06-28T09:26:02.628Z",
    "updatedAt": "2023-06-28T09:26:02.628Z",
    "id": 173,
    "lastVisitedTime": "2023-07-29T09:28:37.210Z"
  },
  {
    "title": "动手写一个超简单的编译器",
    "content": "  不知不觉已经写了两年代码了，每过一阵子回头看看原来的代码，都觉得有不少值得改进的地方，这真是一件高兴的事。  \n  原来我从来不会关心编译原理这种东西，感觉离自己很远，但做项目的过程中，操作了一些 AST，杂七杂八的接触过一些相关的知识，又发现了一个很好的教程，就跟着写了一遍，颇有收获。  \n  在此把大概的步骤和思路记下来。\n> 教程：  [Create Your Own Compiler](https://citw.dev/tutorial/create-your-own-compiler)  \n> 代码： https://github.com/Mereithhh/simple-compiler\n\n<!-- more -->\n\n## 目标\n我们的目标是用 `js` 写一个编译器，把 `lisp` 编译成 `js` 代码。   \n```lisp\n(add 123 ( sub 4 3))\n```\n可以编译成下面的 js 代码：\n```js\nadd(123, sub(4, 3));\n```\n用起来可能是这样的：\n```js\nconst compiler = require(\"./compiler\");\nconst input = \"(add 123 ( sub 4 3))\"\nconst output = compiler(input);\n// add(123, sub(4, 3));\nconst add = (a,b) => a + b;\nconst sub = (a, b) => a - b;\nconst result = eval(output)\nconsole.log(result)\n// 124\n```\n## 概述\n要实现这样一个编译器，大概要 4 步：  \n- 词法分析\n- 语法分析\n- AST转换\n- 代码生成\n\n我们一步一步来。\n## 词法分析\n这步的目的是解析我们传入代码字符串中的有效单词，并给他们分类。我们的输入是：\n```lisp\n(add 123 ( sub 4 3))\n```\n这步完成后，就会输出这样的数组：\n```js\n[\n  {\n    \"type\": \"paren\",\n    \"value\": \"(\"\n  },\n  {\n    \"type\": \"name\",\n    \"value\": \"add\"\n  },\n  {\n    \"type\": \"number\",\n    \"value\": \"123\"\n  },\n  {\n    \"type\": \"paren\",\n    \"value\": \"(\"\n  },\n  {\n    \"type\": \"name\",\n    \"value\": \"sub\"\n  },\n  {\n    \"type\": \"number\",\n    \"value\": \"4\"\n  },\n  {\n    \"type\": \"number\",\n    \"value\": \"3\"\n  },\n  {\n    \"type\": \"paren\",\n    \"value\": \")\"\n  },\n  {\n    \"type\": \"paren\",\n    \"value\": \")\"\n  }\n]\n```\n要想实现这样的效果，我们只需要简单从头到尾捋一遍我们的输入，根据不同的情况判断就好了，大概是这样的：\n```js\nconst PATTERNS = [\n  \"(\",\n  \")\"\n]\nconst NUMBER = /[0-9]/;\nconst LETTER = /[a-zA-Z]/;\nconst SPACE = /\\s/;\n\nmodule.exports = function tokenizer(input) {\n  const tokens = [];\n  let current = 0;\n  while (current < input.length) {\n    let char = input[current];\n    if (PATTERNS.includes(char)) {\n      tokens.push({\n        type: \"paren\",\n        value: char,\n      });\n      current++;\n      continue;\n    }\n    if (NUMBER.test(char)) {\n      let value = \"\";\n      while (NUMBER.test(char)) {\n        value += char;\n        char = input[++current];\n      }\n      tokens.push({\n        type: \"number\",\n        value,\n      });\n      continue;\n    }\n\n    if (LETTER.test(char)) {\n      let value = \"\";\n      while (LETTER.test(char)) {\n        value += char;\n        char = input[++current];\n      }\n      tokens.push({\n        type: \"name\",\n        value,\n      });\n      continue;\n    }\n\n    if (SPACE.test(char)) {\n      current++;\n      continue;\n    }\n\n\n    throw new Error(`unknow charactor: ${char}`)\n  }\n  return tokens;\n}\n```\n\n## 语法分析\n语法分析是把我们的上一步获得的词组，重新组合成树状的结构，也就是 AST。\n处理好之后，会得到这样的树：\n```js\n{\n  \"type\": \"Program\",\n  \"body\": [\n    {\n      \"type\": \"CallExpression\",\n      \"name\": \"add\",\n      \"params\": [\n        {\n          \"type\": \"NumberLiteral\",\n          \"value\": \"123\"\n        },\n        {\n          \"type\": \"CallExpression\",\n          \"name\": \"sub\",\n          \"params\": [\n            {\n              \"type\": \"NumberLiteral\",\n              \"value\": \"4\"\n            },\n            {\n              \"type\": \"NumberLiteral\",\n              \"value\": \"3\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n```\n这一步实现的核心思路是递归，定义一个当前下标的变量，和一个递归执行的函数。 在递归执行的函数里分别处理不同类型的数据，如果遇到了符号类型的数据，那就递归调用这个函数。不废话直接上代码：\n```js\nmodule.exports = function parser(tokens) {\n  let current = 0;\n  // walk 函数每次运行完，都增加一个指针，以被下一次 walk\n  function walk() {\n    let token = tokens[current];\n    if (token.type === 'number') {\n      current++;\n      return {\n        type: 'NumberLiteral',\n        value: token.value,\n      }\n    }\n\n    if (token.type === 'paren' && token.value === '(') {\n      // 下一个 token 才是函数名称\n      token = tokens[++current];\n      const expression = {\n        type: \"CallExpression\",\n        name: token.value,\n        params: []\n      }\n      token = tokens[++current];\n      while (token.value !== \")\") {\n        expression.params.push(walk())\n        token = tokens[current]\n      }\n      current++;\n      return expression;\n    }\n\n\n    throw new TypeError(`Unknow token: ${token.type}`)\n  }\n\n  const ast = {\n    type: 'Program',\n    body: [walk()],\n  };\n\n  return ast;\n}\n```\n\n## AST转换\n上一步我们得到了 `lisp` 语言得 AST 树，现在我们要把这个树转换成 `js` 的 AST 树。  \n核心思路是遍历整个树，在遍历过程中针对每一种节点类型，使用不同的函数转化成另一种树，并且要定义一个位置变量，来把转换后的节点插入到新树中适合的位置。代码如下：  \n```js\nconst traverse = require(\"./traverse\");\n\nmodule.exports = function transformer(originalAST) {\n  const jsAST = {\n    type: 'Program',\n    body: [],\n  };\n\n  let position = jsAST.body;\n\n  traverse(originalAST, {\n    NumberLiteral(node) {\n      position.push({\n        type: \"NumericLiteral\",\n        value: node.value,\n      })\n    },\n    CallExpression(node, parent) {\n      let expression = {\n        type: \"CallExpression\",\n        callee: {\n          type: \"Identifier\",\n          name: node.name\n        },\n        arguments: []\n      };\n      const prevPosition = position;\n      position = expression.arguments;\n      if (parent.type !== \"CallExpression\") {\n        expression = {\n          type: \"ExpressionStatement\",\n          expression,\n        };\n      };\n      prevPosition.push(expression)\n    }\n  })\n\n  return jsAST;\n}\n```\n其中遍历函数的实现如下：\n```js\nmodule.exports = function traverse(ast, visitors) {\n  function walkNode(node, parent) {\n    const method = visitors[node.type];\n    if (method) method(node, parent);\n    if (node.type === \"Program\") walkNodes(node.body, node);\n    else if (node.type === \"CallExpression\") walkNodes(node.params, node);\n  }\n\n  function walkNodes(nodes, parent) {\n    nodes.forEach(node => walkNode(node, parent))\n  }\n  walkNode(ast, null)\n}\n```\n## 代码生成\n这步很简单，只要把我们需要的 `jsAST` 生成成相应的代码就好了，因为我们的编译器支持的语法非常简单（简陋），所以代码也很简洁🫤\n```js\nmodule.exports = function generateCode(node) {\n  if (node.type === \"NumericLiteral\") {\n    return node.value;\n  }\n  if (node.type === \"Identifier\") {\n    return node.name;\n  }\n  if (node.type === \"CallExpression\") {\n    // name(arg1, arg2, arg3)\n    return `${generateCode(node.callee)}(${node.arguments.map(generateCode).join(\", \")})`\n  }\n  if (node.type === \"ExpressionStatement\") {\n    return `${generateCode(node.expression)};`\n  }\n  if (node.type === \"Program\") {\n    return node.body.map(generateCode).join(\"\\n\")\n  }\n}\n```\n\n## 总结\n跟着教程走下来，发现编译器（入门）并没有我想的那么复杂，写一个最基础的编译器并不需要多高深的算法，代码也没有多难懂。 简洁的代码又非常巧妙，很少的代码实现了需要的功能。 其中递归是个很重要的应用，合理的利用递归可以写出有些“魔力”的代码。\n\n实际上在平时的开发中，我发现“抽象”是一种非常重要的能力，一个会合理抽象的程序员，可以用很少的代码完成很强的功能，同时具有很强的扩展性和鲁棒性。\n\n之前我看过“计算机程序的构造与解释”这门网课，结合今天的代码又有了些新的思考，很推荐这门课，有空我应该会再看一遍👀\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
    "tags": [],
    "top": 0,
    "category": "实用笔记",
    "hidden": false,
    "author": "mereith",
    "pathname": "",
    "private": false,
    "viewer": 44,
    "visited": 44,
    "createdAt": "2023-06-28T08:52:58.033Z",
    "updatedAt": "2023-06-28T08:52:58.033Z",
    "id": 172,
    "lastVisitedTime": "2023-07-29T09:30:31.279Z"
  }
]

export async function getArticle() {
  console.log(111)
  const article = await getArticleList({page: 1, pageSize: 10})
  console.log(article)
}

