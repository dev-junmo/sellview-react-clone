import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import "./Servicecenter.css";

const ServiceLayout = () => {
  // const { centerMenu } = useParams();
  // const [onState, setOnState] = useState("faq");

  // useEffect(() => {
  //   setOnState(centerMenu);
  //   // console.log(centerMenu);
  // }, [centerMenu])

  return (
    <div className="container mx-auto flex my-8">
      <div className="w-64">
        <h3 className="txt_point_color text-2xl">고객센터</h3>
        <p className="text-sm mb-5">무엇을 도와드릴까요?</p>
        <ul className="sc_menu">
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <NavLink to="/servicecenter/faq" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>자주묻는질문</NavLink>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <NavLink to="/servicecenter/inquiry" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>1:1문의</NavLink>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <NavLink to="/servicecenter/terms" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>이용약관</NavLink>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <NavLink to="/servicecenter/policy" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>개인정보처리방침</NavLink>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <NavLink to="/servicecenter/protection" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>청소년보호정책</NavLink>
          </li>
          <li className="border border-x-0 border-b-0 border-gray-200 text-sm">
            <NavLink to="/servicecenter/notice" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>공지사항</NavLink>
          </li>
          <li className="border border-x-0 border-gray-200 text-sm">
            <NavLink to="/servicecenter/alliance" className="block h-full py-4 hover:bg-gray-100 pl-2.5" style={({isActive}) => ({ background: isActive ? "#efefef" : "", color: isActive ? "#ff3478" : "" })}>제휴문의</NavLink>
          </li>
        </ul>
      </div>
      <div className="service_con ml-10">
        <Outlet />
      </div>
    </div>
  );
}

export default ServiceLayout;