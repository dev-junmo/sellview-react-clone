import { useRecoilValue } from "recoil";
import { userInfoState } from "../../App";
import { advertiser_notice, campain_inquiry_list } from "../../mock";
import { Link } from "react-router-dom";

const CampainInquiry = () => {
  const userInfo = useRecoilValue(userInfoState);

  const onClickDel = () => {
    const confirmValue = window.confirm("삭제하시겠습니까?");
    if(confirmValue) {
      return alert("삭제되었습니다.");
    }
  }

  return (
    <>
      <h3 className="text-3xl pb-6"><b style={{ color: "#a694c7" }}>{userInfo.userName}</b>님의 <br /> 캠페인 문의/답변 내역입니다.</h3>
      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-100 border-t border-black">
              {campain_inquiry_list.header.map((h, i) => (
                <th key={i} className="font-medium py-8">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campain_inquiry_list.content.map((c, i) => (
              <tr key={c.id} className="border-b border-gray-100">
                <td className="w-52 px-3 py-4 text-sm">{c.campain_title}</td>
                <td className="px-3 py-7 text-sm">{c.content.split('\n').map(line => {
                  return (<span>{line}<br /></span>)
                })}</td>
                <td className="w-40 px-3 py-7 text-center text-sm">{c.nickname}</td>
                <td className="w-20 px-3 py-7 text-center text-sm">{c.reception_date}</td>
                <td className="w-44 px-3 py-7 text-center text-sm">
                  {c.answer_state ? (
                  <>
                    <b className="font-medium mr-1">답변완료</b>
                    /
                    <span className="ml-1">{c.answer_date}</span>
                  </>
                  ): (
                    <span>답변대기</span>
                  )}
                </td>
                <td className="w-14 py-7 text-center text-sm">
                  <button className="bg-zinc-500 text-white py-1 px-2 font-light">
                    <Link to={`/mypage/campain_inquiry/${c.id}`}>답변</Link>
                  </button>
                </td>
                <td className="w-14 py-7 text-center text-sm font-light">
                  <button className="text-zinc-700 border border-zinc-700 py-1 px-2" onClick={onClickDel}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CampainInquiry;