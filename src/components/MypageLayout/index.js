import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { memberTypeState, userInfoState } from "../../App";
import { mypage_menu } from "../../mock";

const MypageLayout = () => {
  const userInfo = useRecoilValue(userInfoState);
  const memberType = useRecoilValue(memberTypeState);

  return (
    <div className="container mx-auto flex my-8">
      {memberType ? (
        <div className="w-64">
          <div className="flex items-center justify-between pt-12 pb-8 px-4 overflow-hidden">
            <div className="w-2/4">
              <img src="../img/profile_img.jpg" alt="프로필 사진" className="rounded-full border border-gray-200 w-20 mx-auto" />
            </div>
            <div className="w-2/4 leading-4">
              <b className="font-normal text-lg">{userInfo.userName}님</b>
              <span className="text-sm text-neutral-500">gmlfus910@techb.kr</span>
              <button className="flex items-center justify-center py-1 px-2 mt-3.5 border border-gray-300 rounded text-xs text-slate-500">
                <img src="../img/note_ico.png" alt="말풍선 아이콘" className="w-4 mr-1" />
                쪽지 <span className="text-rose-500 mx-0.5">0</span> 통
              </button>
            </div>
          </div>
          <div>
            <button className="relative w-full flex items-center justify-center py-3 text-white" style={{ backgroundColor: "#a694c7" }}>
              <img src="../img/att_ico.png" alt="달력 아이콘" className="absolute left-4" />
              <span className="ml-5">출석체크하기</span>
            </button>
            <div>
              <button className="w-2/4 text-white py-3 border-r border-slate-400" style={{ backgroundColor: "#747c8a" }}>이번달출석 <span className="text-yellow-200">0</span></button>
              <button className="w-2/4 text-white py-3" style={{ backgroundColor: "#747c8a" }}>총누적 출석 <span className="text-yellow-200">3</span></button>
            </div>
          </div>
          <ul className="mt-5">
            <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
              <NavLink to="/mypage/receive_message" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>받은 메시지</NavLink>
            </li>
            <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
              <NavLink to="/mypage/info_modify" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>개인정보수정</NavLink>
            </li>
            <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
              <NavLink to="/mypage/mypage_inquiry" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>1:1문의</NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="w-64">
          <div className="flex items-center justify-between pt-12 pb-8 px-4 overflow-hidden">
            <div className="w-2/4">
              <img src="../img/profile_img.jpg" alt="프로필 사진" className="rounded-full border border-gray-200 w-20 mx-auto" />
            </div>
            <div className="w-2/4 leading-4">
              <b className="font-normal text-lg">{userInfo.userName}님</b>
              <span className="text-sm text-neutral-500">gmlfus910@techb.kr</span>
              <button className="flex items-center justify-center py-1 px-2 mt-3.5 border border-gray-300 rounded text-xs text-slate-500">
                <img src="../img/note_ico.png" alt="말풍선 아이콘" className="w-4 mr-1" />
                쪽지 <span className="text-rose-500 mx-0.5">0</span> 통
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-y border-gray-200 mb-4 py-4 px-1.5 text-gray-500">
            <span>나의 포인트</span>
            <span>1,000 P</span>
          </div>
          <div>
            <button className="relative w-full flex items-center justify-center py-3 text-white" style={{ backgroundColor: "#a694c7" }}>
              <img src="../img/att_ico.png" alt="달력 아이콘" className="absolute left-4" />
              <span className="ml-5">출석체크하기</span>
            </button>
            <div>
              <button className="w-2/4 text-white py-3 border-r border-slate-400" style={{ backgroundColor: "#747c8a" }}>이번달출석 <span className="text-yellow-200">0</span></button>
              <button className="w-2/4 text-white py-3" style={{ backgroundColor: "#747c8a" }}>총누적 출석 <span className="text-yellow-200">3</span></button>
            </div>
          </div>
          <ul className="mt-5">
            {mypage_menu.advertiser.map((a, i) => (
              <li className="border border-x-0 border-b-0 border-gray-200 text-sm" key={a.id}>
                <NavLink to={`/mypage/${a.link}`} className="block h-full py-4 hover:bg-gray-100 pl-2.5 text-sm" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#a694c7" : "" })}>{a.name}</NavLink>
              </li>
            ))}
            {/* <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
              <NavLink to="/mypage/receive_message" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>받은 메시지</NavLink>
            </li>
            <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
              <NavLink to="/mypage/info_modify" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>개인정보수정</NavLink>
            </li>
            <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
              <NavLink to="/mypage/mypage_inquiry" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>1:1문의</NavLink>
            </li> */}
          </ul>
        </div>
      )}
      <div className="ml-10" style={{ width: "72.25rem" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default MypageLayout;