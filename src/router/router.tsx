import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { toastState } from "@/Atoms";
import ScrollToTop from "@/components/etc/ScrollToTop";
import Toast from "@/components/etc/Toast";
import Layout from "@/layout/Layout";
import CompanyPage from "@/pages/CompanyPage";
import DetailPage from "@/pages/DetailPage";
import InquiryPage from "@/pages/InquiryPage";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import NoticeDetailPage from "@/pages/NoticeDetailPage";
import NoticePage from "@/pages/NoticePage";
import PurchasePage from "@/pages/PurchasePage";
import QnAPage from "@/pages/QnAPage";

const Router = () => {
  const toast = useRecoilValue(toastState);
  return (
    <BrowserRouter>
      <ScrollToTop />
      {toast && <Toast message={toast} />}
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route
            path="/faq"
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
          <Route
            path="/product/:id"
            element={<DetailPage />}
          />
          <Route
            path="/inquiry"
            element={<InquiryPage />}
          />
          <Route
            path="/company"
            element={<CompanyPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
