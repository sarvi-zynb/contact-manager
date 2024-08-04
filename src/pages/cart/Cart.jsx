import { useEffect, useState } from "react";
import { GRAY, PURPLE } from "./../../helpers/colors";
import { useShoppingContext } from "../../context/ShoppingContext";
import CartItem from "./CartItem";

const Cart = () => {
  const [emptyCart, setEmptyCart] = useState(false);
  const { cartItems } = useShoppingContext();


  return (
    <>
      {emptyCart ? (
        <p className='text-center mt-5'>سبد خرید خالی است</p>
      ) : (
        <div className='container mt-5'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div
                className='card py-3'
                style={{
                  border: "none",
                  borderRadius: "7px",
                  boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
                }}
              >
                <div className='card-body'>
                  <div className='row text-center' style={{ color: GRAY }}>
                    <div className='col-md-7'>
                      <p className='m-0'>محصول</p>
                    </div>
                    <div className='col-md-3'>
                      <p className='m-0'>قیمت</p>
                    </div>
                    <div className='col-md-2'>
                      <p className='m-0'>تعداد</p>
                    </div>
                  </div>
                  <hr />
                  {cartItems.map((item, index) => {
                    return <CartItem item={item} key={index} />;
                  })}
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div
                className='card'
                style={{
                  border: "none",
                  borderRadius: "7px",
                  boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
                }}
              >
                <div className='card-body'>
                  <div className='row px-3 mt-3'>
                    <div className='col-6 m-0'>
                      <p className='m-0'>قیمت</p>
                    </div>
                    <div className='col-6 text-start'>
                      <p className='m-0' style={{ color: GRAY }}>
                        {} تومان
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className='row px-3 mt-4'>
                    <div className='col-6'>
                      <p className='m-0'>مجموع</p>
                    </div>
                    <div className='col-6 text-start'>
                      <p style={{ color: GRAY }}>{} تومان</p>
                    </div>
                  </div>
                  <div className='col-12 mt-4'>
                    <a
                      className='btn d-block'
                      style={{ backgroundColor: PURPLE, color: "white" }}
                    >
                      اقدام به پرداخت
                    </a>
                  </div>
                  <div className='col-12 mt-3'>
                    <div
                      className='input-group mb-3'
                      style={{ direction: "ltr" }}
                    >
                      <button
                        className='btn'
                        type='button'
                        id='button-addon1'
                        style={{ backgroundColor: PURPLE, color: "white" }}
                      >
                        اعمال
                      </button>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='کد تخفیف'
                        aria-label='Example text with button addon'
                        aria-describedby='button-addon1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
