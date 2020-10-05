import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Banner from "../components/Banner";
import Layout from "../layouts/layout";

const Page404 = (props) => {
  const [redirect, setRedirect] = useState(5);
  console.log(redirect);

  useEffect(() => {
    if (redirect > 0) {
      setTimeout(() => {
        setRedirect(redirect - 1);
      }, [1000]);
    }
  }, [redirect]);

  return (
    <Layout home error>
      <Banner
        subHeading="Oops, looks like you wandered away, no such page, let's get you back home, shall we?"
        countdown={redirect}
      />
      {!redirect && <Redirect to="/" />}
    </Layout>
  );
};

export default Page404;
