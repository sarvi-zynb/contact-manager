import { useEffect } from "react";
import dev_img from "../../assets/image/developer-image1.jpg";
import { BLACK } from "../../helpers/colors";
import { useState } from "react";

const Banner = () => {
 
  return (
    <>
      <div className='container mt-5'>
        <div
          className='card mb-3 p-3'
          style={{
            border: "none",
            borderRadius: "15px",
            boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
          }}
        >
          <div className='row g-0'>
            <div className='col-md-7 d-flex align-items-center'>
              <div className='card-body'>
                <p
                  className='card-text text-center fw-bold fa-2x'
                  style={{ color: BLACK }}
                >
                  مرجع تخصصی آموزش ری اکت برای فارسی زبانان
                </p>
              </div>
            </div>
            <div className='col-md-5'>
              <img
                src={dev_img}
                className='img-fluid'
                alt='dev image'
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
