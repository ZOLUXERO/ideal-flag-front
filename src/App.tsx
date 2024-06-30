import "./assets/styles.css"
import Page from "./components/page"
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preview from "./components/preview"
import Project from "./components/project";
import Flags from "./components/flags";
import Environment from "./components/environment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page content={<Preview />} />
  },
  {
    path: "project/",
    element: <Page content={<Project />} />
  },
  {
    path: "flags/",
    element: <Page content={<Flags />} />
  },
  {
    path: "environment/",
    element: <Page content={<Environment />} />
  },
])


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
