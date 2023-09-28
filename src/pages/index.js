import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage src="../images/forest.jpg" alt="forest" />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
