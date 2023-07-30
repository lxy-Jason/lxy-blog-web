import { BytemdPlugin } from "bytemd"
import rehypeRaw from "rehype-raw"; //用于将markdown中的html相关的字符串解析成html
export default function (): BytemdPlugin {
  return {
    rehype: (processor) => processor.use(rehypeRaw)
  }
}
