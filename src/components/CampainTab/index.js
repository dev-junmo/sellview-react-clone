import { useState } from "react";
import { useRecoilState } from "recoil";
import { categoryTabState } from "../../App";
import "./style.css";

const CampainTab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [categoryTab, setCategoryTab] = useRecoilState(categoryTabState);

  const campainCategory = ["등록한 캠페인", "미승인 캠페인", "보류된 캠페인", "모집중 캠페인", "리뷰어 선정캠페인", "리뷰등록 캠페인", "종료 캠페인"];

  return (
    <>
      <div className="mb-5">
        <ul className="campain_tab flex">
          {campainCategory.map((h, i) => (
            <li key={i} onClick={() => {
              setCurrentTab(i);
              setCategoryTab(h)
            }} className={`${i === currentTab ? "on" : ""} w-full cursor-pointer border-[1px] border-r-0 text-sm font-medium text-center`}>
              <span className="block py-4 px-7">{h}</span>
              <b className="block w-full text-center bg-zinc-100 py-1">1</b>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CampainTab;
