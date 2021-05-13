import React from "react";
import AboutMe from "../components/AboutMe";
import FeatureSection from "../components/FeatureSection";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Resume from "../components/Resume";
import SectionHeader from "../components/SectionHeader";

/**
 * Home Page
 *
 * @goal
 * @keywords
 */

const IndexPage = () => {
  return (
    <Layout seo={{ title: "Home Page SEO" }}>
      <PageHeader />

      <SectionHeader title="Portfolio" />

      <FeatureSection
        title="Identidade Visual"
        lead="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        slug="identidade-visual"
        projectTitle1="Flexsun"
        projectSlug1="flexsun"
        projectTitle2="Flexsun"
        projectSlug2="flexsun"
      />
      <FeatureSection
        title="Web Design"
        lead="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        slug="web-design"
        projectTitle1="Flexsun"
        projectSlug1="flexsun"
        projectTitle2="Flexsun"
        projectSlug2="flexsun"
      />

      <AboutMe />

      <br />
      <br />
      <Resume />
      <br />
      <br />
    </Layout>
  );
};

export default IndexPage;
