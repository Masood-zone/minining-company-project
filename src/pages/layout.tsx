import { Outlet } from "react-router-dom";
import MineralsNavbar from "../components/navbar";

function Layout() {
  return (
    <>
      <MineralsNavbar />
      <Outlet />
    </>
  );
}

export default Layout;
