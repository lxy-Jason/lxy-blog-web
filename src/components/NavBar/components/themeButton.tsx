
import {defaultTheme} from "@/types/layout";
import Core from "@/components/NavBar/components/core";
export default function (props: {
  defaultTheme:defaultTheme
}){
  return (<Core {...props}></Core>)
}