import { formsBg } from "../../assets/images";
import { CompanyNotes } from "../../components/about/company-notes";
import { CompanyValues } from "../../components/about/company-values";
import { PageBanner } from "../../components/banner";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import OurClients from "../../components/clients";
import OurTeam from "../../components/team";
import Awards from "./awards/awards";
import Locations from "./location";

function About() {
  return (
    <main className="pt-20 mt-10">
      {/* Banner */}
      <PageBanner title="About Us" image={formsBg} />
      <Breadcrumb currentPage="About Us" />
      {/* Company Values */}
      <CompanyValues />
      {/* Values */}
      <CompanyNotes />
      {/* Our Location */}
      <Locations />
      {/* Our Team */}
      <section className="overflow-hidden">
        <OurTeam />
      </section>
      {/* Awards */}
      <Awards />
      {/* Our Clients */}
      <OurClients />
    </main>
  );
}

export default About;
