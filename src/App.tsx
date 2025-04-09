import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RootLayOut from "./pages/root";
import NewsDetailed from "./components/newsDetail";

const router = createBrowserRouter([
  { path: "/", element: <RootLayOut /> },
  { path: "news/:id", element: <NewsDetailed /> },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
      </DndProvider>
    </QueryClientProvider>
  );
};

export default App;
