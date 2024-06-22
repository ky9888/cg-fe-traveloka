import { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setdateFlight2 } from "../../redux/userSlice/valueInput";

import "react-datepicker/dist/react-datepicker.css";

function DropDownDate1() {
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
    dispatch(setdateFlight2(formattedDate))
    console.log(formattedDate);
   
  };
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  return (
    <div className="max-xl:w-[170px] max-sm:w-[150px] max-sm:text-[13px] max-lg:w-[220px]"  >
      <p className="text-[14px] mb-2">Khứ hồi</p>
      <div className="relative">
      <FaRegCalendarDays className="absolute top-3 max-lg:top-2 left-3 z-[1] text-blue-500 text-[25px]" />
      <DatePicker
       className="h-[50px] max-lg:h-[40px] max-xl:w-full text-slate-800  outline-0 pl-[50px] rounded-r-2xl border-[3px] border-slate-500 border-l-2 "
        selected={dateCurrent }
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} 
      />
      </div>
    </div>
  );
}

export default DropDownDate1;
