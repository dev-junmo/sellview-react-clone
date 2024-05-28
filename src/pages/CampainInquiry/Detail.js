import { useRecoilValue } from "recoil";
import { userInfoState } from "../../App";
import { advertiser_notice, campain_inquiry_list } from "../../mock";
import { Link, useParams, useSearchParams } from "react-router-dom";

const CampainInquiryDetail = () => {
  const userInfo = useRecoilValue(userInfoState);
  const { id } = useParams();

  const inquiryFind = campain_inquiry_list.content.find((c) => c.id === Number(id));

  return (
    <>
      <h3 className="text-3xl pb-6"><b style={{ color: "#a694c7" }}>{userInfo.userName}</b>님의 <br /> 캠페인 문의/답변 내역입니다.</h3>
      <div className="w-full mt-2">
        <div className="flex items-center border-y border-slate-500">
          <div className="w-1/6 bg-zinc-100 p-4 font-medium">닉네임</div>
          <div className="p-4 font-light text-sm">{inquiryFind.nickname}</div>
        </div>
        <div className="flex items-center border-b border-slate-500">
          <div className="w-1/6 bg-zinc-100 p-4 font-medium">캠페인명</div>
          <div className="p-4 font-light text-sm">{inquiryFind.campain_title}</div>
        </div>
        <div className="flex items-center border-b border-slate-500" style={{ minHeight: "150px" }}>
          <div className="w-1/6 bg-zinc-100 p-4 font-medium" style={{ minHeight: "150px" }}>문의내용</div>
          <div className="p-4 font-light text-sm" style={{ minHeight: "150px" }}>{inquiryFind.content.split('\n').map(line => {
                  return (<span>{line}<br /></span>)
                })}</div>
        </div>
        <div className="flex items-center border-b border-slate-500" style={{ minHeight: "150px" }}>
          <div className="w-1/6 bg-zinc-100 p-4 font-medium" style={{ height: "230px" }}>답변내용</div>
          <div className="w-5/6 p-4 font-light text-sm" style={{ height: "230px" }}>
            <textarea className="w-full h-full border border-slate-500"></textarea>
          </div>
        </div>
        <button className="block w-40 bg-zinc-500 text-white rounded py-2 text-sm font-light mt-4 mx-auto">
          {inquiryFind.answer_state ? "답변하기" : "수정하기"}
        </button>
      </div>
    </>
  );
}

export default CampainInquiryDetail;