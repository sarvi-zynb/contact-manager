import { PURPLE, GRAY, WHITE } from "../../helpers/colors";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { useShoppingContext } from "../../context/ShoppingContext";
import { useLoginContext } from "../../context/LoginContext";

const Navbar = () => {
  const { cartQty } = useShoppingContext();
  const { isLogin, handleLogout } = useLoginContext();

  return (
    <>
      <nav
        className='navbar navbar-expand-lg navbar-light p-3'
        style={{
          backgroundColor: WHITE,
          boxShadow: "0px 2px 8px #ccc",
        }}
      >
        <div className='container'>
          <img src={logo} style={{ width: "75px", marginLeft: "1rem" }} />
          <div
            className='collapse navbar-collapse justify-content-between'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to={"/"} className='nav-link active'>
                  خانه
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={"/products"} className='nav-link active'>
                  دوره ها
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={"/"} className='nav-link active'>
                  درباره ما
                </Link>
              </li>
            </ul>
            <div className='input-group w-25' style={{ direction: "ltr" }}>
              <button
                style={{ backgroundColor: GRAY }}
                className='btn'
                type='button'
                aria-expanded='false'
              >
                <i
                  className='fa fa-search'
                  aria-hidden='true'
                  style={{ color: "#fff" }}
                ></i>
              </button>
              <input
                type='text'
                className='form-control'
                placeholder='جست و جو ...'
              />
            </div>
            <div className='d-flex align-items-center'>
              <Link to={"/cart"}>
                <i
                  className='fas fa-shopping-cart ms-5 position-relative'
                  style={{ fontSize: "1.4rem", color: GRAY }}
                >
                  {cartQty != 0 && isLogin ? (
                    <span
                      className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info'
                      style={{ fontSize: "0.5rem" }}
                    >
                      {cartQty}
                    </span>
                  ) : null}
                </i>
              </Link>
              {isLogin ? (
                <Link
                  type='submit'
                  style={{
                    borderColor: PURPLE,
                    borderWidth: "2px",
                    color: PURPLE,
                  }}
                  onClick={handleLogout}
                >
                  خروج
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  className='btn btn-outline'
                  type='submit'
                  style={{
                    borderColor: PURPLE,
                    borderWidth: "2px",
                    color: PURPLE,
                  }}
                >
                  ورود / عضویت
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
