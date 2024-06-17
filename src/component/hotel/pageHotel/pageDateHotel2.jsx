import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarDays } from "react-icons/fa6";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { setDateHotel2 } from "../../../redux/userSlice/valueHotelInput";

function PageDateHote2() {
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
    <div className="mt-3 space-y-[15px] rounded-md w-[445px]">
     
     <div className="relative border border-slate-500 rounded-md space-x-2 pl-5 flex items-center w-[440px]">
        <p className="text-[20px] ">< FaRegCalendarDays/></p>
        <DatePicker
          className="h-[40px] Z-20 relative text-slate-800 rounded-md w-[390px]  outline-0   "
          selected={dateCurrent}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
      </div>
    </div>
  );
}

export default PageDateHote2;
