import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { PageArtwork } from "./Pages/PageArtwork.jsx";
import { ErrorGenericComponent } from "./Components/ErrorGenericComponent.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout.jsx";
import AddArtwork, { CreateArtwork } from "./Pages/CreateArtwork.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorGenericComponent />,
    children: [
      { path: "/", element: <App /> },
      { path: "artwork/:id", element: <PageArtwork /> },
      { path: "addArtwork", element: <CreateArtwork /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
