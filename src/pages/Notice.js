const Notice = () => {
  return (
    <>
      <h3 className="text-3xl pb-6">공지사항</h3>
      <div>
        <table className="text-sm w-full border-b border-gray-200 border-t border-t-gray-700 text-gray-600">
          <colgroup>
            <col width="80" />
            <col width="80" />
            <col />
            <col width="121" />
            <col width="80" />
          </colgroup>
          <tr>
            <th className="py-2.5 px-8 leading-10 break-keep bg-neutral-50 font-normal">번호</th>
            <th className="py-2.5 px-8 leading-10 break-keep bg-neutral-50 font-normal">분류</th>
            <th className="py-2.5 px-8 leading-10 break-keep bg-neutral-50 font-normal">제목</th>
            <th className="py-2.5 px-8 leading-10 break-keep bg-neutral-50 font-normal">등록일</th>
            <th className="py-2.5 px-8 leading-10 break-keep bg-neutral-50 font-normal">조회</th>
          </tr>
          <tr>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-center">2</td>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-center">[공지]</td>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-left">[필독] 리뷰 등록 및 스폰서배너 등록 방법</td>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-center">2023.02.16.</td>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-center">7</td>
          </tr>
          <tr>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-center">1</td>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-center">[공지]</td>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-left">포인트 이용안내</td>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-center">2023.02.16.</td>
            <td className="py-3.5 px-2.5 leading-6 break-keep text-center">20</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Notice;
