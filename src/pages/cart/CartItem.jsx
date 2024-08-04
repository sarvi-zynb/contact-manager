import { useEffect, useState } from "react";
import { GRAY } from "./../../helpers/colors";
import axios from "axios";
import { useShoppingContext } from "../../context/ShoppingContext";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(0);
  const { cartItems } = useShoppingContext();

  const { addToCart, decreaseItemFromCart, deleteFromCart } =
    useShoppingContext();

  const getProduct = async () => {
    await axios
      .get(`https://contact-manager-server-1.onrender.com/products/${item.id}`)
      .then((res) => {
        setProduct(res.data);
        setPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);


  return (
    <div className='row text-center mt-4 align-items-center'>
      <div className='col-md-1'>
        <button className='btn' onClick={() => deleteFromCart(item.id)}>
          <i className='fas fa-times'></i>
        </button>
      </div>
      <div className='col-md-6 p-0'>
        <div className='row align-items-center'>
          <div className='col-4'>
            <Link to={`/products/${item.id}`}>
              <img
                style={{ width: "80px", height: "80px" }}
                src={product.imgUrl}
              />
            </Link>
          </div>
          <div className='col-8'>
            <p style={{ fontSize: "13px" }}>{product.title}</p>
          </div>
        </div>
      </div>
      <div className='col-md-3 p-0'>
        <p className='m-0' style={{ fontSize: "13px", color: GRAY }}>
          {product.price} تومان
        </p>
      </div>
      <div className='col-md-2 p-0'>
        <button className='btn btn-primary' onClick={() => addToCart(item.id)}>
          +
        </button>
        <span className='mx-2' style={{ fontSize: "13px", color: GRAY }}>
          {item.qty}
        </span>
        <button
          className='btn btn-primary'
          onClick={() => decreaseItemFromCart(item.id)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
