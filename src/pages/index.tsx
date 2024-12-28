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
import NotFound from "./notfound";
import ProjectsIndex from "./services/service-projects";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<ServicesLayout />}>
        <Route index element={<Services />} />
        <Route path=":serviceId" element={<ServicesIndex />} />
        <Route path="projects/:id" element={<ProjectsIndex />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default routes;
