import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectAdults } from "../../redux/mainSlice/toggleAdult";
import { selectBaby } from "../../redux/mainSlice/toggleBaby";
import { selectChildren } from "../../redux/mainSlice/toggleChildren";
import { Link } from "react-router-dom";

function FlightSearch() {
  const [scroll1, setSroll1] = useState(true);
  const [scroll2, setSroll2] = useState(true);
  const [scroll3, setSroll3] = useState(true);
  const Adults = useSelector(selectAdults);
  const children = useSelector(selectChildren);
  const baby = useSelector(selectBaby);
  const inputValue = useSelector((state) => state.input.inputValue);
  const inputValue1 = useSelector((state) => state.input.inputValue1);
  const dateFlight1 = useSelector((state) => state.input.dateFlight1);
  const select = useSelector((state) => state.input.selectFlight);
  // const dateFlight2 = useSelector((state) => state.input.dateFlight2);
  const [showResult, setShowResult] = useState([]);
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const date=getCurrentDate()

  
  console.log(date);

  const fetchProducts = async () => {
    try {
     
      console.log("input", select);
      const response = await axios.get(
        "https://cg-be-traveloka.onrender.com/api/auth/getTicker"
      );
      const flight = response.data;
    
      let filteredTickets = flight; // Khởi tạo biến filteredTickets

      if (inputValue && inputValue1) {
        // Nếu có input, thì lọc dữ liệu
        filteredTickets = flight.filter(
          (ticker) => ticker.fromFlight === inputValue && ticker.toFlight === inputValue1
        );
      }

      console.log("Filtered Tickets:", filteredTickets);

      setShowResult(filteredTickets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handle1 = () => {
    setSroll1(!scroll1);
  };
  const handle2 = () => {
    setSroll2(!scroll2);
  };
  const handle3 = () => {
    setSroll3(!scroll3);
  };

  // console.log("loffff", inputValue);

  return (
    <div className="flex mx-[15%] mt-10  ">
      <nav className=" w-[30%]">
        <div className="p-2 rounded-md bg-slate-100 w-[280px] shadow-xl">
          <p className="text-[14px] font-medium">
            Tiết kiệm tới 2 triệu VNĐ cho vé bay, khách sạn, vé ...
          </p>
          <p className="text-[12px] font-medium">
            Không phút. Giao dịch sử dụng Home PayLater
          </p>
          <p className="mt-[30px] rounded-md flex justify-between text-[12px] font-medium  border-dashed border  border-black p-2">
            <span className="text-slate-700">PAYLATER1TR</span>
            <span className="text-[14px] text-blue-500 ">sao chép</span>
          </p>
        </div>

        <div className="px-2 h-[700px] overflow-auto mt-7 ">
          <p className="flex justify-between">
            <span className="font-medium">Bộ lọc:</span>
            <span className="text-blue-500">Đặt lại</span>
          </p>
          <button
            onClick={handle1}
            className="flex justify-between w-full border-b-2 border-black py-4"
          >
            <span>Số điểm dừng</span>
            {!scroll1 ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </button>
          {scroll1 && (
            <div className="text-[14px]  mt-4">
              <button className="w-full ">
                <label className="flex space-x-1" htmlFor="1">
                  <input type="checkbox" id="1" />
                  <p className="flex justify-between w-full ">
                    <span className="font-medium">Bay thẳng</span>
                    <span>1.640.600 VND</span>
                  </p>
                </label>
              </button>
              <button className="w-full h-">
                <label className="flex space-x-1" htmlFor="2">
                  <input type="checkbox" id="2" />
                  <p className="flex justify-between w-full ">
                    <span className="font-medium">1 điểm dừng</span>
                    <span>2.640.600 VND</span>
                  </p>
                </label>
              </button>
              <button className="w-full h-">
                <label className="flex space-x-1" htmlFor="3">
                  <input type="checkbox" id="3" />
                  <p className="flex justify-between w-full ">
                    <span className="font-medium">2+ transits</span>
                    <span>3.640.600 VND</span>
                  </p>
                </label>
              </button>
            </div>
          )}

          <button
            onClick={handle2}
            className="flex justify-between w-full border-b-2 border-black py-4"
          >
            <span>Hãng hàng không</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {scroll2 && (
            <div className="text-[15px] mt-4">
              <button className="w-full ">
                <label className="flex  space-x-2 items-center" htmlFor="1">
                  <input type="checkbox" id="1" />
                  <img
                    className="h-[10px]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAYCAMAAACY9M4aAAAAclBMVEXtHST////sAADtFR3tEBntGCD97+/sBhPsAAr3sbLydXjye33tIyn73d70k5X+9/f4ubr85eb4wMHvQUX1mJr5ycrzh4nwVln0j5HuKS/2qqvwUlX719j6z8/wW17zgoTxa23xYmXuMjf2oaLvSUzuOD1JMFUTAAACEElEQVQ4jY2UC4+bMBCEPYsfYEIAg0kgvBJy//8v3nBVqzsVqq4QxtiDPbufUeowjP7RS45n/R2699976naiFOEtFS2pMqmINg0gSer2Xmr0E7Uc6tw0UZzFPGZyqerxKR3s9Vbdpc/G6iUDCq+PhFLipR+wHaJGeS2RVrDbgOEFO8DKCLTuUFjjLRN8QBdhuMCzxiwF5hpClQN0emxxxPzBL1s8UE5TyQZagDdsCCWb8tiikoA5wGtQYUOMcWY2brA57DiOcUE8EaYZFk5dUezrMjZUckXIqWAEtCdC18JipbeMbssarwFYAq40V4yge7seJlW5hTPE3atZ6y2Gu7mEipl+uCYUsXVzEQ5zSjJW4KmVS8mHkzR95+LiXvSENDiVyMlOlWmq4fsYV2M0RIhMOSfOnAhJ1o86GTXErO9B3xW6zpK//aUyvwb/ETuiOy85S9tYtF6LujjpJXFyYZ7dMQ9f4Tx3uzCvBIH0Z8wCDTQt305Adq6kzw0dS3tjwrWHFzsKsqKWgvCeobSfFUxPdBuGlp+XqZQHN46BZCBIeYaSSngglceV5EcsInUtHh8rOiwfuPcnh2VfsOCBiqAjBVxsu8F6FAh3vO54L5iPSdpRCvNaYVhX7X2a95J3SdOusra83HM7qYm5AIn+Ql0rzcsoTYCc3puvp5ONmrd/aGUe+fzff7ffSp38uZ/FJyrHHKtV5n+ZAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  <p className=" text-[13px]  ">
                    <p> VietJet Air</p>
                    <p>1.640.600 VND</p>
                  </p>
                </label>
              </button>
              <button className="w-full ">
                <label className="flex  space-x-2 items-center" htmlFor="1">
                  <input type="checkbox" id="1" />
                  <img
                    className="h-[10px] "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAALCAMAAAAdtr4vAAAAeFBMVEX///+swsy9ztbaowDw3LbZngDL2N5ym63i6e2Jqrne5urP2+HD09qzxtCiusWov8rt8fPfr0B+orLy4cGYs8DnxH737drWlwD58eLt1KXlvm7iuFvoyIngs0vkvGfhtVRMhJtBfZXcphn1581ejqPdqSjerDX79uwLM1gmAAAA+ElEQVQokbXR3W7DIAwF4ANpwGAMhJD+LG2Tbdn2/m84ctfdbZV2ZMmS5U+yAGiZcDjimZzO3eHP6Dxcxn7qX47zJQSg6n1ofu54C2LAeX6cXvtbd++WvgNWaA4kQq8UEwUtlJSKTbicOSabfRINpVpRk2/zcJ+X/h0oucBtofjiBZZ4TTl5zSjGeSmtBQvrRNWNMg6n23LrhmXu78ibahDIdocWJWXVYDR+5R1yg8UBlGPCeFk+5nEaPq/jFwog5CqcMUhKasghM7VjjXA70HNChKu5in/qF/4lItUbzfsjG1OMluBE/wbqoLTS7A01WYm0iTo8LnwDxioNoCs8r1sAAAAASUVORK5CYII="
                    alt=""
                  />
                  <p className=" text-[13px]   ">
                    <p> Vietnam Airlines</p>
                    <p>2.640.600 VND</p>
                  </p>
                </label>
              </button>
              <button className="w-full ">
                <label className="flex  space-x-2 items-center" htmlFor="1">
                  <input type="checkbox" id="1" />
                  <img
                    className="h-[10px] "
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIABQAOAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIEBQYHA//EACoQAAICAQIFAwMFAAAAAAAAAAECAxEEACEFBhIxQRMUYRUycSJCUVLw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDBAL/xAAnEQACAQMBBwUBAAAAAAAAAAAAAQIDESESBBMxQXGRoRVR0eHwFP/aAAwDAQACEQMRAD8A7eXUMFLAMewvfQBLKLsjbvv20A0Sxm6kU1ud9AEyIE6y6hf7XtoAllDBSwDHsL3OgPLKyYcSAzZDhEFCz5J2AHzqSkoq7I2krsreX+N/WhI6YxihVQVZnsklmFVX8KD386xo1t7m2DOnU18ik5m4MuRzB7x5ukMmLsMZnZfTlZtiFPe62IrvrvpztC3XyiTjeV+hDfhUTNxGZs55m4ije8RsNijU/UlEDcKoZKa9iPwbreFbhwyTTlv3J+VyZjzB3wIcHD9XHnhIixlTrDyROnVQHYRkbg/drxCtNK03fPyXdLkOxuU5scB2OFkEZMk3t54riHXGieBVjoJvp/cR86rq3Kqdhj8rnDxUbIysIxQRY3qZk8VPAIKJKG9gaPn9Nk76b277+Sbuyz+sZLmLnb63xWAcHwszOghIKRohVS4fvdeQB42vWXp1as1Kb0o46u0xlLBtOQYeJ4vCkiz+HrjWSzM0ttZOwqv986fzU9nhpjPU+n2bbLKo8ONl57Gq15OwWgFoBaABAIoixoAKir9qgfgardyJJcB2oU//2Q=="
                    alt=""
                  />
                  <p className=" text-[13px]  ">
                    <p> Bamboo Airways </p>
                    <p>2.540.600 VND</p>
                  </p>
                </label>
              </button>
            </div>
          )}

          <button
            onClick={handle3}
            className="flex justify-between w-full border-b-2 border-black py-4"
          >
            <span>Thời gian bay</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {scroll3 && (
            <div className="text-[14px] mt-4">
              <p className="font-medium">Giờ cất cánh</p>
              <div className="grid grid-cols-2 gap-2 mt-3 mb-8">
                <div className="border border-slate-600 flex justify-center rounded-md  p-2">
                  <div>
                    <p>Đêm đến sáng</p>
                    <p className="text-blue-500">00:00 - 06:00</p>
                  </div>
                </div>
                <div className="border border-slate-600 flex justify-center rounded-md  p-2">
                  <div>
                    <p>Sáng đến trưa</p>
                    <p className="text-blue-500">06:00 - 12:00</p>
                  </div>
                </div>
                <div className="border border-slate-600 flex justify-center rounded-md  p-2">
                  <div>
                    <p>Trưa đến tối</p>
                    <p className="text-blue-500">12:00 - 18:00</p>
                  </div>
                </div>
                <div className="border border-slate-600 flex justify-center rounded-md  p-2">
                  <div>
                    <p>Tối đến đêm</p>
                    <p className="text-blue-500">18:00 - 24:00</p>
                  </div>
                </div>
              </div>

              <p className="font-medium">Giờ hạ cánh</p>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="border border-slate-600 flex justify-center rounded-md  p-2">
                  <div>
                    <p>Đêm đến sáng</p>
                    <p className="text-blue-500">00:00 - 06:00</p>
                  </div>
                </div>
                <div className="border border-slate-600 flex justify-center rounded-md  p-2">
                  <div>
                    <p>Sáng đến trưa</p>
                    <p className="text-blue-500">06:00 - 12:00</p>
                  </div>
                </div>
                <div className="border border-slate-600 flex justify-center rounded-md  p-2">
                  <div>
                    <p>Trưa đến tối</p>
                    <p className="text-blue-500">12:00 - 18:00</p>
                  </div>
                </div>
                <div className="border border-slate-600 flex justify-center rounded-md  p-2">
                  <div>
                    <p>Tối đến đêm</p>
                    <p className="text-blue-500">18:00 - 24:00</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <main className=" w-[70%] ml-2 ">
      <div className=" bg-slate-300 text-blue-700 w-[500px] p-2 rounded-md mb-3 shadow-md">
       <div className="flex text-[20px] space-x-3">
        <p>{inputValue  !== null? inputValue:"TH HCM, Việt Nam"}</p>
        <p>{'->'}</p>
        <p>{inputValue1 !== null? inputValue1:"Tokyo, Nhật Bản"}</p>
       </div>
       <div className="flex space-x-3">
        <p>{dateFlight1 !== null? dateFlight1:date}</p>
        <p>|</p>
        <p>{Adults} người lớn, {children} trẻ em, {baby} em bé</p>
        <p>|</p>
        <p>{select}</ p>
       </div>
       
      </div>
        {showResult.map((item) => (
         
            <div key={item._id} className="bg-slate-100 shadow-sm p-5 mb-4 rounded-lg hover:outline hover:outline-1 hover:outline-blue-500 ">
              <div className=" flex items-center text-[15px] font-medium text-slate-900 ">
                <div>
                  <img
                    className="h-[10px] w-[30px] mr-1 "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAALCAMAAAAdtr4vAAAAeFBMVEX///+swsy9ztbaowDw3LbZngDL2N5ym63i6e2Jqrne5urP2+HD09qzxtCiusWov8rt8fPfr0B+orLy4cGYs8DnxH737drWlwD58eLt1KXlvm7iuFvoyIngs0vkvGfhtVRMhJtBfZXcphn1581ejqPdqSjerDX79uwLM1gmAAAA+ElEQVQokbXR3W7DIAwF4ANpwGAMhJD+LG2Tbdn2/m84ctfdbZV2ZMmS5U+yAGiZcDjimZzO3eHP6Dxcxn7qX47zJQSg6n1ofu54C2LAeX6cXvtbd++WvgNWaA4kQq8UEwUtlJSKTbicOSabfRINpVpRk2/zcJ+X/h0oucBtofjiBZZ4TTl5zSjGeSmtBQvrRNWNMg6n23LrhmXu78ibahDIdocWJWXVYDR+5R1yg8UBlGPCeFk+5nEaPq/jFwog5CqcMUhKasghM7VjjXA70HNChKu5in/qF/4lItUbzfsjG1OMluBE/wbqoLTS7A01WYm0iTo8LnwDxioNoCs8r1sAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
                <div className="mr-[60px]">{item.airLine}</div>
                <div>{item.fromFlight}</div>
                <div className="mx-1">-</div>
                <div className="mr-[40px]">{item.toFlight}</div>
                <div className="text-red-600">{item.price}</div>
                <div className="text-[12px]">/Khách</div>
              </div>
              <div className="my-[30px] font-medium text-green-500"><p className="text-[14px] w-[300px]" >Gói mã 800k-Chỉ dánh cho app</p></div>

              <div className="flex text-[15px] font-medium text-slate-900 justify-between">
                <div className="flex space-x-4 ">
                  <p>Chi tiết</p>
                  <p>Giá vé & Quyền lợi</p>
                  <p>Hoàn vé</p>
                  <p>Đổi lịch</p>
                  <p>Khuyến mãi</p>
                </div>
                <Link to={`/flightTicker/${item._id}`}   className="bg-blue-500 px-10 py-1 rounded-md">Chọn</Link>
              </div>
            </div>
          
        ))}
      </main>
    </div>
  );
}

export default FlightSearch;
