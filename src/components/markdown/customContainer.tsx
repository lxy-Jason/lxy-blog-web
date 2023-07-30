import { BytemdPlugin } from "bytemd"; //用于定义一个bytemd的插件
import remarkDirective from "remark-directive"; //用于解析 Markdown 中的指令的插件
import { visit } from "unist-util-visit"; //用于遍历 Markdown 的抽象语法树 (AST)。

//创建一个自定义容器插件，可以在 Markdown 编辑器中使用自定义的容器块，并将其渲染成相应的 HTML 结构。
const CUSTOM_CONTAINER_TITLE: Record<string, string> = {
  note: "注",
  info: "相关信息",
  warning: "注意",
  danger: "警告",
  tip: "提示",
};

// FIXME: Addd Types
const customContainerPlugin = () => (tree:any) => {
  visit(tree, (node) => {
    if (
      node.type === "textDirective" ||
      node.type === "leafDirective" ||
      node.type === "containerDirective"
    ) {
      if (node.type == "containerDirective") {
        const { attributes, name: tagName } = node;
        const data = node.data ??= {};
        const title = attributes?.title || CUSTOM_CONTAINER_TITLE[tagName];
        const cls = `custom-container ${tagName}`;

        data.hName = "div";
        data.hProperties = {
          class: cls,
          ["type"]: title,
        };
        const toAppendP = {
          type: "paragraph",
          data: {
            hProperties: {
              class: `custom-container-title ${tagName}`
            }
          },
          children: [
            {
              type: "text",
              value: title,
            }
          ]
        }
        node.children = [
          toAppendP,
          ...node.children
        ]
      }
    }
  });
};

export function customContainer(): BytemdPlugin {
  return {
    remark: (processor) =>
      processor.use(remarkDirective).use(customContainerPlugin),
  };
}
