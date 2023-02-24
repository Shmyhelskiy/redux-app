import React from "react";
import Nav from "../Pages/Navigation/Nav";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import HomePage from "../Pages/Home/Home.page";
import PublicationsPage from "../Publications/Publications.page";
import CreatePage from "../Pages/Create.page/Create.page";

export const appRoutes = {
  home: {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  publications: {
    id: 2,
    path: "/publications",
    element: <PublicationsPage />,
  },
  createPage: {
    id: 3,
    path: "/create",
    element: <CreatePage />,
  },
};

const Routes = () => {
  return (
    <div>
      <Nav />
      <ReactRouterRoutes>
        {Object.values(appRoutes).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </ReactRouterRoutes>
    </div>
  );
};

export default Routes;
