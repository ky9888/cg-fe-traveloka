import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// import { CiSearch } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useSelector } from "react-redux";

import { selectAdults } from "../../redux/mainSlice/toggleAdult";
import { selectBaby } from "../../redux/mainSlice/toggleBaby";
import { selectChildren } from "../../redux/mainSlice/toggleChildren";

function Hotelid() {  
  const { id } = useParams();
  const [showid, setShowid] = useState(true);
  const inputhotel = useSelector((state) => state.inputt.inputHotell);
  // const inputhotel1 = useSelector((state) => state.inputt.inputHotel1);
  const Adults = useSelector(selectAdults);
  const children = useSelector(selectChildren);
  const baby = useSelector(selectBaby);
  const dateHotel1 = useSelector((state) => state.inputt.dateHotel1);
  const dateHotel2 = useSelector((state) => state.inputt.dateHotel2);

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const date = getCurrentDate();

  console.log(id);
  const fectProducts = async () => {
    await axios
      .get(`https://cg-be-traveloka.onrender.com/api/auth/getRoomHotel/${id}`)
      .then((reponse) => {
        console.log("res", reponse.data);
        setShowid(reponse.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fectProducts();
  }, []);

  return (
    <div>
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
      <p className="ml-[25%] font-bold text-[25px] mt-10">Khách sạn của bạn:</p>

      <div key={showid._id} className=" ml-[25%] mt-5 flex justify-between  shadow-custom-rgba w-[50%] ">
        <div>
            <img
              className="rounded-l-md w-[400px]"
              src="https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20062926-f9ffc0feda83a89940985a4b27776055.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-40,w-300"
              alt=""
            />
            <div className="p-4 ">
              <p className="font-bold text-[20px]">{showid.nameHotel}</p>
              <div className="flex items-center mt-[10px]">
                <img
                  className="h-[12px]  "
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7f57d24fd3db681418a3694bd71cb93b.svg"
                  alt=""
                />
                <p className="text-[14px] font-medium">{showid.AddressHotel}</p>
              </div>
              <p className="text-[12px] font-medium bg-slate-300 w-[140px] rounded-full">
                {showid.noteHotel}
              </p>
            </div>
        </div>

        <div className="font-medium px-10 w-[250px] pl-15 mt-[8%] h-[215px] rounded-r-md pt-5 ">
          <div className="pb-7">
            <p className="text-[12px] text-green-500">{showid.Save}</p>
            <p className="text-[14px] line-through">{showid.priceSave}</p>
            <p className="text-[20px] font-bold text-orange-500">
              {showid.price}
            </p>
          </div>
          <button
            
            className="bg-orange-500 py-1 px-2 ml-8 rounded-md text-white"
          >
            Chọn phòng
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hotelid;
