import { Outlet } from "react-router-dom";
import MineralsNavbar from "../components/navbar";
import Footer from "../components/footer";

function Layout() {
  return (
    <>
      <MineralsNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
