import { useRecoilValue } from "recoil";
import { categoryTabState, userInfoState } from "../../App";
import { payment_details_list } from "../../mock";
import HistoryTab from "../../components/HistoryTab";
import CampainTab from "../../components/CampainTab";

const CampainAdmin = () => {
  const userInfo = useRecoilValue(userInfoState);
  const categoryTab = useRecoilValue(categoryTabState);

  const historyData = payment_details_list.find((p) => p.categoryValue === categoryTab);

  return (
    <>
      <h3 className="text-3xl pb-6"><b className="text-[#a694c7]">{userInfo.userName}</b>님 <br /> 등록한 캠페인 입니다.</h3>

      <CampainTab />

      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-100">
              {historyData.header.map((h, i) => (
                <th key={i} className="font-normal py-6">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {historyData.categoryValue === "결제 내역 보기" && (
            <>
              {historyData.content.map((p, i) => (
                <tr key={p.id} className="border-b border-slate-400">
                  <td className="px-3 py-4 text-center text-sm font-light">{p.payment_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.campain_title}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.type}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.recruitment_channel}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.number_recruits}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.reviewer_mission}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.payback_amount}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.total_payment_points}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.charging_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.add_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.payment_status}</td>
                </tr>
              ))}
            </>
          )}
          {historyData.categoryValue === "환불 내역 보기" && (
            <>
              {historyData.content.map((p, i) => (
                <tr key={p.id} className="border-b border-slate-400">
                  <td className="px-3 py-4 text-center text-sm font-light">{p.refund_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.refund_account}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.refund_bank}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.account_holder}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.refund_request_amount}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.refund_fee}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.refund_amount}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.tax_email}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.refund_check_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.refund_state}</td>
                </tr>
              ))}
            </>
          )}
          {historyData.categoryValue === "충전 내역 보기" && (
            <>
              {historyData.content.map((p, i) => (
                <tr key={p.id} className="border-b border-slate-400">
                  <td className="px-3 py-4 text-center text-sm font-light">{p.apply_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.deposit_info}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.deposit_amount}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.depositor}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.deposit_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.charging_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.add_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.tax_email}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.deposit_check_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.deposit_state}</td>
                </tr>
              ))}
            </>
          )}
          {historyData.categoryValue === "포인트 내역 보기" && (
            <>
              {historyData.content.map((p, i) => (
                <tr key={p.id} className="border-b border-slate-400">
                  <td className="px-3 py-4 text-center text-sm font-light">{p.apply_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.content}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.point_change}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.total_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.charging_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.add_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.save_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.use_date}</td>
                </tr>
              ))}
            </>
          )}
          {historyData.categoryValue === "취소 내역 보기" && (
            <>
              {historyData.content.map((p, i) => (
                <tr key={p.id} className="border-b border-slate-400">
                  <td className="px-3 py-4 text-center text-sm font-light">{p.cancel_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.campain_title}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.type}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.recruitment_channel}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.number_recruits}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.reviewer_mission}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.payback_amount}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.total_payment_points}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.charging_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.add_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.cancel_point}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.payment_date}</td>
                  <td className="px-3 py-7 text-center text-sm font-light">{p.cancel_status}</td>
                </tr>
              ))}
            </>
          )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CampainAdmin;