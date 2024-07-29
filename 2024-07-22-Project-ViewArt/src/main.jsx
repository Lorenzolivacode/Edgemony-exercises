import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { PageArtwork } from "./Pages/PageArtwork.jsx";
import { ErrorGenericComponent } from "./Components/ErrorGenericComponent.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LanguageProvider } from "./Provider/LanguageContext.jsx";
import DefaultLayout from "./Layout/DefaultLayout.jsx";
import { CreateArtwork } from "./Pages/CreateArtwork.jsx";
import EditArtwork from "./Pages/EditArtwork.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorGenericComponent />,
    children: [
      { path: "/", element: <App /> },
      { path: "artwork/:id", element: <PageArtwork /> },
      { path: "addArtwork", element: <CreateArtwork /> },
      { path: "editArtwork/:id", element: <EditArtwork /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
);
