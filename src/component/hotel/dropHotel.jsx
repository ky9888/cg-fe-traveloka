import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { MdFlightTakeoff } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setInputHotel } from "../../redux/userSlice/valueHotelInput";

function DropHotel() {
  const [searchResult, setSearchResult] = useState([]);
  // const [searchValue,setSearcValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [select, setSelect] = useState(null);
  const [fist, setFist] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

  const fectProducts = async () => {
    await axios
      .get("https://cg-be-traveloka.onrender.com/api/auth/allHotel")
      .then((reponse) => {
        console.log("res", reponse.data.data);
        setSearchResult(reponse.data.data);
        if (reponse.data.data.length > 0) {
          const firstItem = reponse.data.data[0]; // Lấy phần tử đầu tiên
          const first = `${firstItem.city}, ${firstItem.Address}`;
          setFist(first); // Cập nhật state searchResult với phần tử đầu tiên
        }
      })

      .catch((error) => {
        console.log("thất bại", error);
      });
  };

  useEffect(() => {
    fectProducts();
  }, []);

  const handleSelect = (value) => {
    setSelect(value);
  };
  const chang = (e) => {
    setSelect(e.target.value);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  useEffect(() => {
    // Dispatch giá trị khi URL thay đổi
    const value = select !== null ? select : fist;
    dispatch(setInputHotel(value));
  }, [location, select, fist, dispatch]);

  return (
    <div className="  relative  text-black space-y-3 mt-3 max-xl:w-[220px] ">
      <span className="text-[14px] text-white font-medium  ">
        Thành phố,Địa điểm hoặc tên khách sạn:{" "}
      </span>
      <HeadlessTippy
        zIndex={10}
        placement="bottom"
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <div>
              <div className=" bg-white  w-[350px] max-2xl:left-[-130px]  max-xl:left-[-110px]  absolute top-[-8px]  left-[-150px]  overflow-y-auto max-h-[400px]    ">
                <p className="text-[14px] p-2 text-slate-600 font-bold">
                  Điểm đếm phổ biến
                </p>
                {searchResult.map((item) => (
                  <div key={item.id} className=" border-t-[1px] border-black ">
                    <button
                      onClick={() => handleSelect(`${item.city}, ${item.Address}`)}
                      className="button w-full text-start pl-4 flex items-center justify-between  hover:bg-slate-300 p-2  "
                    >
                      <div>
                        <p className="text-[14px] font-bold">{item.city}</p>
                        <p className="text-[12px] font-medium text-slate-500">
                          {item.Address}
                        </p>
                      </div>
                      <div>
                        <p className="text-[14px] border border-blue-500 px-4 py-1 text-center text-blue-500 font-medium rounded-full ">{item.noteCity}</p>
                        <p className="text-[12px] font-medium text-slate-500">{item.noteHotel}</p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <form className=" flex bg-white max-xl:w-full max-xl:h-[40px]  max-sm:rounded-lg  max-2xl:w-[260px]  h-[50px]  w-[300px] outline outline-[3px] rounded-l-lg outline-slate-500 ">
          <label
            htmlFor="button3"
            className="flex items-center w-[30px] justify-start text-blue-500"
          >
            <MdFlightTakeoff className="text-[20px] text-slate-500 " />
          </label>
          <input
            id="button3"
            spellCheck={false}
            value={select !== null ? select : fist}
            onChange={chang}
            onFocus={() => setShowResult(true)}
            className="w-full h-full  outline-0  text-[14px] font-medium max-sm:rounded-lg   "
            type="text"
            placeholder="Chọn Thành Phố,khách sạn và điểm đến"
          />
        </form>
      </HeadlessTippy>
    </div>
  );
}

export default DropHotel;
