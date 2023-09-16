import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/layout/Layout";
import MainPage from "@/pages/MainPage";
import NoticeDetailPage from "@/pages/NoticeDetailPage";
import NoticePage from "@/pages/NoticePage";
import PurchasePage from "@/pages/PurchasePage";
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
          <Route
            path="/product"
            element={<PurchasePage />}
          />
          <Route
            path="/notice"
            element={<NoticePage />}
          />
          <Route
            path="/notice/:category/:noticeId"
            element={<NoticeDetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
