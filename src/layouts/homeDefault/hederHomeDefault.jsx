import DropDown from "../../component/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Login from "../../pages/homePage/login";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/userSlice/userSlice";
import Register from "../../pages/homePage/register";
import Flight from "../privateHome/flightHome";
import Hotel from "../../pages/privatePage/Hotel";

import {
  faUser,
  faHotel,
  faPlane,
  
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function HeaderHomeDefault() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [logout, setLogout] = useState(false);
  const [flight, setFlight] = useState(true);
  const [hotel, setHotel] = useState(false);

  useEffect(() => {
    const initSlider = () => {
      const hotels = document.getElementById("hotel");
      const flights = document.getElementById("flight");
      const icon2 = document.getElementById("icon2");
      const icon1 = document.getElementById("icon1");

      hotels.addEventListener("click", () => {
        hotels.classList.add("bg-white", "text-black");
        hotels.classList.remove("hover:text-slate-100", "hover:outline");
        icon2.classList.add("text-blue-500");
        flights.classList.remove("bg-white", "text-slate-800");
        flights.classList.add("hover:outline", "hover:outline-1");
        icon1.classList.remove("text-blue-500");
      });

      flights.addEventListener("click", () => {
        flights.classList.remove("hover:outline", "hover:outline-1");
        flights.classList.add("bg-white", "text-slate-800");
        icon1.classList.add("text-blue-500");
        hotels.classList.remove("bg-white", "text-black");
        hotels.classList.add("hover:text-slate-100", "hover:outline");
        icon2.classList.remove("text-blue-500");
      });
    };
    initSlider();
  }, []);

  const handleClicklogout = () => {
    setLogout(!logout);
  };
  const Logout = () => {
    localStorage.removeItem("accessToken");
    dispatch(resetUser());
  };

  return (
    <>
      <div
        id="header"
        className="  px-[6%] py-5 font-bold  pt-[3px] sticky top-0 z-20 text-slate-100 w-[100vw]  "
      >
        <div className="flex justify-between h-[10%]  items-center ">
          <img
            className=""
            id="img"
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg"
          />

          <div className="flex space-x-10 items-center  ">
            <div className="flex items-center space-x-2 hover:bg-black/35 p-2 rounded-md ">
              <img
                className=" "
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg"
              />

              <div className="flex text-[14px] font-bold  space-x-1   ">
                <p>VI</p>
                <div
                  id="a"
                  className="bg-white w-[2px] h-[14px] mt-[5px]  "
                ></div>
                <p>VND</p>
              </div>
            </div>
            <ul className="flex space-x-6 text-[14px]  ">
              <Link to="hotel">
                <li className="hover:bg-black/25 p-2 rounded-md ">
                  <p>Khách sạn</p>
                </li>
              </Link>
              <Link to="flight">
                <li className="hover:bg-black/25 p-2 rounded-md">Vé máy bay</li>
              </Link>
              <Link
                to="cooperate"
                className="hover:bg-black/35 p-2 rounded-md "
              >
                Hợp tác với chúng tôi
              </Link>
              <li className=" relative  flex items-center ">{<DropDown />}</li>
            </ul>
            {!user?.userName ? (
              <div className="flex space-x-1  ">
                {<Login />}
                {<Register />}
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleClicklogout}
                  className=" bg-red-500 flex  space-x-1 hover:bg-black/40 items-center p-2 rounded-md box-border   "
                >
                  <div className=" h-[24px] bg-blue-400 w-5 flex items-center justify-center rounded-full  ">
                    <FontAwesomeIcon icon={faUser} className="h-[11px]  " />
                  </div>
                  <p className="text-[14px]">{user.userName}</p>
                  <div className="bg-white w-[2px] h-[14px] mt-[5px]  "></div>
                  <img
                    className="h-4"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c00ab1f427ddf2519a3e080d9d9c1436.svg"
                    alt=""
                  />

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="h-[12px]  "
                  />
                </button>

                <div className="  flex items-center justify-center w-[105px] rounded-md h-[40px] text-black hover:bg-slate-500  bg-slate-200/90 right-[91px] bottom-[20px]">
                  <button onClick={Logout}>Đăng xuất</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <header className=" py-5   font-bold  text-slate-300   ">
        <h1 className=" text-center text-[33px] pt-[15px] text-slate-100 mb-8">
          Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn
        </h1>
        <ul className="flex justify-start space-x-5 pl-[200px] font-bold text-[16px] mb-2 ">
          <li className=" rounded-full  ">
            <button
              id="hotel"
              onClick={() => {
                setFlight(false), setHotel(true);
              }}
              className="flex space-x-2 items-center hover:outline-1 hover:outline hover:outline-white  hover: rounded-full hover:text-slate-100 py-2 px-3  "
            >
              <FontAwesomeIcon icon={faHotel} id="icon2" className="h-[21px]" />
              <span>Khách sạn</span>
            </button>
          </li>
          <li id="flight" className=" rounded-full  bg-white text-slate-800 ">
            <button
              onClick={() => {
                setFlight(true), setHotel(false);
              }}
              className="flex space-x-2 items-center py-2 px-3  "
            >
              <FontAwesomeIcon
                icon={faPlane}
                id="icon1"
                className="h-[21px] text-blue-500 "
              />
              <span>Vé máy bay</span>
            </button>
          </li>
        </ul>

        <div className="border-b-[1px] border-white mx-[7%] mt-4"></div>
      </header>
      {flight && (
        <div>
          <Flight />
        </div>
      )}
      {hotel && (
        <div>
          <Hotel />
        </div>
      )}
    </>
  );
}

export default HeaderHomeDefault;
