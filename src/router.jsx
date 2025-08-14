import { createBrowserRouter } from "react-router-dom";
import Index from "./components/Index";
import ErrorPage from "./components/ErrorPage";
import Game from "./components/Game";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/game',
    element: <Game />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

export default router;
