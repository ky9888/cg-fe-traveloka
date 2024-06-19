import DropDown from "../../component/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUser,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function Header() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div      
        className="px-[6%] font-bold  pt-[5px] sticky top-0 z-20 text-slate-500 w-screen "
      >
        <div className="flex justify-between h-[10%]  items-center ">
         <Link to='/'>
            <img
              id="img"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
            />
         </Link>

          <div className="flex space-x-10 items-center  ">
            <div className="flex items-center space-x-2 hover:bg-black/35 p-2 rounded-md ">
              <img
                className=" "
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg"
              />

              <div className="flex text-[14px] font-bold  space-x-1   ">
                <p>VI</p>
                <div
                  id="a"
                  className="bg-slate-600 w-[2px] h-[14px] mt-[5px]  "
                ></div>
                <p>VND</p>
              </div>
            </div>
            <ul className="flex space-x-6 text-[14px]  ">
              <li className="hover:bg-black/35 p-2 rounded-md ">Khuyến mãi</li>
              <li className="hover:bg-black/35 p-2 rounded-md ">Hỗ trợ</li>
              <Link to='/cooperate' className="hover:bg-black/35 p-2 rounded-md ">
                Hợp tác với chúng tôi
              </Link>
              <li className="hover:bg-black/35 p-2 rounded-md ">
                Đặt chổ của tôi
              </li>
            </ul>
            {!user?.userName? (
              <div className="flex space-x-1 ">
              <div>
                <a
                  id="login"
                  className="flex items-center space-x-2 border border-blue-600 rounded-md p-[7px] text-[14px]  hover:bg-blue-500/20 "
                  href=""
                >
                  <FontAwesomeIcon
                    id="icon"
                    icon={faUser}
                    className="h-[13px] "
                  />
                  <p>Đăng nhập</p>
                </a>
              </div>
              <div>
                <a
                  className="flex items-center space-x-3 border border-sky-500 rounded-md bg-sky-500 p-[7px] text-[14px] px-[15px] hover:bg-sky-600 text-white  "
                  href=""
                >
                  Đăng ký
                </a>
              </div>
            </div>
            ) : (
              <button className="  flex  space-x-1 hover:bg-black/40 items-center p-2 rounded-md box-border   ">
                <div className=" h-[24px] bg-blue-400 w-5 flex items-center justify-center rounded-full  ">
                  <FontAwesomeIcon icon={faUser} className="h-[11px]  " />
                </div>
                <p className="text-[14px]">{user.userName}</p>
                <div
                  id="b"
                  className="bg-white w-[2px] h-[14px] mt-[5px]  "
                ></div>
                <img
                  className="h-4"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c00ab1f427ddf2519a3e080d9d9c1436.svg"
                  alt=""
                />
                
                <FontAwesomeIcon icon={faChevronDown} className="h-[12px]  " />
              </button>
            )}
            
          </div>
        </div>

        <div className="px-6 flex pt-[5px] text-[14px]  h-[60px] items-center    ">
          <ul className="flex space-x-6 items-center   ">
            <Link to='/hotel' className="hover:bg-black/25 p-2 rounded-md ">Khách sạn</Link>
            <li className="hover:bg-black/25 p-2 rounded-md">
              <Link to="/flight">Vé máy bay</Link>
            </li>
            <li className="hover:bg-black/25 p-2 rounded-md">Vé xe khách</li>
            <li className="hover:bg-black/25 p-2 rounded-md">
              Đưa đón sân bay
            </li>
            <li className="hover:bg-black/25 p-2 rounded-md">Cho thuê xe</li>
            <li className="hover:bg-black/25 p-2 rounded-md">
              Hoạt động và vui chơi
            </li>
          </ul>
          <div className=" relative  flex items-center ">{<DropDown />}</div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Header;
