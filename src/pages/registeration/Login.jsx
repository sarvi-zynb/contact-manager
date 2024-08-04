import { Link, useNavigate, useLocation } from "react-router-dom";
import { PURPLE, BLACK } from "../../helpers/colors";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginContext } from "../../context/LoginContext";

const Login = () => {
  const locate = useLocation();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [remember, setRemember] = useState(false);
  const { handleLogin } = useLoginContext();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className='container mt-4'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div
              className='card py-2 px-5'
              style={{
                border: "none",
                borderRadius: "15px",
                boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
              }}
            >
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col'>
                    <Link to={"/login"}>
                      <h5
                        style={
                          locate.pathname == "/login"
                            ? { color: PURPLE }
                            : { color: BLACK }
                        }
                      >
                        ورود
                      </h5>
                    </Link>
                  </div>
                  <div className='col text-start'>
                    <Link to={"/register"}>
                      <h5
                        style={
                          locate.pathname == "/register"
                            ? { color: PURPLE }
                            : { color: BLACK }
                        }
                      >
                        عضویت
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-3 justify-content-center'>
          <div className='col-md-4'>
            <div
              className='card p-4'
              style={{
                border: "none",
                borderRadius: "15px",
                boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
              }}
            >
              <div className='card-body'>
                {locate.pathname == "/login" ? (
                  // <form onSubmit={handleLogin}>
                  <div className='row gy-4'>
                    <div className='col-12'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='نام کاربری *'
                        value={user.username}
                        onChange={handleChange}
                        name='username'
                        required
                      />
                    </div>
                    <div className='col-12'>
                      <input
                        type='password'
                        className='form-control'
                        id='inputPassword'
                        placeholder='گذرواژه *'
                        value={user.password}
                        onChange={handleChange}
                        name='password'
                        required
                      />
                    </div>
                    <div className='col-12'>
                      <div className='row'>
                        <div className='col-1'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value={remember}
                            id='flexCheckDefault'
                            onChange={() => setRemember(!remember)}
                          />
                        </div>
                        <div className='col-4 p-0'>
                          <label
                            className='form-check-label'
                            for='flexCheckDefault'
                          >
                            مرا به خاطر بسپار
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='col-12'>
                      <button
                        type='submit'
                        className='btn btn-primary d-block w-100'
                        style={{
                          backgroundColor: PURPLE,
                          borderColor: PURPLE,
                        }}
                        onClick={() => handleLogin(user)}
                      >
                        ورود
                      </button>
                    </div>
                  </div>
                ) : (
                  // </form>
                  <form>
                    <div className='row gy-4'>
                      <div className='col-12'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='نام کاربری*'
                          name='username'
                          value={user.username}
                          onChange={() => handleChange()}
                          required
                        />
                      </div>
                      {/* <div className='col-12'>
                        <input
                          type='email'
                          className='form-control'
                          name='user_email'
                          placeholder='آدرس ایمیل *'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div> */}
                      <div className='col-12'>
                        <input
                          type='password'
                          className='form-control'
                          name='password'
                          placeholder='گذرواژه *'
                          value={user.password}
                          onChange={() => handleChange()}
                          required
                        />
                      </div>

                      <div className='col-12'>
                        <button
                          type='submit'
                          className='btn btn-primary d-block w-100'
                          style={{
                            backgroundColor: PURPLE,
                            borderColor: PURPLE,
                          }}
                        >
                          عضویت
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
