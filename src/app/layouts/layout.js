import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.scss";
import { getThemes } from "../utils/helpers";

class Layout extends React.Component {
  Theme = getThemes();

  constructor(props) {
    super(props);
    this.state = {
      theme: this.Theme,
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.windowResizeUpdate.bind(this));
    }
  }

  componentDidMount() {
    this.Theme = getThemes();
  }

  windowResizeUpdate() {
    // console.log(window.innerWidth, this.state.theme.mode)
    if (typeof window !== "undefined") {
      if (this.state.theme.mode === "widescreen" && window.innerWidth < 1024) {
        this.Theme = getThemes();
        this.setState({ theme: this.Theme });
        console.log(this.Theme.mode);
      } else if (
        this.state.theme.mode === "tablet" &&
        (window.innerWidth >= 1024 || window.innerWidth <= 600)
      ) {
        this.Theme = getThemes();
        this.setState({ theme: this.Theme });
      } else if (
        this.state.theme.mode === "mobile" &&
        window.innerWidth > 600
      ) {
        this.Theme = getThemes();
        this.setState({ theme: this.Theme });
        this.forceUpdate();
      }
    }
  }

  render() {
    const theme = this.Theme;

    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { theme: theme });
        }
        return child;
      }
    );

    return (
      <>
        <Helmet>
          <title>{this.props.title}</title>
          <link
            href={`https://fonts.googleapis.com/css2?family=Raleway&display=swap`}
            rel="stylesheet"
          />
        </Helmet>
        <div
          style={{
            fontFamily: theme.fontFamily,
            backgroundColor: theme.color.background,
          }}
        >
          {childrenWithProps}
        </div>
      </>
    );
  }
}

export default Layout;
