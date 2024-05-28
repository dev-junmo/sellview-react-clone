import { useRecoilValue } from "recoil";
import { categoryTabState, userInfoState } from "../../App";
import { payment_details_list } from "../../mock";
import { useState } from "react";
import "./PaymentDetails.css";
import HistoryTab from "../../components/HistoryTab";

const PaymentDetails = () => {
  const userInfo = useRecoilValue(userInfoState);
  const categoryTab = useRecoilValue(categoryTabState);
  // const [currentTab, setCurrentTab] = useState(0);
  // const [category, setCategory] = useState("결제 내역 보기");

  // const historyCategory = ["결제 내역 보기", "포인트 내역 보기", "충전 내역 보기", "환불 내역 보기", "취소 내역 보기"]

  const historyData = payment_details_list.find((p) => p.categoryValue === categoryTab);

  return (
    <>
      <h3 className="text-3xl pb-6"><b className="text-[#a694c7]">{userInfo.userName}</b>님의 <br /> 결제 내역 확인해보세요.</h3>
      
      {/* <div className="flex items-center mb-11">
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
              setCategory(h)
            }} className={`${i === currentTab ? "on" : ""} cursor-pointer border-[1px] border-r-0 px-7 py-4`}>{h}</li>
          ))}
        </ul>
      </div> */}

      <HistoryTab />

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

export default PaymentDetails;