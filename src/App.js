import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ServiceLayout from "./components/ServiceLayout";
import Alliance from "./pages/Alliance";
import Detail from "./pages/Detail";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Inquiry from "./pages/Inquiry";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Policy from "./pages/Policy";
import SignUp from "./pages/SignUp";
import SubPage from "./pages/SubPage";
import Terms from "./pages/Terms";
import YouthProtection from "./pages/YouthProtection";
import { RecoilRoot, atom } from "recoil";
import MypageLayout from "./components/MypageLayout";
import ReceiveMessage from "./pages/ReceiveMessage";
import InfoModify from "./pages/InfoModify";
import MypageInquiry from "./pages/MypageInquiry";
import AdvertiserNotice from "./pages/AdvertiserNotice";
import CampainInquiry from "./pages/CampainInquiry";
import CampainInquiryDetail from "./pages/CampainInquiry/Detail";
import PaymentDetails from "./pages/PaymentDetails";
import CampainAdmin from "./pages/CampainAdmin";

export const isLoginState = atom({
  key: "isLoginState",
  default: false
});

export const memberTypeState = atom({
  key: "memberTypeState",
  default: true
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    userName: "techb",
  }
});

export const categoryTabState = atom({
  key: "categoryTabState",
  default: "결제 내역 보기"
});

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route path="/detail/:id" element={ <Detail /> } />
            <Route path="/subpage/:category" element={ <SubPage /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route index element={ <Home /> } />
            <Route path="/servicecenter" element={<ServiceLayout />}>
              <Route path="/servicecenter/faq" element={ <Faq /> } />
              <Route path="/servicecenter/inquiry" element={ <Inquiry /> } />
              <Route path="/servicecenter/terms" element={ <Terms /> } />
              <Route path="/servicecenter/policy" element={ <Policy /> } />
              <Route path="/servicecenter/protection" element={ <YouthProtection /> } />
              <Route path="/servicecenter/notice" element={ <Notice /> } />
              <Route path="/servicecenter/alliance" element={ <Alliance /> } />
            </Route>
            <Route path="/mypage" element={<MypageLayout />}>
              <Route path="/mypage/receive_message" element={<ReceiveMessage />} />
              <Route path="/mypage/info_modify" element={<InfoModify />} />
              <Route path="/mypage/mypage_inquiry" element={<MypageInquiry />} />
              <Route path="/mypage/advertiser_notice" element={<AdvertiserNotice />} />
              <Route path="/mypage/campain_inquiry" element={<CampainInquiry />} />
              <Route path="/mypage/campain_inquiry/:id" element={<CampainInquiryDetail />} />
              <Route path="/mypage/payment_details" element={<PaymentDetails />} />
              <Route path="/mypage/campain_admin" element={<CampainAdmin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
