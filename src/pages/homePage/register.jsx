import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect,useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


function Register() {
  const [showLogin, setShowLogin] = useState(false);
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(true);
  const loginRef = useRef(null);
  const logRef = useRef(null);
  const bref = useRef(null);

  const handleChange2 = () => {
    const register = loginRef.current;
    setShowLogin(true);
    register.style.position = "fixed";
    register.style.top = "0";
    register.style.left = "0";
    register.style.width = "100vw";
    register.style.height = "100vh";
    register.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    register.style.zIndex = "2";
  };

  const handleClickOutside = (event) => {
    const register = loginRef.current;
    if (
      logRef.current &&
      !logRef.current.contains(event.target) &&
      bref.current &&
      !bref.current.contains(event.target)
    ) {
      setShowLogin(false);
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
    if (showLogin) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showLogin]);


  

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Không được để trống")
        .min(4, "Phải có ít nhất 4 kí tự"),
      email: Yup.string()
        .required("Không được để trống")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng "),
      password: Yup.string()
        .required("Không được để trống")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password phải có 8 ký tự,có ít nhất 1 chữ cái và 1 chứ số"
        ),
      confirmPassword: Yup.string()
        .required("không được để trống")
        .oneOf([Yup.ref("password"), null], "Password không đúng"),
    }),
    onSubmit:  (values) => {
      axios({
        method: 'POST',
        url: 'https://cg-be-traveloka.onrender.com/api/auth/singup',
        data: values
      })
        .then(function (res) {
           console.log(res)
           alert('Đăng ký thành công');          
           const register = loginRef.current;
           setShowLogin(false);
           register.style.position = "";
           register.style.top = "";
           register.style.left = "";
           register.style.width = "";
           register.style.height = "";
           register.style.backgroundColor = "";
           register.style.zIndex = "";

        })
        .catch(function (res) {
           console.log(res)
           alert("đăng ký thất bại")
      });
    },
  });

  return (
    <div>
      <div ref={loginRef}></div>
      <button
       ref={bref}
        onClick={handleChange2}
        
        className="flex items-center space-x-2  rounded-md py-[7px] text-[14px]  bg-blue-500 px-4 text-white hover:bg-slate-500/70  "
        href=""
      >
       
        <p>Đăng ký</p>
      </button>
      {showLogin && (
        <div ref={logRef} className="absolute z-50 shadow-lg rounded-lg w-[400px] bg-white left-[40%] top-[100px] px-4 py-6 text-black box-border ">
          <form className="space-y-2" onSubmit={formik.handleSubmit}>
            <h1 className="text-center text-[23px]">Đăng ký</h1>
            <div>
              <label htmlFor="name" className="text-slate-700">
                Tên Đăng nhập:
              </label>
              <br />
              <input
                id="name"
                name="userName"
                onChange={formik.handleChange}
                value={formik.values.userName}
                className="w-full outline-0 border-[1px] border-slate-400 hover:border-slate-600 p-2 text-[15px] font-normal rounded-md "
                type="text"
                placeholder="Tên Đăng nhập"
              />
              {formik.errors.name && (
                <span className="text-red-500 text-[14px] font-normal ">
                  {formik.errors.name}
                </span>
              )}
            </div>
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
              <label
                id="password"
                className="text-slate-700"
                htmlFor="password"
              >
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
            <div>
              <label className="text-slate-700" htmlFor="confirm">
                Confirm Password:
              </label>
              <br />
              <div className="flex border-[1px] border-slate-400 hover:border-slate-600 p-2 text-[15px] font-normal rounded-md">
                <input
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPasswordpassword}
                  className="w-full outline-0 "
                  type={!visible1 ? "text" : "password"}
                  placeholder="confirm Password"
                />
                <button onClick={() => setVisible1(!visible1)}>
                  {visible1 ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </button>
              </div>
              {formik.errors.confirmPassword && (
                <span className="text-red-500 text-[14px] font-normal ">
                  {formik.errors.confirmPassword}
                </span>
              )}
            </div>
            <div className="flex justify-center pt-2     ">
              <button
                className="text-blue-500 py-1 px-2 border border-blue-500 w-[110px] rounded-md hover:bg-blue-100 "
                type="submit"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
