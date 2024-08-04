import Blog from "./Blog";

const Blogs = ({blogs}) => {

  return (
    <>
      <div className='container mt-5'>
        <div
          className='card mb-3 p-4 pb-5'
          style={{
            border: "none",
            borderRadius: "15px",
            boxShadow: "0px 5px 23px 0px rgba(0,0,0,.1)",
          }}
        >
          <h5 className='card-title'>دسته بندی مطالب</h5>
          <div className='row mt-1 g-4'>
            {blogs.map((blog) => {
              return (
                <div className='col-md-3' key={blog.id}>
                  <Blog title={blog.title} imageUrl={blog.imageUrl} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
