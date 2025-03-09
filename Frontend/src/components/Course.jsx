import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
// import { use } from "react";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 items-center justify-center text-center">
          <div className="mt-20">
            <h1 className="text-2xl font-semibold md:text-4xl">
              We're delighted to Have you{" "}
              <span className="text-pink-500">Here! :)</span>
            </h1>
          </div>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            fuga sunt itaque sit sapiente quisquam perspiciatis excepturi
            asperiores quas provident, delectus at vitae perferendis maxime!
            Eveniet minima error reiciendis accusantium. Harum quam rem, minima
            at quisquam voluptatem nulla magnam nam cupiditate vel soluta
            molestiae voluptas maiores omnis aspernatur. Ipsum alias voluptates
            veritatis enim ab quae atque blanditiis dolores numquam!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
