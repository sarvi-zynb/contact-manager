import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AllProducts from "./pages/allProducts/AllProducts";
import DetailProducts from "./pages/allProducts/DetailProducts";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/registeration/Login";
import { ShoppingProvider } from "./context/ShoppingContext";
import { LoginProvider, useLoginContext } from "./context/LoginContext";
import PrivateRoute from "./components/private-routes/PrivateRoute";

const App = () => {
  const { isLogin } = useLoginContext();
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={isLogin ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path='/register'
          element={isLogin ? <Navigate to={"/"} /> : <Login />}
        />
        <Route element={<PrivateRoute />}>
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:id' element={<DetailProducts />} />
      </Routes>
    </div>
  );
};

export default App;
