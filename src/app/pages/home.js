import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import HomeComponent from "../components/Home";
import Timeline from "../components/Timeline";
import Layout from "../layouts/layout";

class Home extends React.Component {
  render() {
    return (
      <>
        <Layout home title="Sanket Jain">
          <Banner
            heading="Hi, I'm Sanket"
            subHeading="I work with electronics, software and music"
          />
          <Header home />
          <HomeComponent />
          <Timeline />
        </Layout>
      </>
    );
  }
}

export default Home;
