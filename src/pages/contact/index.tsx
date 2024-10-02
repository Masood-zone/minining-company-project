import { PageBanner } from "../../components/banner";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import ContactForm from "./form";

function Contact() {
  return (
    <main className="pt-20 mt-10">
      {/* Banner */}
      <PageBanner
        title="Contact Us"
        image="https://ld-wt73.template-help.com/wt_prod-10987/theme/images/bg-services.jpg"
      />
      <Breadcrumb currentPage="Contact Us" />
      {/* Contact Section */}
      <ContactForm />
    </main>
  );
}

export default Contact;
