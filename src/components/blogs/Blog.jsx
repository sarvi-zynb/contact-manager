import { BLUE } from "../../helpers/colors";
const Blog = ({ title, imageUrl }) => {
  return (
    <>
      <div
        className='card'
        style={{
          borderRadius: "7px",
          borderStyle: "none",
          boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
        }}
      >
        <img
          src={imageUrl}
          className='card-img-top'
          alt='image'
          style={{
            borderRadius: "7px 7px 0 0",
          }}
        />
        <div className='card-body p-0'>
          <p className='card-text p-3 fw-bold text-center'>{title}</p>
          <a
            href='#'
            className='btn btn-primary d-block'
            style={{
              borderRadius: "0 0 7px 7px",
              backgroundColor: BLUE,
              borderColor: BLUE,
            }}
          >
            ادامه مطلب
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;
