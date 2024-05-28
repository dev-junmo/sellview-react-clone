import { useRecoilValue } from "recoil";
import { userInfoState } from "../../App";

const ReceiveMessage = () => {
  const userInfo = useRecoilValue(userInfoState);

  return (
    <>
      <h3 className="text-3xl pb-6"><b style={{ color: "#a694c7" }}>{userInfo.userName}</b>님의 <br /> 받은메시지 입니다.</h3>
      <div>
        <ul className="flex flex-wrap">
          <li className="m-2.5 border border-gray-200 rounded-xl p-5" style={{ width: "22%" }}>
            <p>축하합니다! 신청하신 캠페인의 리뷰어로 선정되었습니다. [마이페이지-나의 캠페인-선정된 캠페인]에서 신청하신 캠페인 가이드라인 확인 후 미션을 진행해주세요. </p>
            <div className="flex items-center justify-between mt-8">
              <img src="../img/mess_icon.png" alt="알림 아이콘" />
              <span className="text-xs text-gray-500">2023.03.10</span>
            </div>
          </li>
          <li className="m-2.5 border border-gray-200 rounded-xl p-5" style={{ width: "22%" }}>
            <p>축하합니다! 신청하신 캠페인의 리뷰어로 선정되었습니다. [마이페이지-나의 캠페인-선정된 캠페인]에서 신청하신 캠페인 가이드라인 확인 후 미션을 진행해주세요. </p>
            <div className="flex items-center justify-between mt-8">
              <img src="../img/mess_icon.png" alt="알림 아이콘" />
              <span className="text-xs text-gray-500">2023.03.10</span>
            </div>
          </li>
          <li className="m-2.5 border border-gray-200 rounded-xl p-5" style={{ width: "22%" }}>
            <p>축하합니다! 신청하신 캠페인의 리뷰어로 선정되었습니다. [마이페이지-나의 캠페인-선정된 캠페인]에서 신청하신 캠페인 가이드라인 확인 후 미션을 진행해주세요. </p>
            <div className="flex items-center justify-between mt-8">
              <img src="../img/mess_icon.png" alt="알림 아이콘" />
              <span className="text-xs text-gray-500">2023.03.10</span>
            </div>
          </li>
          <li className="m-2.5 border border-gray-200 rounded-xl p-5" style={{ width: "22%" }}>
            <p>축하합니다! 신청하신 캠페인의 리뷰어로 선정되었습니다. [마이페이지-나의 캠페인-선정된 캠페인]에서 신청하신 캠페인 가이드라인 확인 후 미션을 진행해주세요. </p>
            <div className="flex items-center justify-between mt-8">
              <img src="../img/mess_icon.png" alt="알림 아이콘" />
              <span className="text-xs text-gray-500">2023.03.10</span>
            </div>
          </li>
          <li className="m-2.5 border border-gray-200 rounded-xl p-5" style={{ width: "22%" }}>
            <p>축하합니다! 신청하신 캠페인의 리뷰어로 선정되었습니다. [마이페이지-나의 캠페인-선정된 캠페인]에서 신청하신 캠페인 가이드라인 확인 후 미션을 진행해주세요. </p>
            <div className="flex items-center justify-between mt-8">
              <img src="../img/mess_icon.png" alt="알림 아이콘" />
              <span className="text-xs text-gray-500">2023.03.10</span>
            </div>
          </li>
          <li className="m-2.5 border border-gray-200 rounded-xl p-5" style={{ width: "22%" }}>
            <p>축하합니다! 신청하신 캠페인의 리뷰어로 선정되었습니다. [마이페이지-나의 캠페인-선정된 캠페인]에서 신청하신 캠페인 가이드라인 확인 후 미션을 진행해주세요. </p>
            <div className="flex items-center justify-between mt-8">
              <img src="../img/mess_icon.png" alt="알림 아이콘" />
              <span className="text-xs text-gray-500">2023.03.10</span>
            </div>
          </li>
          <li className="m-2.5 border border-gray-200 rounded-xl p-5" style={{ width: "22%" }}>
            <p>축하합니다! 신청하신 캠페인의 리뷰어로 선정되었습니다. [마이페이지-나의 캠페인-선정된 캠페인]에서 신청하신 캠페인 가이드라인 확인 후 미션을 진행해주세요. </p>
            <div className="flex items-center justify-between mt-8">
              <img src="../img/mess_icon.png" alt="알림 아이콘" />
              <span className="text-xs text-gray-500">2023.03.10</span>
            </div>
          </li>
          <li className="m-2.5 border border-gray-200 rounded-xl p-5" style={{ width: "22%" }}>
            <p>축하합니다! 신청하신 캠페인의 리뷰어로 선정되었습니다. [마이페이지-나의 캠페인-선정된 캠페인]에서 신청하신 캠페인 가이드라인 확인 후 미션을 진행해주세요. </p>
            <div className="flex items-center justify-between mt-8">
              <img src="../img/mess_icon.png" alt="알림 아이콘" />
              <span className="text-xs text-gray-500">2023.03.10</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ReceiveMessage;