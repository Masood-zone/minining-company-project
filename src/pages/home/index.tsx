import AboutCompany from "../../components/about";
import ExpertiseBanner from "../../components/banner";
import MiningCarousel from "../../components/carousel";
import Footer from "../../components/footer";
import WhatWeOfferCarousel from "../../components/offers";

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
      <section className="h-96 my-20">
        <ExpertiseBanner />
      </section>
      {/* Mining machinery */}
      {/* Lastest projects */}
      {/* Our clients */}
      {/* Achievements won */}
      {/* Our Team */}
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Home;
