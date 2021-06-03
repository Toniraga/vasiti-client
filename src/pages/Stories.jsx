import React, { useState } from "react";
import AtImg from "../assets/images/at.svg";
import { Link } from "react-router-dom";
import Nav from "../component/nav/nav";
import Footer from "../component/Footer";

const Stories = () => {
  const [username, setUserName] = useState("");

  const [change, setChange] = useState("");
  console.log(setChange);

  const handleChange = () => setChange(!change);
  const updateUserName = () => setUserName(!username);

  return (
    <>
      <div className="w-full overflow-hidden">
        <Nav />
        <div className="w-335 md:w-527 h-480 bg-white my-24 mx-auto p-4 rounded-2xl">
          <div className="font-bold text-center py-2">
            Share your amaizing story!
          </div>
          <div className="text-new-me-400">
            <form className="">
              <div className="">
                <label className="text-xs mb-2" for="username">
                  Upload your Picture
                </label>
                <div className=" w-full px-auto flex border border-gray rounded">
                  <input
                    className="custom-file-input"
                    type="file"
                    placeholder="Username"
                    onChange={(e) => setChange(e.target.value)}
                    accept="image/png, image/jpeg"
                  />
                  <span className="mr-3 md:ml-48 z-10 mt-2">
                    <img className="w-4 h-4" src={AtImg} alt="img" />
                  </span>
                </div>
              </div>
              <div className="flex my-2">
                <div className="">
                  <label className="text-xs mb-3" for="password">
                    First Name
                  </label>
                  <input
                    className="border border-red-gray rounded w-full py-1 focus:border-none"
                    type="text"
                    placeholder=""
                    onChange={(e) => updateUserName(e.target.value)}
                  />
                </div>
                <div className="ml-4">
                  <label className="text-xs mb-3" for="password">
                    Last Name
                  </label>
                  <input
                    className="border border-red-gray rounded w-full py-1"
                    type="text"
                    placeholder=""
                    onChange={(e) => updateUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <label className="text-xs bb-3" for="password">
                  Share your story
                </label>
                <input
                  className="border border-red-gray rounded w-full py-4"
                  type="text"
                  placeholder=""
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              <div className="block md:flex justify-between my-4">
                <span className="text-xs">
                  What did you interact with vasiti as?
                </span>
                <div className="">
                  <span className="text-xs">
                    <input type="checkbox" name="" />
                    <label className="ml-1" htmlFor="">
                      Customer
                    </label>
                  </span>
                  <span className="text-xs ml-8">
                    <input className="rounded-full" type="checkbox" name="" />
                    <label className="ml-1" htmlFor="">
                      Vendor
                    </label>
                  </span>
                </div>
              </div>
              <div className="">
                <label className="text-xs pb-3" for="password">
                  City or Higher Institution (for Student)
                </label>
                <input
                  className="border border-red-gray rounded w-full py-1"
                  type="text"
                  placeholder=""
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              <Link to="/thank-you">
                <button
                  class="float-right bg-button-color mt-6 md:mt-12 w-40 h-12 rounded-lg text-white font-normal"
                  type="button"
                >
                  Share your story!
                </button>
              </Link>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Stories;
