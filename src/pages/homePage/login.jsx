import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import { getApiUser } from "../../userApi/getUserApi";
 import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice/userSlice";


function Login() {
  const [showRegister, setShowRegister] = useState(false);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
   const dispatch = useDispatch()
   

  const registerRef = useRef(null);
  const regisRef = useRef(null);
  const aref = useRef(null);

  const handleChange2 = () => {
    const register = registerRef.current;
    setShowRegister(true);
    register.style.position = "fixed";
    register.style.top = "0";
    register.style.left = "0";
    register.style.width = "100vw";
    register.style.height = "100vh";
    register.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    register.style.zIndex = "2";
  };

  const handleClickOutside = (event) => {
    const register = registerRef.current;
    if (
      regisRef.current &&
      !regisRef.current.contains(event.target) &&
      aref.current &&
      !aref.current.contains(event.target)
    ) {
      setShowRegister(false);
      register.style.position = "";
      register.style.top = "";
      register.style.left = "";
      register.style.width = "";
      register.style.height = "";
      register.style.backgroundColor = "";
      register.style.zIndex = "";
    }
  };

  useEffect(() => {
    if (showRegister) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showRegister]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Không được để trống")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng "),
      password: Yup.string()
        .required("Không được để trống")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password phải có ít nhất 8 ký tự,có ít nhất 1 chữ cái và 1 chứ số"
        ),
    }),
    onSubmit: (values) => {
      axios({
        method: "POST",
        url: "https://cg-be-traveloka.onrender.com/api/auth/singin",
        data: values,
      })
        .then(function (res) {
          navigate("/");
            localStorage.setItem("accessToken", res.data.accessToken);
            
          console.log(res.data.accessToken);
          if (res.data.accessToken) {
            const decoded = jwtDecode(res.data.accessToken);
            console.log("decode", decoded);
            console.log("decodesa", decoded._id);

            if (decoded._id) {
              handleGetID(decoded._id);
            }
          }

          window.alert("Đăng nhập thành công!");
          setShowRegister(false);
          const register = registerRef.current;
          register.style.position = "";
          register.style.top = "";
          register.style.left = "";
          register.style.width = "";
          register.style.height = "";
          register.style.backgroundColor = "";
          register.style.zIndex = "";
        }
      )
        .catch(function (res) {
          console.log(res);
          alert("sai tài khoản hoặc mật khẩu");
        });
    },
  });
  
  const handleGetID=async(id)=>{
    const res = await getApiUser(id)
    dispatch(updateUser(res.data))
    console.log("user",res.data);
  }
  // const logout=async(id)=>{
  //   const res = await getApiUser(id)
  //   dispatch(updateUser(res.data))
  //   console.log("user",res.data);
  // }

  return (
    <div>
      <div ref={registerRef}></div>
      <div>
        <button
          ref={aref}
          id="login"
          onClick={handleChange2}
          className="flex  items-center space-x-2 border rounded-md  p-[7px] text-[14px] px-[15px] hover:bg-black/35  "
          href=""
        >
          <FontAwesomeIcon
            id="icon"
            icon={faUser}
            className="h-[13px] text-white"
          />
          <p>Đăng nhập</p>
        </button>

        {showRegister && (
          <div
            ref={regisRef}
            className="absolute z-50 shadow-lg rounded-lg w-[400px] bg-white left-[40%] top-[200px] px-4 py-6 text-black box-border "
          >
            <form
              className="space-y-2"
              onSubmit={formik.handleSubmit}
              action=""
            >
              <h1 className="text-center text-[23px]">Đăng nhập</h1>

              <div>
                <label className="text-slate-700" htmlFor="email">
                  Email:
                </label>
                <br />
                <input
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="w-full outline-0 border-[1px] border-slate-400 hover:border-slate-600 p-2 text-[15px] font-normal rounded-md"
                  type="email"
                  placeholder="Email"
                />
                {formik.errors.email && (
                  <span className="text-red-500 text-[14px] font-normal ">
                    {formik.errors.email}
                  </span>
                )}
              </div>
              <div>
                <label className="text-slate-700" htmlFor="password">
                  Password:
                </label>
                <br />
                <div className="flex border-[1px] border-slate-400 hover:border-slate-600 p-2 text-[15px] font-normal rounded-md">
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="w-full outline-0 "
                    type={!visible ? "text" : "password"}
                    placeholder="Password"
                  />
                  <button onClick={() => setVisible(!visible)}>
                    {visible ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </button>
                </div>
                {formik.errors.password && (
                  <span className="text-red-500 text-[14px] font-normal ">
                    {formik.errors.password}
                  </span>
                )}
              </div>

              <div className="flex justify-center pt-2     ">
                <button
                  className="text-blue-500 py-1 px-2 border border-blue-500 w-[110px] rounded-md hover:bg-blue-100 "
                  type="submit"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
