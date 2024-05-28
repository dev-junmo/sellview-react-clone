import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { campaign } from "../../mock";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [dropBtn, setDropBtn] = useState(false);

  const campaignDetail = campaign.campaignList.find((c) => c.id === Number(id));

  console.log(campaignDetail);

  const onClickDrop = () => {
    setDropBtn((prev) => !prev);
  }

  const targetRef = useRef(null);
  const handleScroll = () => {
    // console.log(window.scrollY);

    if(window.scrollY > 103) {
      targetRef.current.style.position = "fixed";
      targetRef.current.style.top = "0";
      targetRef.current.style.bottom = "auto";
      targetRef.current.style.width = "311px";
    }else{
      targetRef.current.style.removeProperty("position");
      targetRef.current.style.removeProperty("top");
      targetRef.current.style.removeProperty("bottom");
      targetRef.current.style.removeProperty("width");
    }

    if(window.scrollY > 1176) {
      targetRef.current.style.position = "absolute";
      targetRef.current.style.top = "auto";
      targetRef.current.style.bottom = "0";
      targetRef.current.style.width = "311px";
    }else{

    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="left_contents">
          <div className="sns_badge badge-blog">
            <ul className="flex">
              {/* {campaignDetail.snsNames.map((sns, i) => (
                <li key={i}>
                  <span>{sns}</span>
                </li>
              ))} */}
            </ul>
          </div>
          <h3 className="text-2xl">{campaignDetail.title}</h3>
          <span className="text-base mt-2.5 block text-gray-500">{campaignDetail.description}</span>
          <div className={`mt-10 ${dropBtn ? "" : "drop_down_hidden"}`}>
            <img src={campaignDetail.detailPageUrl} />
          </div>
          <button className="drop_down_btn border border-gray-300 py-3.5 m-2.5" onClick={onClickDrop}>{dropBtn ? "- 화면 접기" : "+ 더보기"}</button>
          <div className="h-28 border-b border-gray-300 flex py-8">
            <span className=" w-40 text-lg">제공내역</span>
            <span className="text-base text-gray-500">{campaignDetail.provisionDetails}</span>
          </div>
          <div className="h-28 border-b border-gray-300 py-8">
            <div className="flex">
              <span className=" w-40 text-lg">키워드</span>
              <span className="text-base text-gray-500">{campaignDetail.keywords}</span>
            </div>
            <button>키워드 복사</button>
          </div>
          <div className="h-32 border-b border-gray-300 flex py-8">
            <span className=" w-40 text-lg">가이드라인</span>
            <ul>
              {campaignDetail.notification.map((n, i) => (
                <li key={i} className="text-base text-gray-500">{n}</li>
              ))}
            </ul>
          </div>
          <div className="h-28 flex py-8">
            <span className=" w-40 text-lg">리뷰어 주의사항</span>
            <span className="text-base text-gray-500">{campaignDetail.notificationAdd}</span>
          </div>
        </div>
        <div className="right_contents py-2.5 px-3.5 relative">
          <div ref={targetRef} className="right_info absolute top-4">
            <h4 className="text-lg">{campaignDetail.title}</h4>
            {/* <span className="text-sm mt-2.5 block text-gray-500">{campaignDetail.description}</span> */}
            <div className="sns_badge badge-blog">
              <ul className="flex">
                {/* {campaignDetail.snsNames.map((sns, i) => (
                  <li key={i}>
                    <span>{sns}</span>
                  </li>
                ))} */}
              </ul>
            </div>
            <div className="text-sm mt-1.5 border-b border-gray-200 pb-2.5">
              신청 <span className="txt_point_color">{campaignDetail.apply}</span> / 모집 {campaignDetail.recruits}
            </div>
            <div className="py-3.5 px-2.5 text-sm">
              <ul className="review_step">
                <li>
                  <em className="not-italic inline-block pl-2.5 txt_point_color mb-1.5">리뷰어 신청기간</em>
                  <span>{campaignDetail.applicationPeriod}</span>
                </li>
                <li>
                  <em className="not-italic inline-block pl-2.5 mb-1.5 text-gray-500">리뷰어 발표</em>
                  <span>{campaignDetail.releaseDate}</span>
                </li>
                <li>
                  <em className="not-italic inline-block pl-2.5 mb-1.5 text-gray-500">리뷰 등록기간</em>
                  <span>{campaignDetail.reviewPeriod}</span>
                </li>
                <li>
                  <em className="not-italic inline-block pl-2.5 mb-1.5 text-gray-500">캠페인 결과발표</em>
                  <span>{campaignDetail.campaignRelease}</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-200 text-base text-gray-500">
              <ul>
                <li className="py-3.5 flex justify-between items-center border-b border-gray-200 px-1">
                  <span>캠페인 정보</span>
                  <span className="arrow"></span>
                </li>
                <li className="py-3.5 flex justify-between items-center border-b border-gray-200 px-1">
                  <span>제공 내역</span>
                  <span className="arrow"></span>
                </li>
                <li className="py-3.5 flex justify-between items-center border-b border-gray-200 px-1">
                  <span>키워드</span>
                  <span className="arrow"></span>
                </li>
                <li className="py-3.5 flex justify-between items-center border-b border-gray-200 px-1">
                  <span>가이드라인</span>
                  <span className="arrow"></span>
                </li>
                <li className="py-3.5 flex justify-between items-center border-b border-gray-200 px-1">
                  <span>리뷰어 주의사항</span>
                  <span className="arrow"></span>
                </li>
              </ul>
            </div>
            <div className="flex justify-between mt-5">
              <button className="review_request_btn">리뷰신청하기</button>
              <button className="wish_btn">찜하기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-10">
        <h3 className="text-2xl font-medium mb-2.5">
          <b className="txt_point_color">이런 </b> 
          캠페인 어때요?
        </h3>
        <section className="detail_slide">
          <div className="container mx-auto">
            <Slider {...settings}>
              <div>
                <img className="rounded-md" src={campaignDetail.thumbnailUrl} />
                <span className="text-sm block mt-2.5">D-Day 297</span>
                <span className="text-base">{campaignDetail.title}</span>
                {/* <p className="text-xs text-gray-400">{campaignDetail.description}</p> */}
              </div>
              <div>
                <img className="rounded-md" src={campaignDetail.thumbnailUrl} />
                <span className="text-sm block mt-2.5">D-Day 297</span>
                <span className="text-base">{campaignDetail.title}</span>
                {/* <p className="text-xs text-gray-400">{campaignDetail.description}</p> */}
              </div>
              <div>
                <img className="rounded-md" src={campaignDetail.thumbnailUrl} />
                <span className="text-sm block mt-2.5">D-Day 297</span>
                <span className="text-base">{campaignDetail.title}</span>
                {/* <p className="text-xs text-gray-400">{campaignDetail.description}</p> */}
              </div>
              <div>
                <img className="rounded-md" src={campaignDetail.thumbnailUrl} />
                <span className="text-sm block mt-2.5">D-Day 297</span>
                <span className="text-base">{campaignDetail.title}</span>
                {/* <p className="text-xs text-gray-400">{campaignDetail.description}</p> */}
              </div>
              <div>
                <img className="rounded-md" src={campaignDetail.thumbnailUrl} />
                <span className="text-sm block mt-2.5">D-Day 297</span>
                <span className="text-base">{campaignDetail.title}</span>
                {/* <p className="text-xs text-gray-400">{campaignDetail.description}</p> */}
              </div>
              <div>
                <img className="rounded-md" src={campaignDetail.thumbnailUrl} />
                <span className="text-sm block mt-2.5">D-Day 297</span>
                <span className="text-base">{campaignDetail.title}</span>
                {/* <p className="text-xs text-gray-400">{campaignDetail.description}</p> */}
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Detail;