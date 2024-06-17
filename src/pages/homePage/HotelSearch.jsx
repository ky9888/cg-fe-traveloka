import { Link } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { selectAdults } from "../../redux/mainSlice/toggleAdult";
import { selectBaby } from "../../redux/mainSlice/toggleBaby";
import { selectChildren } from "../../redux/mainSlice/toggleChildren";

function HotelSearch() {
  const inputhotel = useSelector((state) => state.inputt.inputHotell);
  // const inputhotel1 = useSelector((state) => state.inputt.inputHotel1);
  const Adults = useSelector(selectAdults);
  const children = useSelector(selectChildren);
  const baby = useSelector(selectBaby);
  const dateHotel1 = useSelector((state) => state.inputt.dateHotel1);
  const dateHotel2 = useSelector((state) => state.inputt.dateHotel2);

  console.log("loggggggg", dateHotel1);
  console.log("loggg", dateHotel2);

  const [showResult, setShowResult] = useState([]);
  // const [showResult1, setShowResult1] = useState([]);

  const [scroll1, setSroll1] = useState(true);
  const [scroll2, setSroll2] = useState(true);
  const [scroll3, setSroll3] = useState(true);
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const date = getCurrentDate();

  const fetchProducts = async () => {
    try {
      console.log("input:", inputhotel);
      const response = await axios.get(
        "http://localhost:4000/api/auth/allRoomHotel"
      );
      const hotel = response.data.data;
      console.log("hotell", hotel);

      let hotelsTickets = hotel; // Khởi tạo biến  hotelsTickets

      if (inputhotel) {
        // Nếu có inputhotel, thì lọc dữ liệu
        hotelsTickets = hotel.filter((ticker) => ticker.city == inputhotel);
      }

      console.log("Filtered Tickets:", hotelsTickets);

      setShowResult(hotelsTickets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handle1 = () => {
    setSroll1(!scroll1);
  };
  const handle2 = () => {
    setSroll2(!scroll2);
  };
  const handle3 = () => {
    setSroll3(!scroll3);
  };
  return (
    <div className="">
      <div className="px-[9%] space-x-5 h-[60px] flex items-center bg-gradient-to-r from-blue-800 to-blue-400">
        <div className=" font-medium h-[30px] flex bg-white  space-x-1 items-center py-1 px-2 w-[400px] rounded-md">
          <img
            className="h-[17px]"
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7f57d24fd3db681418a3694bd71cb93b.svg"
            alt=""
          />
          <p>{inputhotel !== null ? inputhotel : "Đà Nẵng, Việt Nam"}</p>
        </div>

        <div className=" font-medium flex bg-white  space-x-2 items-center py-1 px-2 w-[300px] rounded-md">
          <p>
            <FaRegCalendarDays />
          </p>
          <p>
            {dateHotel1 !== null ? dateHotel1 : date} -{" "}
            {dateHotel2 !== null ? dateHotel2 : date}
          </p>
        </div>

        <div className=" font-medium flex bg-white  space-x-2 items-center py-1 px-2 w-[300px] rounded-md">
          <p>
            <FaPeopleGroup />
          </p>
          <p>
            {Adults} người lớn, {children} trẻ em, {baby} phòng
          </p>
        </div>
      </div>
      <div className="flex px-[7%] mt-10 space-x-10">
        <nav className=" w-[25%] ">
          <div className="p-2 rounded-md bg-slate-100 w-[280px] shadow-xl">
            <p className="text-[14px] font-medium">
              Tiết kiệm tới 2 triệu VNĐ cho vé bay, khách sạn, vé ...
            </p>
            <p className="text-[12px] font-medium">
              Không phút. Giao dịch sử dụng Home PayLater
            </p>
            <p className="mt-[30px] rounded-md flex justify-between text-[12px] font-medium  border-dashed border  border-black p-2">
              <span className="text-slate-700">PAYLATER1TR</span>
              <span className="text-[14px] text-blue-500 ">sao chép</span>
            </p>
          </div>

          <div className="px-2 mt-5 ">
            <p className="flex justify-between">
              <span className="font-medium">Bộ lọc:</span>
              <span className="text-blue-500">Đặt lại</span>
            </p>
            <button
              onClick={handle1}
              className="flex justify-between w-full border-b-2 border-black py-4"
            >
              <span className="font-bold">Tiện nghi</span>
              {!scroll1 ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </button>
            {scroll1 && (
              <div className="text-[16px]   mt-4">
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="1">
                    <input className="w-[18px]" type="checkbox" id="1" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">wifi</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="2">
                    <input className="w-[18px]" type="checkbox" id="2" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Hồ bơi</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="3">
                    <input className="w-[18px]" type="checkbox" id="3" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Chỗ đậu xe</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="4">
                    <input className="w-[18px]" type="checkbox" id="4" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Nhà hàng</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="5">
                    <input className="w-[18px]" type="checkbox" id="5" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Lễ tân 24h</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="6">
                    <input className="w-[18px]" type="checkbox" id="6" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Thang máy</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="7">
                    <input className="w-[18px]" type="checkbox" id="7" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Lối dành cho xe lăn</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="8">
                    <input className="w-[18px]" type="checkbox" id="8" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Trung tâm thể dụng</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="9">
                    <input className="w-[18px]" type="checkbox" id="9" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Phòng họp</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="10">
                    <input className="w-[18px]" type="checkbox" id="10" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">đưa đón sân bay</span>
                    </p>
                  </label>
                </button>
              </div>
            )}

            <button
              onClick={handle2}
              className="flex justify-between w-full border-b-2 border-black py-4"
            >
              <span className="font-bold">Loại hình lưu trú</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {scroll2 && (
              <div className="text-[16px] mt-4">
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="11">
                    <input className="w-[18px]" type="checkbox" id="11" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Khu cắm trại</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="12">
                    <input className="w-[18px]" type="checkbox" id="12" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Nhà nghỉ</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="13">
                    <input className="w-[18px]" type="checkbox" id="13" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Nhà khách gia đình</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="14">
                    <input className="w-[18px]" type="checkbox" id="14" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Khách sạn</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="15">
                    <input className="w-[18px]" type="checkbox" id="15" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Nhà riêng</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="16">
                    <input className="w-[18px]" type="checkbox" id="16" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Khu nghỉ dưỡng</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="17">
                    <input className="w-[18px]" type="checkbox" id="17" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Nhà nghỉ Homestay</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="18">
                    <input className="w-[18px]" type="checkbox" id="18" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Biệt thự</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="19">
                    <input className="w-[18px]" type="checkbox" id="19" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">căn hộ</span>
                    </p>
                  </label>
                </button>

                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="20">
                    <input className="w-[18px]" type="checkbox" id="20" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">khác</span>
                    </p>
                  </label>
                </button>
              </div>
            )}

            <button
              onClick={handle3}
              className="flex justify-between w-full border-b-2 border-black py-4"
            >
              <span>Thời gian bay</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {scroll3 && (
              <div className="text-[16px] mt-4">
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="21">
                    <input className="w-[18px]" type="radio" id="21" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">All</span>
                    </p>
                  </label>
                </button>
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="22">
                    <input className="w-[18px]" type="radio" id="22" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">
                        Thanh toán tại khách sạn
                      </span>
                    </p>
                  </label>
                </button>
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="23">
                    <input className="w-[18px]" type="radio" id="23" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Extra Benefit</span>
                    </p>
                  </label>
                </button>
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="24">
                    <input className="w-[18px]" type="radio" id="24" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Chọn nhìu nhất</span>
                    </p>
                  </label>
                </button>
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="25">
                    <input className="w-[18px]" type="radio" id="25" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Phù hợp gia đình</span>
                    </p>
                  </label>
                </button>
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="26">
                    <input className="w-[18px]" type="radio" id="26" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">
                        khách sạn xuất hóa đơn
                      </span>
                    </p>
                  </label>
                </button>
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="27">
                    <input className="w-[18px]" type="radio" id="27" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">biệt thự và căn hộ</span>
                    </p>
                  </label>
                </button>
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="28">
                    <input className="w-[18px]" type="radio" id="28" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">Nhà nghỉ</span>
                    </p>
                  </label>
                </button>
                <button className="w-full  ">
                  <label className="flex space-x-3" htmlFor="29">
                    <input className="w-[18px]" type="radio" id="29" name="a" />
                    <p className="flex justify-between w-full ">
                      <span className="font-medium">ưu đãi đặt biệt</span>
                    </p>
                  </label>
                </button>
              </div>
            )}
          </div>
        </nav>
        <div></div>

        <div>
          {showResult.map((item) => (
            <div
              key={item._id}
              className="flex mt-5  shadow-[0_0px_6px_1px_rgba(0,0,0,0.1)] hover:shadow-blue-500/50"
            >
              <div className="flex font-bold w-[552px] ">
                <img
                  className="rounded-l-md "
                  src="https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20062926-f9ffc0feda83a89940985a4b27776055.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-40,w-300"
                  alt=""
                />
                <div className="p-4 ">
                  <p>{item.nameHotel}</p>
                  <div className="flex items-center mt-[10px]">
                    <img
                      className="h-[12px]  "
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7f57d24fd3db681418a3694bd71cb93b.svg"
                      alt=""
                    />
                    <p className="text-[14px] font-medium">
                      {item.AddressHotel}
                    </p>
                  </div>
                  <p className="text-[12px] font-medium bg-slate-300 w-[140px] rounded-full">
                    {item.noteHotel}
                  </p>
                </div>
              </div>
              <div className="font-medium shadow-custom-rgba px-10 w-[222px] rounded-r-md pt-5 ">
                <div className="pb-7">
                  <p className="text-[12px] text-green-500">{item.Save}</p>
                  <p className="text-[14px] line-through">{item.priceSave}</p>
                  <p className="text-[20px] font-bold text-orange-500">
                    {item.price}
                  </p>
                </div>
                <Link
                  to={`/hotel/${item._id}`}
                  className="bg-orange-500 py-1 px-2 ml-8 rounded-md text-white"
                >
                  Chọn phòng
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelSearch;
