import { CompanyNotes, CompanyValues } from "../../components/about";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import OurClients from "../../components/clients";
import OurTeam from "../../components/team";
import AboutUsBanner from "./banner";
import History from "./history";

function About() {
  return (
    <main className="pt-20 mt-10">
      {/* Banner */}
      <AboutUsBanner />
      <Breadcrumb currentPage="About Us" />
      {/* Company Values */}
      <CompanyValues />
      {/* Values */}
      <CompanyNotes />
      {/* Our Team */}
      <section className="overflow-hidden">
        <OurTeam />
      </section>
      {/* Our History */}
      <History />
      {/* Our Clients */}
      <OurClients />
    </main>
  );
}

export default About;
