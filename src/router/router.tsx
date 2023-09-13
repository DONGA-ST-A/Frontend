import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/layout/Layout";
import MainPage from "@/pages/MainPage";
import QnAPage from "@/pages/QnAPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="/qna"
            element={<QnAPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
