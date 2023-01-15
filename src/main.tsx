import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "page/:pageNumber",
    element: <App />,
  },
  {
    path: "product/:productId",
    element: <App />,
  },
  {
    path: "/",
    element: <></>,
    loader: () => {
      return redirect("page/1");
    },
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
