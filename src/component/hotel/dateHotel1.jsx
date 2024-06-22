import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setDateHotel1 } from "../../redux/userSlice/valueHotelInput";

import "react-datepicker/dist/react-datepicker.css";

function DateHotel1() {
  const [selectData1, setSelectData1] = useState(null);
  const [dateCurrent, setDateCurrent] = useState(null);
  const dispatch=useDispatch()

  useEffect(() => {
    const currentDate = new Date();
    setDateCurrent(currentDate);
    setSelectData1(currentDate);
  }, []);

  const handleChange = (date) => {
    setDateCurrent(date);
    setSelectData1(date);
    console.log(selectData1);
    const formattedDate = formatDate(date);
    dispatch(setDateHotel1(formattedDate))
    console.log(formattedDate);
   
  };
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="mt-3  space-y-[15px] max-2xl:w-[260px]  max-xl:w-[220px] max-sm:space-y-1   max-xl:space-y-[39px] ">
      <p className="text-[14px] text-white font-medium ">Ngày nhận phòng:</p>
      <div className="relative outline ouline-[3px] outline-slate-500  max-sm:rounded-lg ">
        <FaRegCalendarDays className="absolute top-3 left-3 z-[1] text-blue-500 text-[25px]" />
        <DatePicker
          className="h-[50px] text-slate-800 w-[300px] max-xl:h-[40px] max-sm:rounded-lg  max-xl:w-[220px]  max-2xl:w-[260px] outline-0 pl-[50px] max-sm:text-[15px] "
          selected={dateCurrent}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()} 
        />
      </div>
    </div>
  );
}

export default DateHotel1;
