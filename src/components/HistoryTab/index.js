import { useState } from "react";
import { useRecoilState } from "recoil";
import { categoryTabState } from "../../App";

const HistoryTab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [categoryTab, setCategoryTab] = useRecoilState(categoryTabState);

  const historyCategory = ["결제 내역 보기", "포인트 내역 보기", "충전 내역 보기", "환불 내역 보기", "취소 내역 보기"];

  return (
    <>
      <div className="flex items-center mb-11">
        <div className="w-1/2 pr-10 border-r-[1px] py-4">
          <span className="font-medium text-gray-500">보유포인트</span>
          <div className="flex items-center justify-between mt-1.5">
            <b className="text-4xl text-[#a694c7]">1,000P</b>
            <div className="flex items-center border-[1px] py-1.5 px-4 rounded-md">
              <button className="mr-3 pr-3 border-r-[1px] hover:text-[#a694c7]">포인트 충전하기</button>
              <button className="text-gray-400 hover:text-[#a694c7]">포인트 환불하기</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 py-4 pl-10">
          <span className="font-medium text-gray-500">누적 추가포인트</span>
          <div className="flex items-center mt-1.5">
            <b className="text-4xl text-zinc-400">10,000P</b>
            <span className="ml-7 text-[#a694c7] font-medium">※ 포인트 충전하고 추가포인트까지 적립 받아가세요.</span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <ul className="history_tab flex">
          {historyCategory.map((h, i) => (
            <li key={i} onClick={() => {
              setCurrentTab(i);
              setCategoryTab(h)
            }} className={`${i === currentTab ? "on" : ""} cursor-pointer border-[1px] border-r-0 px-7 py-4`}>{h}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HistoryTab;
