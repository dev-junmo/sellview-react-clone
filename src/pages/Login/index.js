import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useRecoilState } from "recoil";
import { isLoginState, memberTypeState } from "../../App";

const Login = () => {
  // const [memberState, setMemberState] = useState(true);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [memberType, setMemberType] = useRecoilState(memberTypeState);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  const onSubmitLogin = (e) => {
    e.preventDefault();

    setIsLogin(true);
    // setMemberType(memberState);

    console.log("memberType", memberType);
  };

  return (
    <div className="container mx-auto flex justify-center items-center py-40">
      <div className="login_box">
        <ul className="flex w-full">
          <li onClick={() => setMemberType(true)} className={`${memberType ? "on" : ""} flex justify-center items-center w-full text-lg border border-gray-200 cursor-pointer`}>
            리뷰어
          </li>
          <li onClick={() => setMemberType(false)} className={`${memberType ? "" : "on"} flex justify-center items-center w-full text-lg border border-gray-200 cursor-pointer`}>
            광고주
          </li>
        </ul>
        <div className="pt-5">
          <form onSubmit={onSubmitLogin}>
            <div className="mb-2.5">
              <input className="w-full text-sm border border-gray-200 py-3 pl-2.5" placeholder="이메일" required />
            </div>
            <div>
              <input className="w-full text-sm border border-gray-200 py-3 pl-2.5" placeholder="패스워드" required />
            </div>
            <button type="submit" className="w-full bg_point_color text-white my-5 py-3 text-sm">로그인</button>
          </form>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div>
            <label className="cursor-pointer">
              <input type="checkbox" className="checked:bg-blue-500 align-middle mr-1" />
              자동 로그인
            </label>
          </div>
          <div>
            <Link to="/">아이디찾기</Link>
            <span className="px-2 text-gray-300">|</span>
            <Link to="/">패스워드찾기</Link>
          </div>
        </div>
        {memberType && (
          <div className="mt-4">
            <button className="flex justify-around items-center w-full text-center border border-gray-200 py-2.5 mb-1.5">
              <img src="../../img/naver_login_icon.png" />
              <span>네이버 간편로그인</span>
              <span></span>
            </button>
            <button className="flex justify-around items-center w-full text-center border border-gray-200 py-2.5">
              <img src="../../img/kakao_login_ico.png" />
              <span>카카오 간편로그인</span>
              <span></span>
            </button>
          </div>
        )}
        <div className="flex my-4">
          <button className="block w-full border border-r-0 border-gray-200 py-6 pl-8 text-left leading-tight">
            <img src="https://sellview.co.kr/skin/demo/img/review_on_ico.png" className="float-left mr-3 mt-3" />
            <span className="float-left">리뷰어 <br /> 회원가입하기</span>
          </button>
          <button className="block w-full border border-gray-200 py-6 pl-8 text-left leading-tight">
            <img src="https://sellview.co.kr/skin/demo/img/cooper_on_ico.png" className="float-left mr-3 mt-3" />
            <span className="float-left">리뷰어 <br /> 회원가입하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;