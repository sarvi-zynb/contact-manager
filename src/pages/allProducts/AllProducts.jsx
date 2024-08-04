import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../components/products/Product";
import { Link } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://contact-manager-server-1.onrender.com/products")
      .then((res) => {
        setIsLoading(false);
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          {isLoading ? (
            <CircleLoader />
          ) : (
            <>
              {products.map((item) => {
                return (
                  <div className='col-md-3' key={item.id}>
                    <Link to={`/products/${item.id}`}>
                      <Product product={item} />
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
