import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Menu from "./Menu";
import { useRecoilValue } from "recoil";
import { isLoginState, userInfoState } from "../App";

const Layout = () => {
  const isLogin = useRecoilValue(isLoginState);
  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  return (
    <>
      <header>
        <div className="top-header h-9 border-solid border-b border-gray-200">
          <div className="container mx-auto h-full">
            <ul className="h-full flex justify-end items-center text-xs">
              <li className="relative py-2.5 px-4 cursor-pointer">
                <Link to="/servicecenter/faq">커뮤니티</Link>
                <div className="w-full absolute left-0 top-9 border border-gray-200 text-center bg-white z-10 hidden">
                  <ul>
                    <li className="py-2 px-1.5">마케팅 상담</li>
                    <li className="py-2 px-1.5">정보공유</li>
                  </ul>
                </div>
              </li>
              <li className="relative py-2.5 px-4 cursor-pointer">
                <Link to="/servicecenter/faq">고객센터</Link>
                <div className="w-full absolute left-0 top-9 border border-gray-200 text-center bg-white z-10 hidden">
                  <ul>
                    <li className="py-2 px-1">자주묻는질문</li>
                    <li className="py-2 px-1.5">1:1문의</li>
                    <li className="py-2 px-1.5">공지사항</li>
                    <li className="py-2 px-1.5">제휴문의</li>
                  </ul>
                </div>
              </li>
              {isLogin ? (
                <>
                  <li className="relative py-2.5 px-4 cursor-pointer">
                    <Link to="/mypage/receive_message">마이페이지</Link>
                    <div className="w-full absolute left-0 top-9 border border-gray-200 text-center bg-white z-10 hidden">
                      <ul>
                        <li className="py-2 px-1">개인정보 수정</li>
                        <li className="py-2 px-1.5">1:1문의</li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative py-2.5 px-4 cursor-pointer flex items-center">
                    <img src="img/login_ico.png" alt="login icon" className="mr-1" />
                    {userInfo.userName}
                  </li>
                  <li className="relative py-2.5 px-4 cursor-pointer">
                    <Link to="/">쪽지</Link>
                  </li>
                  <li className="relative py-2.5 px-4 cursor-pointer">
                    <Link to="/">알림</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="relative py-2.5 px-4 cursor-pointer">
                    <Link to="/login" className="flex items-center">
                      <img src="img/login_ico.png" alt="login icon" className="mr-1" />
                      로그인
                    </Link>
                  </li>
                  <li className="relative py-2.5 px-4 cursor-pointer">
                    <Link to="/signup">회원가입</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="header-nav border-solid border-b border-gray-200">
          <div className="container mx-auto h-full flex justify-between items-center">
            <div className="left-menu flex items-center h-full">
              <h1 className="logo">
                <Link to="/">
                  <img src="../img/logo.png" />
                </Link>
              </h1>
              <ul className="h-full flex items-center text-lg">
                <Menu />
                {/* <li className="relative p-2.5 ml-5 cursor-pointer text-center">
                  <Link to="/" onMouseEnter={() => setMenuOn(true)} onMouseLeave={() => setMenuOn(false)} className="gnb_menu hover:text-rose-500">구매평</Link>
                  <div className={`gnb_sub_menu absolute left-1/2 top-14 w-full bg-white border border-gray-200 ${menuOn ? "on" : ""}`} style={{ transform: "translate(-50%)", minWidth: "100px" }}>
                    <ul>
                      <li><Link to="/">전체</Link></li>
                      <li><Link to="/">식품</Link></li>
                      <li><Link to="/">생활</Link></li>
                      <li><Link to="/">뷰티</Link></li>
                      <li><Link to="/">패션</Link></li>
                      <li><Link to="/">유아동</Link></li>
                      <li><Link to="/">반려동물</Link></li>
                      <li><Link to="/">디지털</Link></li>
                      <li><Link to="/">운동/건강</Link></li>
                      <li><Link to="/">레저/스포츠</Link></li>
                      <li><Link to="/">인테리어</Link></li>
                      <li><Link to="/">기타</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="relative p-2.5 ml-5 cursor-pointer text-center">
                  <Link to="/" onMouseEnter={() => setMenuOn(true)} onMouseLeave={() => setMenuOn(false)} className="gnb_menu hover:text-rose-500">구매평 + 리뷰</Link>
                  <div className={`gnb_sub_menu absolute left-1/2 top-14 w-full bg-white border border-gray-200 ${menuOn ? "on" : ""}`} style={{ transform: "translate(-50%)", minWidth: "100px" }}>
                    <ul>
                      <li><Link to="/">전체</Link></li>
                      <li><Link to="/">식품</Link></li>
                      <li><Link to="/">생활</Link></li>
                      <li><Link to="/">뷰티</Link></li>
                      <li><Link to="/">패션</Link></li>
                      <li><Link to="/">유아동</Link></li>
                      <li><Link to="/">반려동물</Link></li>
                      <li><Link to="/">디지털</Link></li>
                      <li><Link to="/">운동/건강</Link></li>
                      <li><Link to="/">레저/스포츠</Link></li>
                      <li><Link to="/">인테리어</Link></li>
                      <li><Link to="/">기타</Link></li>
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="search-btn">
              <img src="../img/serch_btn.png" />
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="w-full pb-10" style={{ backgroundColor: "#373737" }}>
        <div className="border-b border-gray-600">
          <div className="container mx-auto">
            <ul className="flex text-gray-400 text-sm py-6">
              <li className="mx-2.5">회사소개</li>
              <span className="ft_line"></span>
              <li className="mx-2.5">입점/제휴문의</li>
              <span className="ft_line"></span>
              <li className="mx-2.5">이용약관</li>
              <span className="ft_line"></span>
              <li className="mx-2.5"><b className="text-white">개인정보처리방침</b></li>
              <span className="ft_line"></span>
              <li className="mx-2.5">청소년 보호정책</li>
              <span className="ft_line"></span>
            </ul>
          </div>
        </div>
        <div className="container mx-auto flex justify-between py-8">
          <div className="text-xs text-gray-400">
            <h1 className="ft_logo mb-2.5">
              <img src="../img/flogo.png" />
            </h1>
            <p>대표자:정석 <span className="mx-2.5">|</span> 상호:마이비지니스파트너 주식회사</p>
            <p>사업자등록번호:707-87-02696<span className="mx-2.5">|</span>통신판매업신고:2023-경기광명-0080</p>
            <p className="mb-11">주소:14348 경기도 광명시 새빛공원로 67 B동 415호 (일직동)<span className="mx-2.5">|</span>개인정보보호책임자:정석(jseokrt007@naver.com)</p>
            <span>Copyright © 2023 sellview Inc. All rights reserved</span>
          </div>
          <div className="text-xs text-gray-400 clear-both">
            <ul className="flex text-gray-500">
              <li className="w-44 border border-gray-500 px-3 py-1.5 text-lg flex justify-between">
                <span>Influencer</span>
                <b className="txt_point_color">0</b>
              </li>
              <li className="w-44 border border-gray-500 border-l-0 px-3 py-1.5 text-lg flex justify-between">
                <span>Campaign</span>
                <b className="txt_point_color">57</b>
              </li>
              <li className="w-44 border border-gray-500 border-l-0 px-3 py-1.5 text-lg flex justify-between">
                <span>Review</span>
                <b className="txt_point_color">4</b>
              </li>
            </ul>
            <div className="float-right mt-10 text-right">
              <p>
                <span>고객센터: <b className="text-3xl text-white">010-8428-0553</b></span>
              </p>
              <p className="mt-2.5">
                <span>상담시간: 평일 오전 10:00 ~ 오후 06:00</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;