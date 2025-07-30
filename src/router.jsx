import { createBrowserRouter } from "react-router-dom";
import Index from "./components/Index";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

export default router;
