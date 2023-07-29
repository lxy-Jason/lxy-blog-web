import Link from "next/link";
import {MouseEventHandler, useMemo, useRef, useState} from "react";
import {MenuItem} from "@/types/layout";

function LinkItemAtom(props: {
  item: MenuItem
  onMouseEnter?: MouseEventHandler<HTMLElement>
  onMouseLeave?: MouseEventHandler<HTMLElement>
  children?: React.ReactNode;
  clsA?: string;
  cls?: string;
}) {
  const {item} = props;
  const cls = `nav-item transform hover:scale-110 dark:border-nav-dark  dark:transition-all ua`;
  const clsA = `h-full flex items-center px-2 md:px-4 `;
  // 链接跳转的情况
  if (item.value.includes("http")) {
    return (
      <li
        onMouseEnter={props?.onMouseEnter}
        onMouseLeave={props?.onMouseLeave}
        key={item.id}
        className={props.cls ? props.cls : cls}
      >
        <a
          className={props.clsA ? props.clsA : clsA}
          href={item.value}
          target="_blank"
        >
          {item.name}
        </a>
        {props?.children}
      </li>
    );
  } else { //路由跳转的情况
    return (
      <li
        onMouseEnter={props?.onMouseEnter}
        onMouseLeave={props?.onMouseLeave}
        key={item.id}
        className={props.cls ? props.cls : cls}
      >
        <Link href={item.value} style={{height: "100%"}}>
          <div className={props.clsA ? props.clsA : clsA}>{item.name}</div>
        </Link>
      </li>
    );
  }
}

//todo 二级菜单

export default function (props: { item: MenuItem }) {
  const {item} = props
  return <LinkItemAtom item={item}></LinkItemAtom>
}