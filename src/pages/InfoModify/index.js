import { useRecoilValue } from "recoil";
import { userInfoState } from "../../App";

const InfoModify = () => {
  const userInfo = useRecoilValue(userInfoState);

  return (
    <>
      <h3 className="text-3xl pb-6"><b style={{ color: "#a694c7" }}>{userInfo.userName}</b>님의 <br /> 회원정보확인 입니다.</h3>
      <div className="flex items-center justify-center flex-col pt-28">
        <b className="text-2xl font-normal">정보를 안전하게 보호하기위해 비밀번호를 다시 확인합니다.</b>
        <span className="text-lg text-gray-500">회원님의 비밀번호가 타인에게 노출되지 않도록 주의하세요</span>
        <div className="border border-gray-300 p-6 mt-6 mb-32" style={{ width: "402px" }}>
          <form>
            <input type="text" className="w-full border border-gray-300 px-2.5 py-2 text-sm" placeholder="비밀번호" />
            <button type="submit" className="block w-full text-white py-4 my-2.5" style={{ backgroundColor: "#747c8a" }}>확인</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default InfoModify;
