import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import CallToActionOne from "@/components/call-to-action-one";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import PortfolioHome from "@/components/portfolio-home";
import BeforeLaterShowCase from "@/components/before-later-showcase";

const AboutPage = ({ posts }) => {


  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="ShowCase Page">
          <HeaderOne />
          <PageBanner title="ShowCase" name="showcase" />
          <BeforeLaterShowCase />
          <CallToActionOne extraClassName="ready" />
          <Footer />
          </Layout>
       </SearchContextProvider>
       </MenuContextProvider>
  );


};

export default AboutPage;

