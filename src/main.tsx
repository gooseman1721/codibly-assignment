import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "page/:pageNumber",
    element: <App />,
  },
  {
    path: "/",
    element: <></>,
    loader: () => {
      return redirect("page/1");
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
