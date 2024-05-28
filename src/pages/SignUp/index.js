import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container mx-auto flex justify-center items-center py-24">
      <div className="sign_up_box text-center">
        <h3 className="text-4xl mb-1.5">당신의 마케팅을 도와 주는 서비스</h3>
        <p className="text-sm">본인에게 알맞은 유형을 선택하고, 서비스를 경험해보세요.</p>
        <div className="sign_up_area flex mt-8">
          <div className="border border-gray-200 pt-12 w-1/2 pb-1.5">
            <img src="../../img/review_ico.png" className="mx-auto" />
            <p className="text-base text-gray-600 leading-tight">리뷰어/개인회원 <br /> 회원가입하기</p>
            <button className="sign_up_btn block mx-auto mb-2.5 mt-4">개인회원가입</button>
            <button className="naver_sign_up relative block mx-auto border border-gray-200 w-4/5 py-2 text-sm mb-1.5">네이버 회원가입</button>
            <button className="kakao_sign_up relative block mx-auto border border-gray-200 w-4/5 py-2 text-sm mb-1.5">카카오 회원가입</button>
          </div>
          <div className="border border-gray-200 border-l-0 pt-12 w-1/2">
            <img src="../../img/cooper_ico.png" className="mx-auto" />
            <p className="text-base text-gray-600 leading-tight">광고주/기업회원 <br /> 회원가입하기</p>
            <button className="sign_up_btn block mx-auto mb-2.5 mt-4">개인회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;