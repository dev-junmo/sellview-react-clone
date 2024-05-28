const Alliance = () => {
  return (
    <>
      <h3 className="text-3xl pb-6">제휴문의</h3>
      <h4 className="text-2xl pb-5">입점상담 절차안내 및 상담신청</h4>
      <ul className="mb-16">
        <li className="text-base text-gray-500">- 심사 결과는 이메일로 발송됩니다.</li>
        <li className="text-base text-gray-500">- 주말 또는 휴무일 문의 시에는 답변이 다소 지연될 수 있으니, 양해해 주시기 바랍니다.</li>
      </ul>
      <form>
        <div className="flex border border-gray-900 border-b-gray-200 border-l-0 border-r-0">
          <div className="flex w-1/2 border-r border-gray-200">
            <div className="w-2/5 py-4 pl-5 bg-neutral-100 leading-10 text-sm">
              <span>분류</span>
            </div>
            <div className="w-full p-4">
              <select className="p-1.5 border border-gray-300 text-sm">
                <option value="선택">선택</option>
                <option value="광고문의">광고문의</option>
              </select>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="w-2/5 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
              <span>회사명</span>
            </div>
            <div className="w-full p-4">
              <input className="w-2/5 p-1.5 border border-gray-300 text-sm" />
            </div>
          </div>
        </div>
        <div className="flex border-b border-gray-200">
          <div className="flex w-1/2">
            <div className="w-2/5 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
              <span>담당자명</span>
            </div>
            <div className="w-full p-4">
              <input className="w-2/5 p-1.5 border border-gray-300 text-sm" />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="w-2/5 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
              <span>담당자 연락처</span>
            </div>
            <div className="w-full p-4">
              <input className="w-2/5 p-1.5 border border-gray-300 text-sm" />
            </div>
          </div>
        </div>
        <div className="flex border-b border-gray-200">
          <div className="flex w-1/2">
            <div className="w-2/5 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
              <span>담당자 이메일</span>
            </div>
            <div className="w-full p-4">
              <input className="w-2/5 p-1.5 border border-gray-300 text-sm" />
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="w-2/5 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
              <span>홈페이지</span>
            </div>
            <div className="w-full p-4">
              <input className="w-2/5 p-1.5 border border-gray-300 text-sm" />
            </div>
          </div>
        </div>
        <div className="flex border-b border-gray-200">
          <div className="w-2/12 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
            <span>제목</span>
          </div>
          <div className="w-full p-4">
            <input className="w-full p-1.5 border border-gray-300 text-sm" />
          </div>
        </div>
        <div className="flex border-b border-gray-200">
          <div className="w-2/12 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
            <span>내용</span>
          </div>
          <div className="w-full p-4">
            <textarea className="w-full p-1.5 border border-gray-300 text-sm h-64"></textarea>
          </div>
        </div>
        <div className="flex border-b border-gray-200">
          <div className="w-2/12 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
            <span>첨부파일</span>
          </div>
          <div className="w-full p-4 pt-6">
            <button className="text-sm text-gray-500 border border-gray-700 bg-zinc-100 border-sm py-0.5 px-2 rounded-sm">찾아보기</button>
          </div>
        </div>
        <div className="flex border-b border-gray-200">
          <div className="w-2/12 py-4 pl-5 bg-neutral-100	leading-10 text-sm">
            <span>보안확인</span>
          </div>
          <div className="w-full p-4">
            {/* <input className="w-2/12 p-1.5 border border-gray-300 text-sm" /> */}
          </div>
        </div>
        <div className="flex justify-between border-b border-gray-200 py-2.5 px-5">
          <div className="flex items-center">
            <input type="checkbox" />
            <span className="text-sm ml-3.5 text-gray-500"> 개인정보 수집, 이용에 동의합니다</span>
          </div>
          <button className="border border-gray-300 text-sm p-2.5 bg-gray-50">수집동의 약관보기</button>
        </div>
        <div className="flex justify-center py-5">
          <button className="py-3.5 px-12 bg-gray-500 text-white">문의하기</button>
        </div>
      </form>
    </>
  );
}

export default Alliance;
