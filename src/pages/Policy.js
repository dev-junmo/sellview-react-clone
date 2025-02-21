const Policy = () => {
  return (
    <>
      <h3 className="text-3xl pb-6">개인정보 처리방침</h3>
      <p className="text-sm text-gray-500 mb-12 leading-6">
        마이비지니스파트너 주식회사(이하 "회사"라 함)는 이용자들의 개인정보보호를 매우 중요시하며, 이용자가 회사의 서비스(이하 "셀뷰")를 이용함과 동시에 온라인상에서 회사에 제공한 개인정보를 보호받을 수 있도록 최선을 다하고 있습니다.
        <br />
        이에 회사는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정 및 정보통신부가 제정한 개인정보보호지침을 준수하고 있습니다.
        <br />
        회사는 개인정보 보호정책을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 
      </p>
      <div className="text-sm text-gray-500 leading-6 mb-12">
        <b>제1조 개인정보의 처리 목적</b>
        <p className="mb-6">회사는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하거나 이용자의 동의 없이 외부에 공개하지 않습니다.</p>
        <ol>
          <li>1. 회원가입 및 관리 : 서비스 제공 및 이용을 위한 가입의사 확인과 본인 식별∙인증, 이용약관 위반에 따른 이용제한 조치, 회원자격 유지관리, 서비스 부정이용 방지, 불만/민원처리 등 </li>
          <li>2. 서비스의 이행 : 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급/배송 등</li>
          <li>3. 기타 신규 서비스/이벤트 및 광고성 정보 제공 및 참여기회 제공, 마케팅을 위한 자료활용 등</li>
        </ol>
      </div>
      <div className="text-sm text-gray-500 leading-6 mb-12">
        <b>제2조. 개인정보처리 위탁</b>
        <p className="mb-6">
          회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다. <br />
          위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적, 관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리, 감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고,  <br />
          수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
        </p>
      </div>
      <div className="text-sm text-gray-500 leading-6 mb-12">
        <b>제3조. 정보주체의 권리, 의무 및 그 행사방법 </b>
        <p className="mb-6">이용자는 개인정보주체로서 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
        <ol>
          <li>1. 개인정보 열람요구</li>
          <li>2. 오류 등이 있을 경우 정정 요구</li>
          <li>3. 삭제요구</li>
          <li>4. 처리정지 요구</li>
        </ol>
      </div>
      <div className="text-sm text-gray-500 leading-6 mb-12">
        <b>제4조. 처리하는 개인정보의 항목 작성</b>
        <p className="mb-6">회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
        <p className="mb-6">
          <span>1. 회원가입</span>
          <ol>
            <li>- 리뷰어 회원 : 아이디, 이메일, 비밀번호, 이름, 닉네임, 연락처, 주소, 성별, 생년월일</li>
            <li>- 광고주 회원 : 아이디, 이메일, 비밀번호, 이름, 닉네임, 연락처, 주소, 성별, 생년월일, 사업자정보(상호명, 사업자번호, 대표자명, 사업장소재지, 업태, 업종)</li>
          </ol>
        </p>
        <p className="mb-6">
          <span>2. 캠페인 신청</span>
          <ol>
            <li>- 구매평 캠페인 : 구매자정보(제품/서비스를 구매하기 위한 사이트의 아이디), 이름, 닉네임, 출생년도, 성별, 연락처 </li>
            <li>- 구매평+블로그 캠페인 : 블로그 url, 구매자정보(제품/서비스를 구매하기 위한 사이트의 아이디), 이름, 닉네임, 출생년도, 성별, 연락처 </li>
            <li>- 구매평+인스타그램 캠페인 : 인스타그램 url, 구매자정보(제품/서비스를 구매하기 위한 사이트의 아이디), 이름, 닉네임, 출생년도, 성별, 연락처 </li>
            <li>- 그 외 캠페인 참여를 위한 추가 개인정보로 필수입력사항에 ‘의류/잡화 사이즈, 키, 피부타입, 결혼여부, 자녀유무, 자녀성별/나이, 직업, 반려동물유무’를 받을 수 있습니다.</li>
          </ol>
        </p>
        <p className="mb-6">
          <span>3. 포인트 환급</span>
          <ol>
            <li>
              - 예금주 이름, 입금계좌번호, 신분증사본(주민등록번호), 통장사본(계좌일치확인)
              <br />
              포인트 환급 시 관련 법상 사업소득에 따른 세금 공제 및 국세청 신고를 위해 신분증 사본과 통장 사본을 첨부 받아 본인확인을 합니다.
            </li>
          </ol>
        </p>
        <p className="mb-6">
          <span>4. 기타 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</span>
          <ol>
            <li>- 공통 : 쿠키, 접속IP, 접속환경, 접속일시, 불량 혹은 비정상 이용기록, 서비스이용기록</li>
            <li>- 모바일 : os버전, 단말기정보</li>
          </ol>
        </p>
      </div>
    </>
  );
}

export default Policy;