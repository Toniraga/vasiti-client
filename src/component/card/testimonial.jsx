import React from "react";
import man from "../../assets/images/man.png";
import aimg from '../../assets/images/1.svg';

const data = [
  {
    id: 1,
    img: aimg,
    name: "Joseph Ike",
    location: "in ikeja",
    spec: "customer",

    paragraph:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    id: 2,
    img: man,
    name: "Adetola Fashina",
    location: "Ibadan",
    spec: "customer",
    paragraph:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    id: 3,
    img: man,
    name: "Emmanuel Fayemi",
    location: "in Akoka",
    spec: "customer",

    paragraph:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    id: 4,
    img: man,
    name: "Chisom Obilor",
    location: "In Magodo",
    spec: "vendor",

    paragraph:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    id: 5,
    img: man,
    name: "Adunoluwa Adeyemi",
    location: "Iwo Road",
    spec: "vendor",

    paragraph:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    id: 6,
    img: man,
    name: "Chidi Okeke",
    location: "In Somolu",
    spec: "vendor",
    paragraph:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map(({ id, img, spec, name, location, paragraph }) => (
          <div key={id}>
            <div className="mx-8 md:ml-40 md:ml-40">
              { img && <img src={img} className='mt-6' alt='' /> }
              <div className="mt-8 text-base font-semibold">{name}</div>
              <div className="flex mt-3">
                <div className="mr-7 text-xs">{location}</div>
                <div className="bg-light-blue text-xs w-24 p-1 rounded h-7">
                  {spec}
                </div>
              </div>
              <div className="text-sm text-justify w-72 h-64 font-normal mt-6">
                {paragraph}
              </div>
            </div>
            <div>{}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
