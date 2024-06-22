import { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setDateHotel2 } from "../../redux/userSlice/valueHotelInput";

import "react-datepicker/dist/react-datepicker.css";

function DateHotel2() {
  const [selectData1, setSelectData1] = useState(null);
  const [dateCurrent,setDateCurrent]=useState(null);
  const dispatch=useDispatch()

  
  useEffect(() => {
    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 2);
    setDateCurrent(nextDay);
   
    setSelectData1(nextDay);
  }, []);

  const handleChange = (date) => {
    setDateCurrent(date);
    setSelectData1(date);
    console.log(selectData1);
    const formattedDate = formatDate(date);
    dispatch(setDateHotel2(formattedDate))
    console.log(formattedDate);
  };
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  return (
    <div className="mt-3 space-y-[15px]  max-lg:space-y-2 max-2xl:w-[260px]  max-xl:w-[220px] max-xl:space-y-[39px]">
      <p className="text-[14px] text-white font-medium ">Ngày trả phòng:</p>
      <div className="relative outline ouline-[3px] outline-slate-500 max-sm:rounded-lg">
        <FaRegCalendarDays className="absolute top-3 left-3 z-[1] text-blue-500 text-[25px]" />
        <DatePicker
          className="h-[50px] text-slate-800 max-xl:h-[40px] max-sm:rounded-lg  max-xl:w-[220px]  max-2xl:w-[260px] w-[300px] outline-0 pl-[50px]  "
          selected={dateCurrent}
          onChange={handleChange}
          minDate={new Date()} 
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
}

export default DateHotel2;
