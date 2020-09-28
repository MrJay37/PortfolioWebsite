import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Building from "../components/Building";
import Layout from "../layouts/layout";

class App extends React.Component {
  render() {
    return (
      <>
        <Layout title="Sanket Jain">
          <Header />
          <Banner />
          <Timeline />
          <Building />
          <ContactForm />
          <Footer />
        </Layout>
      </>
    );
  }
}

export default App;
