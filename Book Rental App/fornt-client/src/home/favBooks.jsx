import React from "react";
import FavImg from "../assets/favimg.jpg";
import { Link } from "react-router-dom";
const FavBooks = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={FavImg} alt="" className=" rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4">
          Find Your Favorite <span className="text-red-600">Book here</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quis
          quos ducimus esse dolor quod, optio repudiandae vitae! Consequuntur
          vitae blanditiis non fugiat totam quis molestias illo animi enim
          consequatur! Dolorem aliquam quam maiores, ducimus rerum corporis
          debitis laboriosam incidunt optio! Quas assumenda totam veniam
          voluptatem molestias facere iure. Veniam!
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1250+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className="mt-10 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBooks;
