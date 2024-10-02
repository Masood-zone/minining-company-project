import { Outlet, useLocation } from "react-router-dom";
import MineralsNavbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <MineralsNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
