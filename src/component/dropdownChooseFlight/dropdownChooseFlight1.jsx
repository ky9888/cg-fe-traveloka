import HeadlessTippy from '@tippyjs/react/headless';
import "tippy.js/dist/tippy.css";
import { FaPlaneDeparture } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setInputValue1 } from "../../redux/userSlice/valueInput";


function DropDownChooseFlight1() {
  
  const [searchResult,setSearchResult] = useState([]);
  //const [searchValue,setSearcValue] = useState("");
  const [showResult,setShowResult] =useState(false);
  const [select,setSelect]=useState(null);
  const [fist,setFist]=useState([])
  const dispatch = useDispatch();
  const location = useLocation();



  const fectProducts = async () => {
    await axios
      .get("https://cg-be-traveloka.onrender.com/api/auth/allFlight")
      .then((reponse) => {
        console.log(reponse.data);
        setSearchResult(reponse.data.data);
        if(reponse.data.data. length > 0) {
          const firstItem = reponse.data.data[1]; // Lấy phần tử đầu tiên
          const first=firstItem.name
          setFist(first); // Cập nhật state searchResult với phần tử đầu tiên
        }

      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    fectProducts()   
  },[])

  

  const handleSelect=(value)=>{
    setSelect(value); 

  }
  const chang=(e)=>{
    setSelect(e.target.value)
    setFist(e.target.value)
  }
  
  
  const handleHideResult=()=>{
    setShowResult(false) 
  }
  useEffect(() => {
    // Dispatch giá trị khi URL thay đổi
    const value = select !== null ? select : fist;
    dispatch(setInputValue1(value));
  }, [location, select, fist, dispatch]);

  return (
    <div className=" relative max-xl:w-[250px] max-sm:w-[180px] max-lg:w-[250px] space-y-2 max-sm:text-[13px] text-black" >
      
        <span className='text-[14px] text-slate-300'>Đến</span>
        <HeadlessTippy 
        zIndex={10}
          placement="bottom"
          interactive
          visible={showResult && searchResult.length > 0}
          render={(attrs) => (
            <div className="relative " tabIndex="-1" {...attrs}>
              <div className=" bg-white w-[500px] max-sm:w-[300px] max-sm:left-[-205px] absolute top-[-8px]  left-[-375px] rounded-md overflow-y-auto max-h-[320px]   ">
                <p className='text-[14px] p-2 text-slate-600'>Thành phố hoặc sân bay phổ biến</p>
              {searchResult.map((item)=>(
                
                <div key={item.id} >
                  <button onClick={()=>handleSelect(item.name)}  className='hover:bg-slate-300 w-full text-start pl-4  p-2  '>
                    <p className='text-[15px]' >{item.name}</p>
                    <p className='text-[12px] font-medium text-slate-500'>{item.note}</p>
                  </button>

                </div>

              )

              )}
              </div>
            </div> 
          )}
          onClickOutside={handleHideResult}
        >
          <form className="flex bg-white max-lg:h-[40px]  h-[50px]  rounded-r-2xl border-[3px] border-slate-500 border-l-2 text-slate-800  ">
            <label
              htmlFor="button3"
              className="flex items-center w-[65px] justify-center text-blue-500"
            >
              <FaPlaneDeparture className="text-[25px] " />
            </label>
            <input
              id="button3"
              spellCheck={false}
              value={select !== null ? select : fist}
              onChange={chang}
              onFocus={()=>setShowResult(true)}
              className="w-full h-full outline-0  rounded-r-2xl"
              type="text"
              placeholder="Chọn Thành Phố"
            />
          </form>
        </HeadlessTippy>
      
    </div>
  );
}

export default DropDownChooseFlight1;
