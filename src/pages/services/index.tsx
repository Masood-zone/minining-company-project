import { Outlet } from "react-router-dom";
import { PageBanner } from "../../components/banner";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";

function ServicesLayout() {
  return (
    <main className="pt-20 mt-10">
      {/* Banner */}
      <PageBanner
        title="Our Services"
        image="https://ld-wt73.template-help.com/wt_prod-10987/theme/images/bg-project.jpg"
      />
      <Breadcrumb currentPage="Our Services" />
      {/* Subpages */}
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default ServicesLayout;
