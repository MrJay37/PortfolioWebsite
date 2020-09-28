import theme from "../theme/theme.json";

export function getThemes() {
  let windowWidth;
  if (typeof window !== "undefined") {
    windowWidth = window.innerWidth;
  }

  if (windowWidth >= 1024) {
    return theme["widescreen"];
  } else if (windowWidth < 1024 && windowWidth > 600) {
    return theme.tablet;
  } else {
    return theme.mobile;
  }
}
