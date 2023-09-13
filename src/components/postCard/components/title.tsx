import Link from "next/link";
import {getTarget} from "@/utils/getTarget";
import {useMemo} from "react";

export function Title(props: {
  type: "article" | "about" | "overview";
  id: number | string;
  title: string;
  openArticleLinksInNewWindow: boolean;
  showEditButton: boolean;
}) {
  const newTab = useMemo(() => {
    if (props.type == "overview" && props.openArticleLinksInNewWindow) { //首页的情况
      return true;
    }
    return false;
  }, [props]);
  const showEditButton = props.showEditButton //&& checkLogin();

  return (
    <div
      className="flex justify-center post-card-title "
    >
      <Link href={`/post/${props.id}`} target={getTarget(newTab)} style={{width: "90%"}} title={props.title}>
        <div
          className={`text-lg block font-medium overflow-hidden text-ellipsis whitespace-nowrap px-5  text-center mb-2 mt-2 dark:text-dark text-gray-700 ${
            showEditButton ? "ml-8" : ""
          } md:text-${props.type == "overview" ? "xl" : "2xl"} ua ua-link`}
        >
          {props.title}
        </div>
      </Link>
      {showEditButton && (
        <a
          className="flex items-center"
          href={
            props.type === "about"
              ? "/admin/editor?type=about"
              : `/admin/editor?type=article&id=${props.id}`
          }
          target="_blank"
        >
          <div className=" text-dark dark:text-gray-700">
            {/*<div>编辑</div>*/}
          </div>
        </a>
      )}
    </div>
  )
}