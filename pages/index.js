import Head from "next/head";

import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MarkSection from "../components/MarkSection";
// import MintSection from "../components/MINTSection";
import BuySection from "../components/BUYSection";
import FaqSection from "../components/FAQSection";
import dynamic from "next/dynamic";
import WhyChooseUs from "../components/WhyChooseUS";
import RoadmapSection from "../components/RoadmapSection";
const MintSection = dynamic(() => import("../components/MINTSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Hapu Inu </title>
        </Head>
        <container>
          <HeroSection />
          <AboutSection />
          <MarkSection />
          <MintSection></MintSection>
          <BuySection />
          <FaqSection />
          <WhyChooseUs />
          <RoadmapSection />
        </container>
      </Layout>
    </>
  );
}
