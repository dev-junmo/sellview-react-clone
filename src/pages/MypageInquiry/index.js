import { useRecoilValue } from "recoil";
import { userInfoState } from "../../App";

const MypageInquiry = () => {
  const userInfo = useRecoilValue(userInfoState);

  return (
    <>
      <h3 className="text-3xl pb-6"><b style={{ color: "#a694c7" }}>{userInfo.userName}</b>님의 <br /> 1:1문의 입니다.</h3>
      <div className="flex items-center justify-center flex-col pt-32">
        <img src="../img/bg_no_result03.png" alt="느낌표 아이콘" className="w-16"  />
        <p className="text-2xl text-gray-400 mt-4">문의내역이 존재하지 않습니다.</p>
        <button className="px-12 py-4 mt-52 text-white mb-10" style={{ backgroundColor: "#747c8a" }}>문의하기</button>
      </div>
    </>
  );
}

export default MypageInquiry;
