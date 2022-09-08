import React from "react";
import { themeChange } from "theme-change";

export default function MainProgressBar({ percent }) {
  React.useEffect(() => {
    themeChange(false);
  }, []);
  // const [theme, setTheme] = React.useState("");

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  return (
    <>
      <div className="hidden">
        {themes.map((theme) => (
          <button
            key={theme}
            id={"theme-" + theme}
            data-set-theme={theme}
            data-act-class="ACTIVECLASS"
            className="btn"
          ></button>
        ))}
      </div>
      <progress
        className="progress progress-primary h-10 border-2 border-primary rounded-full"
        value={percent < 1 ? percent : 1}
        max="1"
        onClick={() => {
          // select random theme
          // console.log("clicked");
          const randomTheme = themes[Math.floor(Math.random() * themes.length)];
          // setTheme(randomTheme);
          document.querySelector("#theme-" + randomTheme).click();
          // console.log(theme);
        }}
      ></progress>
    </>
  );
}
