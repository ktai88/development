import { createRoot } from "react-dom/client";
import { createBrowserRouter, LoaderFunctionArgs, RouterProvider } from "react-router-dom";
import "src/index.css";
import Root from "src/pages/Root";
import RootError from "src/pages/RootError";
import MainPage from "src/pages/Main";
import "@astron-sdc/design-system/styles.css";
import "src/index.css";
import { BACKEND_BASENAME, BASENAME } from "src/constants";
import Custom404 from "src/pages/404";

const pages = [
  {
    path: "/",
    element: <MainPage />,
  },
];

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <RootError />,
    children: [
      ...pages,
      {
        path: "/redirect/*",
        loader: ({ params }: LoaderFunctionArgs) => {
          window.location.assign(`${BACKEND_BASENAME}/oauth2/start?rd=/${encodeURIComponent(params["*"]!)}`);
          return null; // loader requires return value;
        },
      },
      {
        path: "/*",
        element: <Custom404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: BASENAME });

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root")!);
  root.render(<RouterProvider router={router} />);
});
