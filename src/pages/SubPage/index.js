import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { campaign, menu } from "../../mock";
import "./SubPage.css";

const SubPage = () => {
  const { category } = useParams();
  const [currentTab, setCurrentTab] = useState(0);
  const [categoryList, setCategoryList] = useState(campaign.campaignList);

  useEffect(() => {
    setCategoryList(
      campaign.campaignList.filter((c) => {
        if(category === "전체") return true;
        if(category === c.category) return true;
        return false;
      })
    );

    // const categoryFilter = campaign.campaignList.filter((c) => c.category === category);
    // setParamsState(categoryFilter);
  }, [category]);

  return (
    <div className="container mx-auto">
      <div className="border-b border-gray-300 mt-8">
        <ul className="flex">
          {menu.subMenu.map((s, i) => (
            <li key={i} onClick={() => setCurrentTab(i)} className={`${i === currentTab ? "on" : ""} submenu_tab relative mr-5 mb-1 text-gray-500`}>
              <Link to={`/subpage/${s}`}>{s}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-12 mb-2.5">
        <h3 className="text-2xl">구매평</h3>
        <ul className="flex sns_platform">
          <li className="text-gray-500 text-sm">전체</li>
          <li className="text-gray-500 text-sm">블로그</li>
          <li className="text-gray-500 text-sm">인스타그램</li>
          <li className="text-gray-500 text-sm">쿠팡</li>
          <li className="text-gray-500 text-sm">스마트스토어</li>
          <li className="text-gray-500 text-sm">신규오픈</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-wrap">
          {categoryList.map((campaign, index) => (
            <li key={campaign.id} className="w-1/5 pr-4 pt-5">
              <Link to={`/detail/${campaign.id}`}>
                <div className="relative">
                  <img className="rounded-md" src={campaign.thumbnailUrl} />
                  <div></div>
                </div>
                <div className="sns_badge badge-blog">
                  <span>{campaign.channel}</span>
                </div>
                <span className="text-lg block mb-1.5">{campaign.title}</span>
                <span className="text-xs text-gray-400">{campaign.description}</span>
                <div className="flex justify-between text-xs mt-6">
                  <div className="flex items-center">
                    <img src="../../img/txt_ico.png" />
                    <b className="txt_point_color font-medium ml-1">{campaign.apply}</b>명 신청/<b className="txt_point_color font-medium">{campaign.recruits}</b>명 모집중
                  </div>
                  <div className="flex items-center">
                    <img src="../../img/pen_ico.png" />
                    <b className="txt_point_color font-medium ml-1">{campaign.review}</b>개의 리뷰
                  </div>
                </div>
                <div className="badge_additional mt-3.5">
                  <span>{campaign.campain_category}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubPage;