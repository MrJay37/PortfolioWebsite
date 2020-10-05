import React from "react";
import Header from "../components/Header";
import EducationCards from "../components/EducationCards";
import WorkExCards from "../components/WorkExCards";
import Timeline from "../components/Timeline";
import Layout from "../layouts/layout";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

  handleDrawerClick = () => {
    this.setState({ drawerOpen: true });
  };

  render() {
    return (
      <>
        <Layout title="Sanket Jain | About">
          <Header />
          <WorkExCards />
          <EducationCards />
          <Timeline />
        </Layout>
      </>
    );
  }
}

export default About;
