import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../App";

export default function LoginPage() {
  const { isLoggedIn, setIsLoggedIn } = useContext(StoreContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    remember: false,
    emailValid: false,
    passwordValid: false,
    errorMessages: {
      email: "",
      password: "",
    },
  });

  const loginSuccessHandler = () => {
    if (formValues.emailValid && formValues.passwordValid) {
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  const emailValidation = () => {
    if (formValues.email == "") {
      setFormValues((prev) => ({
        ...prev,
        emailValid: false,
      }));
      setFormValues((prev) => ({
        ...prev,
        errorMessages: { ...prev.errorMessages, email: "Email is required!" },
      }));
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      setFormValues((prev) => ({
        ...prev,
        emailValid: false,
      }));
      setFormValues((prev) => ({
        ...prev,
        errorMessages: {
          ...prev.errorMessages,
          email: "Invalid email address!",
        },
      }));
    } else {
      setFormValues((prev) => ({ ...prev, emailValid: true }));
    }
  };

  const passwordValidation = () => {
    if (!formValues.password) {
      setFormValues((prev) => ({
        ...prev,
        passwordValid: false,
      }));
      setFormValues((prev) => ({
        ...prev,
        errorMessages: {
          ...prev.errorMessages,
          password: "Password is required!",
        },
      }));
    } else if (formValues.password.length < 6) {
      setFormValues((prev) => ({
        ...prev,
        errorMessages: {
          ...prev.errorMessages,
          password: "Password must be at least 6 characters long!",
        },
      }));
      setFormValues((prev) => ({
        ...prev,
        passwordValid: false,
      }));
    } else {
      setFormValues((prev) => ({ ...prev, passwordValid: true }));
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    loginSuccessHandler();
  }, [formValues]);

  const loginHandler = (e) => {
    e.preventDefault();
    emailValidation();
    passwordValidation();
    //server submission logic
  };

  return (
    <div className="w-full bg-[#FFDBDB] lg:grid lg:grid-cols-2 h-screen">
      <div className="h-0 lg:h-full "></div>
      <div className="lg:h-full h-full flex justify-center bg-white items-center">
        <form onSubmit={loginHandler} className="flex flex-col gap-3 lg:gap-7">
          <div>
            <span>Welcome back</span>
            <h1 className="text-[30px] font-bold">Login to your account</h1>
          </div>

          <div className="lg:mt-2 relative flex flex-col gap-3 login-form">
            <label className="text-[#4A5568]" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, email: e.target.value }))
              }
              className={`w-[350px] h-[50px] outline-none px-5 border rounded-[5px] border-[#E8E8E8] ${
                !formValues.emailValid && "error"
              }`}
              type="text"
              id="email"
              name="email"
              value={formValues.email}
            />
            {formValues.emailValid === false && (
              <p className="absolute -bottom-5 text-sm text-red-500">
                {formValues.errorMessages.email}
              </p>
            )}
          </div>
          <div className="relative lg:mt-2 flex flex-col justify-end gap-3 login-form">
            <label className="text-[#4A5568]" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, password: e.target.value }))
              }
              className={`w-[350px] h-[50px] outline-none px-5 border rounded-[5px] border-[#E8E8E8] ${
                !formValues.passwordValid && "error"
              }`}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formValues.password}
            />
            <button
              onClick={() => setShowPassword((prev) => !prev)}
              type="button"
              className="absolute self-end bottom-[15px] text-sm opacity-40 right-4"
            >
              {showPassword ? "Gizle" : "Göster"}
            </button>
            {formValues.passwordValid === false && (
              <p className="absolute -bottom-5 text-sm text-red-500">
                {formValues.errorMessages.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between login-form">
            <div className="flex items-center gap-[11px]">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                onChange={() =>
                  setFormValues((prev) => ({
                    ...prev,
                    remember: !prev.remember,
                  }))
                }
                value={formValues.remember}
              />
              <label className="text-sm custom-checkbox" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <button
              onClick={() => console.log(formValues)}
              type="button"
              className="text-sm text-active-blue"
            >
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            className="bg-active-blue w-full py-[15px] leading-[1.3] font-bold text-white rounded-[5px]"
          >
            Login Now
          </button>
          <p className="text-[#616161] text-center">
            Don't have an account?{" "}
            <a className="!text-active-blue" href="#">
              Join free today
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
