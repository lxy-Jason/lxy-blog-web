import {Viewer} from "@bytemd/react"
import gfm from '@bytemd/plugin-gfm'; //github的markdown语法扩展,例如加了些表情符号啥的
import highlight from '@bytemd/plugin-highlight-ssr'; //高亮
import math from '@bytemd/plugin-math-ssr'; //数学公式
import "katex/dist/katex.min.css"; //样式化渲染数学公式
import mermaid from '@bytemd/plugin-mermaid' //流程图,思维导图啥的
import {customContainer} from './customContainer'; //自定义的容器
import rawHTML from "./rawHTML"; //html文本解析成html
import {customCodeBlock} from "./codeBlock"; //自定义代码块
import {LinkTarget} from "./linkTarget"; //跳转修改
import {Heading} from "./heading"; //标题相关,感觉是为目录跳转做的准备工作
import {Img} from "./img"; //图片修改
const plugins = [
  rawHTML(),
  gfm(),
  highlight(),
  math(),
  mermaid(),
  customContainer(),
  customCodeBlock(),
  LinkTarget(),
  Heading(),
  Img(),
]
//这段代码修改了一个用于对 HTML 进行过滤和清理的 schema 对象，
//添加了一些允许的标签和属性，并禁止了标签的剥离。
// 这样可以确保在处理 HTML 内容时，只允许特定的标签和属性存在，增强了安全性。
const sanitize = (schema: any) => {
  schema.protocols.src.push('data')
  schema.tagNames.push("center")
  schema.tagNames.push("iframe");
  schema.tagNames.push("script");
  schema.attributes["*"].push("style");
  schema.attributes["*"].push("src");
  schema.attributes["*"].push("scrolling");
  schema.attributes["*"].push("border");
  schema.attributes["*"].push("frameborder");
  schema.attributes["*"].push("framespacing");
  schema.attributes["*"].push("allowfullscreen");
  schema.strip = [];
  return schema
}
export default function ({content}: { content: string }) {
  return <div className="markdown-body">
    <Viewer value={content} plugins={plugins} remarkRehype={{allowDangerousHtml: true}} sanitize={sanitize}/>
  </div>
}

//todo 值得深入学习,目前只了解了引入组件的功能
