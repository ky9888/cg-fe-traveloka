import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FlightID() {
  const { id } = useParams();
  console.log(id);
  const [showid, setShowid] = useState(true);

  const fectProducts = async () => {
    await axios
      .get(`https://cg-be-traveloka.onrender.com/api/auth/flightID/${id}`)
      .then((reponse) => {
        console.log("res", reponse.data);
        setShowid(reponse.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fectProducts();
  }, []);
  return (
    <div>
    <h1 className="ml-[25%] mt-[50px] font-bold text-[25px]">Chuyến đi của bạn:</h1>
      <div
        key={showid._id}
        className="w-[50%] ml-[25%] mt-[10px] bg-slate-100 shadow-sm p-5 mb-4 rounded-lg hover:outline hover:outline-1 hover:outline-blue-500 "
      >
        <div className=" flex items-center text-[15px] font-medium text-slate-900 ">
          <div>
            <img
              className="h-[10px] w-[30px] mr-1 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAALCAMAAAAdtr4vAAAAeFBMVEX///+swsy9ztbaowDw3LbZngDL2N5ym63i6e2Jqrne5urP2+HD09qzxtCiusWov8rt8fPfr0B+orLy4cGYs8DnxH737drWlwD58eLt1KXlvm7iuFvoyIngs0vkvGfhtVRMhJtBfZXcphn1581ejqPdqSjerDX79uwLM1gmAAAA+ElEQVQokbXR3W7DIAwF4ANpwGAMhJD+LG2Tbdn2/m84ctfdbZV2ZMmS5U+yAGiZcDjimZzO3eHP6Dxcxn7qX47zJQSg6n1ofu54C2LAeX6cXvtbd++WvgNWaA4kQq8UEwUtlJSKTbicOSabfRINpVpRk2/zcJ+X/h0oucBtofjiBZZ4TTl5zSjGeSmtBQvrRNWNMg6n23LrhmXu78ibahDIdocWJWXVYDR+5R1yg8UBlGPCeFk+5nEaPq/jFwog5CqcMUhKasghM7VjjXA70HNChKu5in/qF/4lItUbzfsjG1OMluBE/wbqoLTS7A01WYm0iTo8LnwDxioNoCs8r1sAAAAASUVORK5CYII="
              alt=""
            />
          </div>
          <div className="mr-[60px]">{showid.airLine}</div>
          <div>{showid.fromFlight}</div>
          <div className="mx-1">-</div>
          <div className="mr-[40px]">{showid.toFlight}</div>
          <div className="text-red-600">{showid.price}</div>
          <div className="text-[12px]">/Khách</div>
        </div>
        <div className="my-[30px] font-medium text-green-500">
          <p className="text-[14px] w-[300px]">Gói mã 800k-Chỉ dánh cho app</p>
        </div>

        <div className="flex text-[15px] font-medium text-slate-900 justify-between">
          <div className="flex space-x-4 ">
            <p>Chi tiết</p>
            <p>Giá vé & Quyền lợi</p>
            <p>Hoàn vé</p>
            <p>Đổi lịch</p>
            <p>Khuyến mãi</p>
          </div>
          <button className="bg-blue-500 px-10 py-1 rounded-md">Chọn</button>
        </div>
      </div>
    </div>
  );
}

export default FlightID;
