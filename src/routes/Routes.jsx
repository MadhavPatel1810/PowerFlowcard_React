import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/common/layout/Layout";
import ErrorPage from "../components/common/errorPage/Error-page";
import PowerFlowGraph from "../components/powerFlowGraph/powerFlowGraph";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<PowerFlowGraph />} />
    </Route>
  )
);
export default Router;
