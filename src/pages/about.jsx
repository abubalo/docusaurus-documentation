import React from "react";
import Layout from "@theme/Layout";

function About() {
  return (
    <Layout title="About Us">
      <div style={{ padding: "20px" }}>
        <h1>About Us</h1>
        <p style={{ width: "65%" }}>
          Semaphore CI is a cloud-based continuous integration and delivery
          platform that accelerates software development. We help teams build,
          test, and deploy code faster and more reliably.
        </p>
      </div>
    </Layout>
  );
}

export default About;
