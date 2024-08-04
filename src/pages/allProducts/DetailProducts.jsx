import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { useShoppingContext } from "../../context/ShoppingContext";
import { GRAY } from "../../helpers/colors";

const DashedBox = styled.div`
  border: 1px dashed #d9d9d9;
  text-align: center;
  padding: 15px;
  border-radius: 7px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  border-radius: 7px;
  boxshadow: "0px 5px 23px 0px rgba(0,0,0,.1)";
`;

const DetailProducts = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  const {
    addToCart,
    getProductQuantity,
    decreaseItemFromCart,
    deleteFromCart,
  } = useShoppingContext();

  useEffect(() => {
    axios
      .get(`https://contact-manager-server-1.onrender.com/products/${params.id}`)
      .then((res) => {
        setIsLoading(false);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          {isLoading ? (
            <CircleLoader />
          ) : (
            <>
              <div className='col-md-5'>
                <ProductImage src='https://frontendi.com/wp-content/uploads/2023/12/Ant-Design-Course-300x156.webp' />
              </div>
              <div className='col-md-3'>
                <div
                  className='card'
                  style={{
                    borderRadius: "7px",
                    border: "none",
                    boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
                  }}
                >
                  <div className='card-body'>
                    <div className='row gy-3'>
                      <div className='col-md-12'>
                        <DashedBox>{product.title}</DashedBox>
                      </div>
                      <div className='col-md-12'>
                        <DashedBox>{product.price}</DashedBox>
                      </div>
                      <div className='col-md-12'>
                        {getProductQuantity(params.id) == 0 ? (
                          <button
                            className='btn btn-success w-100'
                            onClick={() => addToCart(params.id)}
                          >
                            افزودن به سبد خرید
                          </button>
                        ) : (
                          <div className='row gy-2'>
                            <div className='col-5'>
                              <button
                                className='btn btn-primary w-100'
                                onClick={() => addToCart(params.id)}
                              >
                                +
                              </button>
                            </div>
                            <div className='col-2'>
                              <span
                                className='mx-2'
                                style={{ fontSize: "15px", color: GRAY }}
                              >
                                {getProductQuantity(params.id)}
                              </span>
                            </div>
                            <div className='col-5'>
                              <button
                                className='btn btn-primary w-100'
                                onClick={() => decreaseItemFromCart(params.id)}
                              >
                                -
                              </button>
                            </div>
                            <div className='col-12'>
                              <button
                                className='btn btn-outline-danger w-100'
                                onClick={() => deleteFromCart(params.id)}
                              >
                                حذف
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className='col-md-12'>
                        <button className='btn btn-outline-dark w-100'>
                          افزودن به علاقه مندی ها
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailProducts;
