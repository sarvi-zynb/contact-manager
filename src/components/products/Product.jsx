import { BLACK, GREEN, NANY_BLUE } from "../../helpers/colors";

const Product = ({ product }) => {
  return (
    <>
      <div
        className='card'
        style={{
          border: "none",
          borderRadius: "7px",
          boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
          fontSize: "13px",
        }}
      >
        <img
          src={product.imgUrl}
          className='card-img-top'
          alt='image'
          style={{
            borderRadius: "7px 7px 0 0",
          }}
        />
        <div className='card-body p-0'>
          <p
            className='card-text pt-3 fw-bold text-center'
            style={{ color: BLACK }}
          >
            {product.title}
          </p>
          <hr />
          <p
            className='card-text p-0 fw-bold text-center'
            style={{ color: BLACK }}
          >
            {product.time}
          </p>
          <hr />
          <p className='card-text fw-bold text-center' style={{ color: GREEN }}>
            {product.price}
          </p>
          <div
            style={{
              backgroundColor: NANY_BLUE,
              height: "10px",
              borderRadius: "0 0 7px 7px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Product;
