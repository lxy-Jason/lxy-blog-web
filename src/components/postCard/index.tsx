'use client'

import TopPinIcon from "./components/topPinIcon";
import {Title} from './components/title'
import Link from "next/link";
import {getTarget} from "@/utils/getTarget";
import Markdown from "@/components/markdown";
import {useMemo, useState} from "react";


export default function (props: {
  id: number | string;
  title: string;
  updatedAt: Date;
  createdAt: Date;
  category: string;
  content: string;
  type: "overview" | "article" | "about";
  path: string,
  pay?: string[];
  payDark?: string[];
  author?: string;
  tags?: string[];
  next?: { id: number; title: string; pathname?: string };
  pre?: { id: number; title: string; pathname?: string };
  enableComment: "true" | "false";
  top?: number;
  private?: boolean;
  // showDonateInAbout?: boolean;
  // hideDonate?: boolean;
  // hideCopyRight?: boolean;
  openArticleLinksInNewWindow: boolean;
  // copyrightAggreement: string;
  // customCopyRight: string | null;
  // showExpirationReminder: boolean;
  showEditButton: boolean;
}) {
  const {content} = props;
  const [lock, setLock] = useState(props.type != "overview" && props.private);

  const calContent = useMemo(() => {
    if (props.type == "overview") {
      if (props.private) {
        return "该文章已加密，点击 `阅读全文` 并输入密码后方可查看。";
      }
      const r = content.split("<!-- more -->");
      if (r.length > 1) {
        return r[0];
      } else {
        return content.substring(0, 50);
      }
    } else {
      return content.replace("<!-- more -->", "");
    }
  }, [props, lock, content]);

  return (
    <div
      className={'post-card-wrapper mb-5'}
    >
      <div
        style={{position: "relative"}}
        id="post-card"
        className="overflow-hidden post-card bg-white card-shadow py-4 px-1 sm:px-3 md:py-6 md:px-5 dark:bg-dark  dark:nav-shadow-dark"
      >
        {props.top != 0 && <TopPinIcon></TopPinIcon>}
        <Title
          type={props.type}
          id={props.id}
          title={props.title}
          openArticleLinksInNewWindow={props.openArticleLinksInNewWindow}
          showEditButton={props.showEditButton}
        ></Title>
        {/*  子标题todo*/}
        <div className="text-sm md:text-base  text-gray-600 mt-4 mx-2">
          <Markdown content={calContent}></Markdown>
          {props.type == "overview" && (
            <div className="w-full flex justify-center mt-4 ">
              <Link
                href={`/post/${props.id}`}
                target={getTarget(props.openArticleLinksInNewWindow)}
              >
                <div
                  className=" dark:bg-dark dark:hover:bg-dark-light dark:hover:text-dark-r dark:border-dark dark:text-dark hover:bg-gray-800 hover:text-gray-50 border-2 border-gray-800 text-sm md:text-base text-gray-700 px-2 py-1 transition-all rounded">
                  阅读全文
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}