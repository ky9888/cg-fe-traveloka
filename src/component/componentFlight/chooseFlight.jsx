import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { MdFlightTakeoff } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setInputValue } from "../../redux/userSlice/valueInput";

function ChooseFlight() {
  const [searchResult, setSearchResult] = useState([]);
  // const [searchValue,setSearcValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [select, setSelect] = useState(null);
  const [fist, setFist] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  

  const fectProducts = async () => {
    await axios
      .get("http://localhost:4000/api/auth/allFlight")
      .then((reponse) => {
        console.log("res", reponse.data.data);
        setSearchResult(reponse.data.data);
        if (reponse.data.data.length > 0) {
          const firstItem = reponse.data.data[0]; // Lấy phần tử đầu tiên
          const first = firstItem.name;
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
    dispatch(setInputValue(value));
  }, [location, select, fist, dispatch]);

 
  return (
    <div className="  relative  text-black ">
      <span className="text-[14px] text-slate-700 ">Từ</span>
      <HeadlessTippy
        zIndex={1}
        placement="bottom"
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <div>
              <div className=" bg-white w-[580px] absolute top-[-8px]  left-[-125px] border border-slate-400  rounded-md overflow-y-auto max-h-[400px]    ">
                <p className="text-[14px] p-2 text-slate-600 font-bold">
                  Thành phố hoặc sân bay phổ biến
                </p>
                {searchResult.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => handleSelect(item.name)}
                      className="button w-full text-start pl-4  hover:bg-slate-300 p-2  "
                    >
                      <p className="text-[14px] font-bold">{item.name}</p>
                      <p className="text-[12px] font-medium text-slate-500">
                        {item.note}
                      </p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <form className=" button flex bg-white  h-[40px]  w-[250px] border-b-[1px] border-slate-400 hover:border-slate-800   ">
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
            className="w-full h-full outline-0  text-[14px] font-medium    "
            type="text"
            placeholder="Chọn Thành Phố"
          />
        </form>
      </HeadlessTippy>
    </div>
  );
}

export default ChooseFlight;
