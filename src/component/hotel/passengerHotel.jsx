import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  toggleDropdown1,
  selectDropdownState1,
} from "../../redux/mainSlice/dropdown";
import {
  adultsIncrease,
  adultsDecreased,
  selectAdults,
} from "../../redux/mainSlice/toggleAdult";
import {
  childrenIncrease,
  childrenDecreased,
  selectChildren,
} from "../../redux/mainSlice/toggleChildren";
import {
  babyIncrease,
  babyDecreased,
  selectBaby,
} from "../../redux/mainSlice/toggleBaby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUsers,
  faXmark,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FaChevronUp } from "react-icons/fa6";

function PassengerHotel() {
  const isOpen1 = useSelector(selectDropdownState1);
  const Adults = useSelector(selectAdults);
  const children = useSelector(selectChildren);
  const baby = useSelector(selectBaby);
  const dispatch = useDispatch();

  const handleAdultsIncrease = () => {
    dispatch(adultsIncrease());
  };
  const handleAdultsDecreased = () => {
    dispatch(adultsDecreased());
  };
  const handleChildrenIncreasse = () => {
    dispatch(childrenIncrease());
  };
  const handleChildrenDecreased = () => {
    dispatch(childrenDecreased());
  };
  const handleBabyIncreasse = () => {
    dispatch(babyIncrease());
  };
  const handleBabyDecreased = () => {
    dispatch(babyDecreased());
  };

  const handleDropdownToggle1 = () => {
    dispatch(toggleDropdown1());
  };

  useEffect(() => {
    const handleClickOutside1 = (event) => {
      const dropdownButton1 = document.getElementById("button1");
      const dropdownContent1 = document.getElementById("content1");

      if (
        !dropdownButton1.contains(event.target) &&
        !dropdownContent1.contains(event.target)
      ) {
        dispatch(toggleDropdown1());
        // Đóng dropdown khi click bên ngoài
      }
    };

    window.addEventListener("click", handleClickOutside1);

    return () => {
      window.removeEventListener("click", handleClickOutside1);
    };
  }, []);

  return (
    <div className="relative mt-3 max-lg:space-y-2 space-y-[15px] max-2xl:w-[260px] max-xl:w-[220px] max-xl:space-y-[39px] ">
      <p className="text-white text-[14px] font-medium ">Khách và Phòng:</p>
      <div className="w-[350px] max-xl:w-[220px]  max-2xl:w-[250px] max-xl:h-[40px] max-sm:rounded-lg  h-[50px] outline outline-[3px] outline-slate-500  bg-white flex ">
        <button
          id="button1"
          onClick={handleDropdownToggle1}
          className="  flex items-center p-[6px] space-x-2 px-2 w-full  "
        >
          <span className="space-x-8 flex items-center   ">
            <FontAwesomeIcon className="mr-3" icon={faUsers} /> {Adults} người
            lớn, {children} Trẻ em, {baby} phòng
            {!isOpen1 ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FaChevronUp />
            )}
          </span>
        </button>
      </div>

      <div className=" absolute w-full z-10 top-[75px] text-slate-800">
        {isOpen1 && (
          <div
            id="content1"
            className="  bg-white space-y-3 shadow-md py-3 rounded-md z-20   "
          >
            <div className="flex justify-between items-center px-[10px]  ">
              <span className="text-[20px] text-slate-600 ">
                {" "}
                Số hành khách
              </span>
              <a href="">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[20px] text-slate-600"
                />
              </a>
            </div>
            <div className="px-1 space-y-2 pb-2">
              <div className="flex items-center space-x-10 max-2xl:space-x-5 w-[500px] ">
                <div className="flex items-center space-x-2 mr-2">
                  <img
                    className="h-[28px]"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e0beae0651a82ad0d2b7afcfb49b5746.svg"
                    alt=""
                  />
                  <div>
                    <p>Người lớn</p>
                  </div>
                </div>

                <button onClick={handleAdultsDecreased}>
                  <FontAwesomeIcon icon={faMinus} className="text-blue-500" />
                </button>
                <span>{Adults}</span>
                <button onClick={handleAdultsIncrease}>
                  <FontAwesomeIcon icon={faPlus} className="text-blue-500" />
                </button>
              </div>

              <div className="flex items-center space-x-10 w-[500px] max-2xl:space-x-5 ">
                <div className="flex items-center space-x-2 mr-1">
                  <img
                    className="h-[28px]"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fa28f412dbf8a058b071fee1f4ba9685.svg"
                    alt=""
                  />
                  <div>
                    <p>Trẻ em</p>
                  </div>
                </div>

                <button onClick={handleChildrenDecreased}>
                  <FontAwesomeIcon icon={faMinus} className="text-blue-500 ml-7" />
                </button>
                <span>{children}</span>
                <button onClick={handleChildrenIncreasse}>
                  <FontAwesomeIcon icon={faPlus} className="text-blue-500" />
                </button>
              </div>

              <div className="flex items-center space-x-10 w-[500px] max-2xl:space-x-5 ">
                <div className="flex items-center space-x-2 mr-4">
                  <img
                    className="h-[28px]"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d2429e318374aece2500e1fd5e432856.svg"
                    alt=""
                  />
                  <div>
                    <p>Phòng</p>
                  </div>
                </div>

                <button onClick={handleBabyDecreased}>
                  <FontAwesomeIcon icon={faMinus} className="text-blue-500 ml-4" />
                </button>
                <span>{baby}</span>
                <button onClick={handleBabyIncreasse}>
                  <FontAwesomeIcon icon={faPlus} className="text-blue-500" />
                </button>
              </div>
            </div>
            <div className="bg-blue-500   text-white  flex justify-center mx-3 h-[40px] mb-2 rounded-md">
              <button
                className="w-full"
                type="button"
                onClick={handleDropdownToggle1}
              >
                Xong
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PassengerHotel;
