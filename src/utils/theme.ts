import {theme} from "@/types/layout";

export const getTheme = (theme: theme) => {
  return theme === 'auto' ? getAutoTheme() : theme
}

export const getAutoTheme = () => {
  const hour = new Date().getHours()
  const isNight = hour > 18 || hour < 8

  if (typeof window === 'undefined') {
    //非浏览器环境
    return isNight ? 'auto-dark' : 'auto-light'
  }

  if (isNight || window.matchMedia("(perfers-color-scheme: dark)").matches) {
    //浏览器环境,判断是不是晚上或者用户的首选颜色模式是暗色模式。
    return "auto-dark"
  }
  return "auto-light"
}