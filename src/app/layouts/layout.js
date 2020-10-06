import React from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import Credits from "../components/Credits";
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
    window.scrollTo(0, 0);
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
    const { home } = this.props;
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
            paddingTop: home ? "0" : theme.space.header,
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <GoToTopButton theme={theme} />
          {childrenWithProps}
          {this.props.error ? null : (
            <>
              <ContactForm theme={theme} />
              <Credits theme={theme} />
              <Footer theme={theme} />
            </>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(Layout);
