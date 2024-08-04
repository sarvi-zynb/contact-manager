import { createContext, useContext, useEffect, useState } from "react";

export const ShoppingContext = createContext({
  cartItems: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  decreaseItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => {},
  cartQty: 0,
});

export const ShoppingProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    let localCart = localStorage.getItem("cartItems");
    if (localCart != null) {
      return JSON.parse(localCart);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const getProductQuantity = (id) => {
    const quantity = cartItems.find((item) => item.id == id)?.qty || 0;
    return quantity;
  };

  const addToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity == 0) {
      setCartItems([...cartItems, { id: id, qty: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id == id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    }
  };

  const decreaseItemFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id == id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id != id));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    cartItems.map((item) => {
      const data = getProductData(item.id);
      totalAmount += data.price * item.qty;
    });

    return totalAmount;
  };

  const [productData, setProductData] = useState();

  const getProductData = async (id) => {
    // await axios.get(`http://localhost:8000/products/${id}`).then((res) => {
    //   setProductData(res.data);
    //   // console.log(productData);
    // });
  };

  const values = {
    cartItems,
    getProductQuantity,
    addToCart,
    decreaseItemFromCart,
    deleteFromCart,
    getTotalAmount,
    cartQty,
  };
  return (
    <ShoppingContext.Provider value={values}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};
