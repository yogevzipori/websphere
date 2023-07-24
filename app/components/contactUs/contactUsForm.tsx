"use client";
import Router from "next/router";
import { useState } from "react";
import axios from "axios";

const ContactUsForm: any = ()  => {
  const [formData, setFormData] = useState({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
    PHONE: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const urlParams = new URLSearchParams(formData).toString();

    try {
      const response = await axios.post(
        "https://sphereremodeling.us21.list-manage.com/subscribe/post?u=ecf7e32e68345cc3d9a5c44c6&amp;id=dd3036066d&amp;f_id=00ce5de1f0",
        urlParams,
        config
      );

      console.log(response.status); // To check the status

      if (response.status === 200) {
        console.log("Data sent successfully");
      }
    } catch (error) {
      console.error("Failed to send the data:", error); // To print the error
    } 
  };

  return (
    <div className="bg-white clear:left font-sans text-base w-96">
      <form
        action="https://sphereremodeling.us21.list-manage.com/subscribe/post?u=ecf7e32e68345cc3d9a5c44c6&amp;id=dd3036066d&amp;f_id=00ce5de1f0"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="my-3">
          <label htmlFor="FNAME" className="block">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="FNAME"
            className="required text"
            id="mce-FNAME"
            required
            value={formData.FNAME}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="LNAME" className="block">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="LNAME"
            className="required text"
            id="mce-LNAME"
            required
            value={formData.LNAME}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="PHONE" className="block">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="PHONE"
            className="required text"
            id="mce-PHONE"
            value={formData.PHONE}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="EMAIL" className="block">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required
            value={formData.EMAIL}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <span className="text-red-500">*</span> indicates required
        </div>
        <div className="my-3">
          <button
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button bg-blue-500 text-white py-2 px-4 rounded"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
};


export default ContactUsForm;
