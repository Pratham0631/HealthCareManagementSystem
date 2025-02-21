import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <h1 className="mb-5 text-3xl">HealtCare</h1>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col text-gray-600 gap-2">
                <li>Home</li>
                <li>All Doctors</li>
                <li>Privacy Policy</li>
                
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col text-gray-600 gap-2">
                <li>+91 123 456 789</li>
                <li>example@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr className="text-gray-600"/>
        <p className="py-5 text-center text-sm">Copyright © 2024 HealtCare - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
