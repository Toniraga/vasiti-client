import React from "react";
import HurrahImg from "../assets/images/hurray.svg";
import Nav from "../component/nav/nav";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const Appreciation = () => {
  return (
    <div className="w-full overflow-hidden">
      <Nav />
      <div className="mx-auto my-24 w-335 pt-10 rounded-lg h-96 bg-white">
        <div className="w-28 h-28 mx-auto rounded-full bg-thanks-color">
          <img className="pt-6 pl-8" src={HurrahImg} alt="img" />
        </div>
        <div className="text-center">
          <div className="font-bold text-lg px-10 pt-4">
            Thank you for Sharing your stories!
          </div>
          <p className="text-xs px-6 pt-3 items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            praesentium facere vel earum
          </p>
          <Link to="/">
          <button
            className="bg-button-color mt-6 w-40 h-12 rounded-lg text-white font-normal"
            type="button"
          >
              Close
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appreciation;
