import DropPageHotel from "./pageHotel/dropPageHotel";
import { MdYoutubeSearchedFor } from "react-icons/md";
import PageDateHote1 from "./pageHotel/pageDateHotel1";
import PageDateHote2 from "./pageHotel/pageDateHotel2";
import { useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import PagePassengerHotel from "./pageHotel/pagePassengerHotel";
import { Link } from "react-router-dom";

function OneHotel() {
  useEffect(() => {
    const initSlider = () => {
      const button = document.getElementsByClassName("button");
      const white = document.getElementById("white");
      const black = document.getElementById("black");

      black.addEventListener("click", (event) => {
        let isInsideButton = false;
        for (let i = 0; i < button.length; i++) {
          if (button[i].contains(event.target)) {
            isInsideButton = true;
            break; // Nếu tìm thấy target nằm trong button thì dừng vòng lặp
          }
        }

        if (!isInsideButton) {
          white.style.position = "fixed";
          white.style.top = "0";
          white.style.left = "0";
          white.style.width = "100vw";
          white.style.height = "100vh";
          white.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          white.style.zIndex = "1";
          black.style.position = "relative";
          black.style.zIndex = "2";

          document.addEventListener("click", handleClickOutside);
        }
      });

      const handleClickOutside = (event) => {
        if (!black.contains(event.target)) {
          white.style.position = "";
          white.style.top = "";
          white.style.left = "";
          white.style.width = "";
          white.style.height = "";
          white.style.backgroundColor = "";
          white.style.zIndex = "";
          black.style.position = "";
          black.style.zIndex = "";
          document.removeEventListener("click", handleClickOutside);
        }
      };
    };
    initSlider();
  }, []);

  return (
    <div id="black" className="relative  w-full shadow-md rounded-md  ">
      <div>
        <div id="white"></div>
        <div className=" flex  translate-y-2  items-center  space-x-2 text-blue-500  bg-slate-200 font-medium px-6 py-3 rounded-t-lg    ">
          <p className="text-[25px]">
            <MdYoutubeSearchedFor />
          </p>
          <p className="text-[14px]">Khách sạn xem gần đây</p>
        </div>
  
        <div className="p-3 space-y-4 bg-white">
          <div>
            <p>Thành phố, địa điểm hoặc tên khách sạn:</p>
            <DropPageHotel />
          </div>
          <div className="flex space-x-5 max-xl:block">
            <div className="max-xl:px-5">
              <p>Nhận phòng:</p>
              <PageDateHote1 />
            </div>
  
            <div>
              <p>Trả phòng:</p>
              <PageDateHote2 />
            </div>
          </div>
          <div className="flex">
            <div className="max-xl:px-5">
              <p>Khách và Phòng</p>
              <div className="flex space-x-6 max-xl:block max-xl:space-y-2">
                <p>
                  <PagePassengerHotel />
                </p>
                <Link to="/hotelSearch" className="flex items-center  rounded-lg font-bold space-x-2 text-slate-100 justify-center py-1  bg-orange-600 px-[60px]  ">
                  <HiMagnifyingGlass />
                  <p>Tìm Khách sạn</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneHotel;
