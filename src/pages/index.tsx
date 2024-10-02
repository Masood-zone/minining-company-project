import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import ServicesLayout from "./services";
import Services from "./services/services";
import ServicesIndex from "./services/servicesIndex";
import ServiceMachinery from "./services/service-machinery";
import NotFound from "./notfound";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<ServicesLayout />}>
        <Route index element={<Services />} />
        <Route path=":serviceId" element={<ServicesIndex />} />
        <Route path="services/machinery/:id" element={<ServiceMachinery />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default routes;
