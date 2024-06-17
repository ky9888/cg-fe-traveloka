import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { GiVillage } from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import DropHotel from "../../component/hotel/dropHotel";
import DateHotel1 from "../../component/hotel/dateHotel1";
import DateHotel2 from "../../component/hotel/dateHotel2";
import PassengerHotel from "../../component/hotel/passengerHotel";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
function Hotel() {
  return (
    <div className="mx-[7%] pb-[143px]">
      <ul className="flex items-center space-x-5 font-bold text-white text-[15px] mt-4">
        <li className="flex items-center space-x-1 py-2 px-5 bg-blue-500/80 rounded-full">
          <button>
            <FontAwesomeIcon icon={faHotel} className="h-[15px]" />
          </button>
          <p>Khách sạn</p>
        </li>
        <li className="flex hover:bg-blue-500 items-center space-x-1 py-2 px-5 rounded-full bg-black/50">
          <p className="text-[20px]">
            <RiHotelFill />
          </p>
          <p>Biệt thự</p>
        </li>
        <li className="flex hover:bg-blue-500  items-center space-x-1 py-2 px-5 rounded-full bg-black/50">
          <p className="text-[20px]">
            <GiVillage />
          </p>
          <p>Căn hộ</p>
        </li>
      </ul>
      <div className="flex">
        {<DropHotel />}
        {<DateHotel1 />}
        {<DateHotel2 />}
        {<PassengerHotel />}
        
        <Link  to="/hotelSearch" className=" bg-orange-500 h-[50px] w-[50px] flex items-center justify-center rounded-r-2xl mt-12  outline outline-[3px] outline-slate-500   ">
            <CiSearch className="text-[25px] text-white" />
          </Link>
       
      </div>
    </div>
  );
}

export default Hotel;
