import axios from "axios";
import Articles from "../../components/articles/Articles";
import Banner from "../../components/banner/Banner";
import Blogs from "../../components/blogs/Blogs";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import Footer from "../../components/footer/Footer";
const blogs = [
  {
    id: "1",
    title: "کتابخانه Zustand در ری اکت ! یک State Management قدرتمند و ساده !",
    imageUrl:
      "https://frontendi.com/wp-content/uploads/2024/01/zustand-in-react-500x350.webp",
  },
  {
    id: "2",
    title:
      "احراز هویت در ری اکت(هرچیزی که از AuthenticationدرReact باید بدونیم!)",
    imageUrl:
      "https://frontendi.com/wp-content/uploads/2024/02/React-Authentication-500x350.webp",
  },
  {
    id: "3",
    title: "GraphQL چیست و چطور از GraphQL در ری اکت استفاده کنیم ؟",
    imageUrl:
      "https://frontendi.com/wp-content/webp-express/webp-images/uploads/2024/01/what-is-graphql-500x350.png.webp",
  },
  {
    id: "4",
    title:
      "Portals در ری اکت چیست ؟ + مثال و تیکه کد از آموزش Portals در ریکت !",
    imageUrl:
      "https://frontendi.com/wp-content/uploads/2024/01/portals-in-react-500x350.webp",
  },
];
const Home = () => {
  return (
    <div>
      <Banner />
      <Articles />
      <Blogs blogs={blogs} />
      <Footer />
    </div>
  );
};

export default Home;
