
import {defaultTheme} from "@/types/layout";
import Core from "./core";
export default function (props: {
  defaultTheme:defaultTheme
}){
  return (<Core {...props}></Core>)
}