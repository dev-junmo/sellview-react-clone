import { useRecoilValue } from "recoil";
import { userInfoState } from "../../App";
import { advertiser_notice } from "../../mock";

const AdvertiserNotice = () => {
  const userInfo = useRecoilValue(userInfoState);
  const sortedItems = [...advertiser_notice.content].sort((a, b) => b.id - a.id);

  return (
    <>
      <h3 className="text-3xl pb-6"><b style={{ color: "#a694c7" }}>{userInfo.userName}</b>님의 <br /> 광고주 공지사항 입니다.</h3>
      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-100 border-t border-black">
              {advertiser_notice.header.map((h, i) => (
                <th key={i} className="font-medium text-gray-500 py-5">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((c, i) => (
              <tr key={c.id} className="border-b border-gray-100">
                <td className="w-24 py-4 text-center text-gray-500">{c.id}</td>
                <td className="w-24 py-4 text-center text-gray-400">[{c.classification}]</td>
                <td className="px-2 py-4 text-gray-500">{c.title}</td>
                <td className="w-24 py-4 text-center text-gray-500">{c.registration_date}</td>
                <td className="w-22 py-4 text-center text-gray-500">{c.check_num}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdvertiserNotice;