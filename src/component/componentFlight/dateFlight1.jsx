import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setdateFlight1 } from "../../redux/userSlice/valueInput";


import "react-datepicker/dist/react-datepicker.css";

function DateFlight1() {
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
    dispatch(setdateFlight1(formattedDate))
    console.log(formattedDate);
   
  };
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="relative text-slate-900 w-[250px] ">
      <p className="text-[14px] text-slate-600">Ngày đi</p>
      <div className="flex items-center font-medium   space-x-2  ">
      <CiCalendarDate className="text-[20px]" />
        
        <DatePicker
        
          className="button h-[40px] outline-0     "
          selected={dateCurrent}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy "
          minDate={new Date()} 
        />
      </div>
    </div>
  );
}

export default DateFlight1;
