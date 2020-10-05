import React from "react";
import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";
import Layout from "../layouts/layout";

class Home extends React.Component {
  render() {
    return (
      <>
        <Layout title="Sanket Jain | Projects">
          <Header />
          <ProjectCards />
        </Layout>
      </>
    );
  }
}

export default Home;
