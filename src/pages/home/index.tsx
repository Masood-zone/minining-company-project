import { AboutCompany } from "../../components/about";
import ExpertiseBanner from "../../components/banner";
import MiningCarousel from "../../components/carousel";
import LatestProjectsCarousel from "../../components/carousel/latestProjectsCarousel";
import OurClients from "../../components/clients";
import Machinery from "../../components/machinery";
import WhatWeOfferCarousel from "../../components/offers";
import OurTeam from "../../components/team";

function Home() {
  return (
    <main>
      {/* Carousel */}
      <MiningCarousel />
      <section className="containter mx-auto">
        {/* About component */}
        <AboutCompany />
        {/* What we offer */}
        <WhatWeOfferCarousel />
      </section>
      {/* Expertise banner */}
      <section className="h-[500px] my-20">
        <ExpertiseBanner />
      </section>
      {/* Mining machinery */}
      <section className="py-12 px-10">
        <Machinery />
      </section>
      {/* Lastest projects */}
      <section className="py-12">
        <LatestProjectsCarousel />
      </section>
      {/* Our clients */}
      <section className="bg-gray-100 py-16">
        <OurClients />
      </section>
      {/* Achievements won */}
      {/* Our Team */}
      <section className="py-12 ">
        <OurTeam />
      </section>
    </main>
  );
}

export default Home;
