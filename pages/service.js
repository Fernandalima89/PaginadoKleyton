import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceOne from "@/components/service-one";
import ServiceTwo from "@/components/service-two";
import ServiceThree from "@/components/service-three";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import ClientCarouselOne from "@/components/client-carousel-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import ServiceCeramicCoating from "@/components/service-ceramic-coating";
import FeatureTabOne from "@/components/feature-tab-1";
import LeatherCare from "@/components/leather-care";


const ServicePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services Page">
          <HeaderOne />
          <PageBanner title="Services" name="Services" />
          {/*<ServiceOne />*/}
          <ServiceTwo />
          <ServiceThree />
          <ServiceCeramicCoating />
          <LeatherCare />  
         
          <FeatureTabOne />
          {/*<FunfactOne />*/}
          {/*<TrustedClient extraClassName="pb_120" />*/}
          {/*<ClientCarouselOne />*/}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
