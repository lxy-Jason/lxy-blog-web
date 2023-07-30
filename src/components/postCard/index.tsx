import TopPinIcon from "./components/topPinIcon";
import {Title} from './components/title'
import Link from "next/link";
import {getTarget} from "@/utils/getTarget";

export default function (props: {
  id: number | string;
  title: string;
  updatedAt: Date;
  createdAt: Date;
  category: string;
  content: string;
  setContent: (content: string) => void;
  type: "overview" | "article" | "about";
  pay?: string[];
  payDark?: string[];
  author?: string;
  tags?: string[];
  next?: { id: number; title: string; pathname?: string };
  pre?: { id: number; title: string; pathname?: string };
  enableComment: "true" | "false";
  top: number;
  private: boolean;
  // showDonateInAbout?: boolean;
  // hideDonate?: boolean;
  // hideCopyRight?: boolean;
  openArticleLinksInNewWindow: boolean;
  // copyrightAggreement: string;
  // customCopyRight: string | null;
  // showExpirationReminder: boolean;
  showEditButton: boolean;
}){

  return (
    <div
      className={'post-card-wrapper'}

    >
      <div
        style={{ position: "relative" }}
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
          {props.type == "overview" && (
            <div className="w-full flex justify-center mt-4 ">
              <Link
                href={`/post/${props.id}`}
                target={getTarget(props.openArticleLinksInNewWindow)}
              >
                <div className=" dark:bg-dark dark:hover:bg-dark-light dark:hover:text-dark-r dark:border-dark dark:text-dark hover:bg-gray-800 hover:text-gray-50 border-2 border-gray-800 text-sm md:text-base text-gray-700 px-2 py-1 transition-all rounded">
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