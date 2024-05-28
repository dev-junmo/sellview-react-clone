import { useEffect, useState } from "react";
import { faq } from "../../mock";
import "./Faq.css";

const Faq = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [category, setCategory] = useState("all");
  const [showList, setShowList] = useState(faq.faqContents);

  useEffect(() => {
    setShowList(
      faq.faqContents.filter((item) => {
        if(category === "all") return true;
        if(category === item.category) return true;
        return false;
      })
    );
  }, [category]);

  return (
    <>
      <h3 className="text-3xl pb-6">자주묻는질문</h3>
      <div className="w-full border-4 p-8">
        <form>
          <div className="flex items-center">
            <input className="border border-gray-400 py-3 w-full text-sm pl-2.5" placeholder="검색어를 입력하세요." />
            <button className="w-16 bg-gray-500 py-3 border border-gray-500 text-white text-sm">검색</button>
          </div>
        </form>
        <div className="flex items-center mt-8 text-xs">
          <span className="txt_point_color mr-5">인기검색어</span>
          <ul className="popular_search flex items-center">
            <li className="text-gray-400 relative mr-4">이용안내</li>
            <li className="text-gray-400 relative mr-4">캠페인</li>
            <li className="text-gray-400 relative mr-4">포인트</li>
            <li className="text-gray-400 relative mr-4">패널티</li>
          </ul>
        </div>
      </div>
      <div className="border border-gray-200 my-8 p-3">
        <ul className="category_tab flex">
          {faq.faqTab.map((f, i) => (
            <li key={i} onClick={() => {
              setCurrentTab(i);
              setCategory(f.value);
            }} className={`${i === currentTab ? "on" : ""} relative py-2.5 px-5 text-base text-gray-500 cursor-pointer`}>{f.name}</li>
          ))}
        </ul>
      </div>
      <div>
        {showList.map((f, i) => (
          <p key={i} className="p-5 text-base text-gray-600">
            <span className="faq_question">Q.</span>
            {f.question}
          </p>
        ))}
      </div>
    </>
  );
}

export default Faq;