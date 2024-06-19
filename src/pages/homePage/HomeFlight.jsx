import { useEffect } from "react";
import HeaderHomeDefault from "../../layouts/homeDefault/hederHomeDefault";
import MainHomeDefault from "../../layouts/homeDefault/mainHomeDefault";
import FooterHomeDefault from "../../layouts/homeDefault/footerHomeDefault";
// import Flight from "../../layouts/privateHome/flightHome";


function HomeFlight() {
  useEffect(() => {
    const handleHeader = () => {
      const header = document.getElementById("header");
      const login = document.getElementById("login");
      const icon = document.getElementById("icon");
      const a = document.getElementById("a");
      const img = document.getElementById("img");
      if (window.scrollY > 0) {
        header.style.transition = "background-color 0.4s ease-in-out";
        header.style.backgroundColor = "white";
        header.classList.add("text-slate-600");
        login.style.borderColor = "blue";
        icon.style.color = "blue";
        a.style.backgroundColor = "black";
        img.src =
          "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg";
        // Đóng dropdown khi click bên ngoài
      } else {
        header.style.backgroundColor = "";
        header.classList.remove("text-slate-600");
        login.style.borderColor = "";
        icon.style.color = "";
        a.style.backgroundColor = "";

        img.src =
          "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg";
      }
    };
    window.addEventListener("scroll", handleHeader);
    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

  //

  //bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2023/09/27/1695776209619-17a750c3f514f7a8cccde2d0976c902a.png?tr=q-75')] h-screen   bg-center bg-no-repeat filter brightness-110 contrast-125
  return (
    <div className=" max-sm-[300px]:bg-red-100  " >
      <div className="relative max-w-full max-h-screen ">
        <div className="absolute z-[-1] h-[100vh] ">
          <img
            className=""
            src="https://ik.imagekit.io/tvlk/image/imageResource/2023/09/27/1695776209619-17a750c3f514f7a8cccde2d0976c902a.png?tr=q-75"
            alt=""
          />
        </div>
         
        {<HeaderHomeDefault />}          ?
        {<MainHomeDefault />}
        {<FooterHomeDefault />}
      </div>
    </div>
  );
}

export default HomeFlight;
