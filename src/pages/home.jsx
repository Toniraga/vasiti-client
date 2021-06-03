import React from "react";
import couple from "../assets/images/couple.svg";
import vector from "../assets/images/vector.svg";
import group from "../assets/images/group.svg";
import Tesitimonial from "../component/card/testimonial";
import woman from "../assets/images/woman.svg";
import Footer from "../component/Footer";
import Nav from "../component/nav/nav";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Nav />
      <div className="md:flex block">
        <div className="mt-5 ml-8 md:ml-40 mr-14 w-full">
          <h1 className="text-3xl font-bold mt-20 w-8/12 md:w-full">
            Amazing <br className='none md:block' /> Experiences from Our Wonderful Customers
          </h1>

          <p className="w-8/12 md:w-10/12 mt-5 text-vas-color text-sm">
            Here is what customers and vendors are saying about us, you
            can share your stories with us too.
          </p>
        </div>
        <div className="mt-5 w-full md:mr-14">
          <img src={couple} alt="" />
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="block md:hidden md:ml-40">
          <div className="font-semibold ml-16 pt-28">
            <h2>Oby’s Experience </h2>
          </div>
          <div className="ml-16 mt-3 w-24 ">
            <p className="border p-2 rounded">customer</p>
          </div>
          <div className="ml-16 mt-3 mr-14 text-justify">
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
          </div>
        </div>
        <div className="mt-12 font-medium ml-16 mr-14 block md:hidden">
          <p>Share your own story!</p>
          <img src={vector} alt="" />
        </div>
        <div className="flex">
          <div className="mt-24 md:ml-28 w-full">
            <img src={group} alt="" />
          </div>
          <div className="hidden md:block">
            <div className="font-semibold ml-16 pt-28">
              <h2>Tolu & Joy's Experience </h2>
            </div>
            <div className="ml-16 mt-3 w-24 ">
              <p className="border p-2 rounded">customer</p>
            </div>
            <div className="ml-16 mt-3 mr-14 text-justify w-full">
              <p className="w-96">
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </p>
              <div className="mt-12 font-medium ml-16 mr-14">
                <p>Share your own story!</p>
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tesitimonial />
      <div className="bg-thanks-color">
      <div className="flex">
        <div className="hidden md:block w-full md:ml-20 md:mt-24">
          <div className="mx-16 font-bold text-xl">Josiah’s Experience</div>
          <div className=" mx-16 border rounded mt-6 border-button-color h-7 w-20">
            <p className="text-button-color mx-2">vendor</p>
          </div>
          <div className="mt-7 mx-16 font-normal text-justify text-sm">
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
          </div>
          <div className="mt-12 font-medium pb-8 ml-16 mr-14">
            <p className="text-button-color">Share your own story!</p>
            <img src={vector} alt="" />
          </div>
        </div>
        <div className="mx-16 py-16 w-full">
          <img src={woman} alt="woman-shopping" />
              </div>
                  
              </div>
        <div className="md:hidden block">
          <div className="mx-16 font-bold text-xl">Victoria's Experience</div>
          <div className=" mx-16 border rounded mt-6 border-button-color h-7 w-20">
            <p className="text-button-color mx-2">vendor</p>
          </div>
          <div className="mt-7 mx-16 font-normal text-justify text-sm">
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
          </div>
          <div className="mt-12 font-medium pb-8 ml-16 mr-14">
            <p className="text-button-color">Share your own story!</p>
            <img src={vector} alt="" />
          </div>
        </div>
          </div>
          <Tesitimonial />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
