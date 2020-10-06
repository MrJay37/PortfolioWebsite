import React from "react";
import Header from "../components/Header";
import Music from "../components/Music";
import Layout from "../layouts/layout";

class Home extends React.Component {
  render() {
    return (
      <>
        <Layout title="Sanket Jain | Music">
          <Header />
          <Music />
        </Layout>
      </>
    );
  }
}

export default Home;
