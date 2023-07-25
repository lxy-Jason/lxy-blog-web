import {defaultTheme} from "@/types/layout";
import {useContext, useRef} from "react";
import {ThemeContext} from "@/utils/themeContext";
import {clearInterval} from "timers";
import {getTheme,applyTheme} from "@/utils/theme";

export default function (props: { defaultTheme: defaultTheme }) {

  const {theme, setTheme: setState} = useContext(ThemeContext) //setState是重命名
  const { current } = useRef<any>({ hasInit: false });
  const { current: currentTimer } = useRef<any>({ timer: null });
  const setTheme = (newTheme: defaultTheme) => {
    clearTimer()
    localStorage.setItem("theme", newTheme);
    const realTheme = getTheme(newTheme)
    applyTheme(realTheme, '切换主题', false)
    setState(realTheme)
    if (realTheme.includes("auto")) {
      setTimer();
    }
  }
  //设置定时器,每分钟调用一次
  const setTimer = () => {
    clearTimer();
    currentTimer.timer = setInterval(() => {
      const realTheme = getTheme("auto");
      applyTheme(realTheme, "autoThemeTimer", true);
    }, 1000 * 60);
  };
  const clearTimer = () => {
    clearInterval(currentTimer.timer);
    currentTimer.timer = null;
  }
  const handleSwitch = () => { //三种模式切换
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("auto");
    } else {
      setTheme("light");
    }
  }
  return (
    <div
      className="flex items-center cursor-pointer hover:scale-125 transform transition-all mr-4 ml-4 sm:ml-2 lg:ml-6   "
      onClick={handleSwitch}

    >

    </div>
  )
}