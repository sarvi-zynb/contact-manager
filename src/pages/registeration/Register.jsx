import { BLACK, PURPLE } from "../../helpers/colors";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <>
      <div className='container mt-4'>
        <div className='row justify-content-center'>
          <div className='col-md-5'>
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
                      <h5 style={{color: BLACK}}>ورود</h5>
                    </Link>
                  </div>
                  <div className='col text-start'>
                    <Link to={"/register"}>
                      <h5 style={{color: BLACK}}>عضویت</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-3 justify-content-center'>
          <div className='col-md-5'>
            <div
              className='card p-4'
              style={{
                border: "none",
                borderRadius: "15px",
                boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
              }}
            >
              <div className='card-body'>
                <div className='row gy-4'>
                  <div className='col-12'>
                    <input
                      type='email'
                      className='form-control'
                      id='exampleFormControlInput1'
                      placeholder='آدرس ایمیل *'
                    />
                  </div>
                  <div className='sol-12'>
                    <p style={{ lineHeight: "30px" }}>
                      یک رمز به نشانی ایمیل شما فرستاده خواهد شد.
                    </p>
                    <p style={{ lineHeight: "30px" }}>
                      داده های شخصی شما برای پشتیبانی از تجربه شما در این وب
                      سایت، برای مدیریت دسترسی به حساب کاربری شما و برای اهداف
                      دیگری که در{" "}
                      <a
                        href='#'
                        style={{ textDecoration: "none", color: "#ffc107" }}
                      >
                        سیاست حفظ حریم خصوصی
                      </a>{" "}
                      ما شرح داده می شود مورد استفاده قرار می گیرد.
                    </p>
                  </div>

                  <div className='col-12'>
                    <a
                      className='btn btn-primary d-block'
                      style={{ backgroundColor: PURPLE, borderColor: PURPLE }}
                    >
                      عضویت
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
