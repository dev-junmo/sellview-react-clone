import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Slider from "react-slick";
import { campaign } from "../../mock";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="main_slide_wrap">
        <div className="container mx-auto">
          <Slider {...settings}>
            <div>
              <img src="img/3731645034_1HN3rTaQ_banner_475x342_1.jpg" />
            </div>
            <div>
              <img src="img/3731645034_0PEXxDBg_banner_475x342_2.jpg" />
            </div>
            <div>
              <img src="img/3731645034_bjgA2o0F_banner_475x342_3_1.jpg" />
            </div>
            <div>
              <img src="img/3731645034_YmpQT460_banner_475x342_4.jpg" />
            </div>
            <div>
              <img src="img/3731645034_3OtEoYdJ_banner_475x342_5.jpg" />
            </div>
          </Slider>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-medium">
            <b className="txt_point_color">추천 </b> 
            캠페인
          </h3>
          <div>
            <ul className="flex flex-wrap">
              {campaign.campaignList.slice(0, 10).map((campaign, index) => (
                <li key={campaign.id} className="w-1/5 pr-4 pt-5">
                  <Link to={`/detail/${campaign.id}`}>
                    <div className="relative">
                      <img className="rounded-md" src={campaign.thumbnailUrl} />
                      <div className="absolute top-2.5 left-2 bg-zinc-500 opacity-90 rounded-3xl py-1 px-2 leading-none shadow-lg">
                        <span className="text-white text-sm font-thin">{campaign.deadline}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <div>
                        <img src="img/naver_logo.png" alt="스마트 스토어" />
                      </div>
                      <div>
                        <button className="share_btn">공유버튼</button>
                        <button className="like_btn">찜하기버튼</button>
                      </div>
                    </div>
                    <span className="block" style={{ fontSize: "17px" }}>{campaign.title}</span>
                    <span className="text-xs text-gray-400">{campaign.hashtags}</span>
                    <div className="flex items-center text-sm mt-6">
                      <img src="../../img/txt_ico.png" />
                      <b className="txt_point_color ml-1">{campaign.apply}</b>명 신청/<b className="txt_point_color">{campaign.recruits}</b>명 모집중
                    </div>
                    <div className="badge_additional mt-2">
                      <span className="inline-block px-1.5 py-1 text-xs font-bold mr-1.5" style={{ backgroundColor: "#f5f0fb", border: "1px solid #ab7ec8", color: "#ab7ec8" }}>{campaign.point}P</span>
                      <span className="inline-block px-1.5 py-1 text-xs font-bold mr-1.5" style={{ backgroundColor: "#ECECEC", border: "1px solid #999999", color: "#999999" }}>{campaign.campain_category}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-medium">
            <b className="txt_point_color">새로운 </b> 
            캠페인
          </h3>
          <div>
            <ul className="flex flex-wrap">
              {campaign.campaignList.slice(0, 20).map((campaign, index) => (
              <li key={campaign.id} className="w-1/5 pr-4 pt-5">
                <img className="rounded-md" src={campaign.thumbnailUrl} />
                <div className="sns_badge badge-blog">
                  <span>{campaign.channel}</span>
                </div>
                <span className="text-lg block mb-1.5">{campaign.title}</span>
                <span className="text-xs text-gray-400">{campaign.description}</span>
                <div className="flex justify-between text-xs mt-6">
                  <div className="flex items-center">
                    <img src="img/txt_ico.png" />
                    <b className="txt_point_color font-medium ml-1">{campaign.apply}</b>명 신청/<b className="txt_point_color font-medium">{campaign.recruits}</b>명 모집중
                  </div>
                  <div className="flex items-center">
                    <img src="img/pen_ico.png" />
                    <b className="txt_point_color font-medium ml-1">{campaign.review}</b>개의 리뷰
                  </div>
                </div>
                <div className="badge_additional mt-3.5">
                  <span>{campaign.campain_category}</span>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-medium">
            <b className="txt_point_color">마감임박 </b> 
            캠페인
          </h3>
          <div>
            <ul className="flex flex-wrap">
              {campaign.campaignList.slice(0, 20).map((campaign, index) => (
              <li key={campaign.id} className="w-1/5 pr-4 pt-5">
                <img className="rounded-md" src={campaign.thumbnailUrl} />
                <div className="sns_badge badge-blog">
                  <span>{campaign.channel}</span>
                </div>
                <span className="text-lg block mb-1.5">{campaign.title}</span>
                <span className="text-xs text-gray-400">{campaign.description}</span>
                <div className="flex justify-between text-xs mt-6">
                  <div className="flex items-center">
                    <img src="img/txt_ico.png" />
                    <b className="txt_point_color font-medium ml-1">{campaign.apply}</b>명 신청/<b className="txt_point_color font-medium">{campaign.recruits}</b>명 모집중
                  </div>
                  <div className="flex items-center">
                    <img src="img/pen_ico.png" />
                    <b className="txt_point_color font-medium ml-1">{campaign.review}</b>개의 리뷰
                  </div>
                </div>
                <div className="badge_additional mt-3.5">
                  <span>{}</span>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;