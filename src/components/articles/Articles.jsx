import JS from "../../assets/image/js.png";
import REACT from "../../assets/image/react.webp";
import CSS from "../../assets/image/css.png";

const Articles = () => {
  return (
    <>
      <div className='container mt-5'>
        <div
          className='card mb-3 p-2'
          style={{
            border: "none",
            borderRadius: "15px",
            boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
          }}
        >
          <div className='row g-0'>
            <div className='col-md-12'>
              <div className='card-body'>
                <h5 className='card-title'>دسته بندی مقالات</h5>
                <div className='container mt-5'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div
                        className='card mb-3 p-2'
                        style={{
                          border: "none",
                          borderRadius: "0.4rem",
                          boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
                        }}
                      >
                        <div className='row g-0'>
                          <div className='col-md-12'>
                            <div className='card-body'>
                              <div className='row'>
                                <div className='col-6'>
                                  <img
                                    src={JS}
                                    style={{ width: "64px", height: "64px" }}
                                  />
                                </div>
                                <div className='col-6 d-flex align-items-center'>
                                  <p>جاوا اسکریپت</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div
                        className='card mb-3 p-2'
                        style={{
                          border: "none",
                          borderRadius: "0.4rem",
                          boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
                        }}
                      >
                        <div className='row g-0'>
                          <div className='col-md-12'>
                            <div className='card-body'>
                              <div className='row'>
                                <div className='col-6'>
                                  <img
                                    src={REACT}
                                    style={{ width: "64px", height: "64px" }}
                                  />
                                </div>
                                <div className='col-6 d-flex align-items-center'>
                                  <p>ری اکت</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div
                        className='card mb-3 p-2'
                        style={{
                          border: "none",
                          borderRadius: "0.4rem",
                          boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
                        }}
                      >
                        <div className='row g-0'>
                          <div className='col-md-12'>
                            <div className='card-body'>
                              <div className='row'>
                                <div className='col-6'>
                                  <img
                                    src={CSS}
                                    style={{ width: "64px", height: "64px" }}
                                  />
                                </div>
                                <div className='col-6 d-flex align-items-center'>
                                  <p>سی اس اس</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
