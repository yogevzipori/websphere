"use client";
import Router from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

type FormState = {
  EMAIL: string;
  FNAME: string;
  LNAME: string;
  PHONE: string;
};

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
    PHONE: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const url = "https://sphereremodeling.us21.list-manage.com/subscribe/post?u=ecf7e32e68345cc3d9a5c44c6&id=dd3036066d&f_id=00ce5de1f0";


    const urlParams = new URLSearchParams(formData).toString();

    try {
      const response = await axios.post(
        url,
        urlParams,
        config
      );

      if (response.status === 200) {
        console.log("Data sent successfully");
      }
    } catch (error) {
      console.error("Failed to send the data:", error); // Print only the error message
    } 
  };

  return (
   <div className="bg-slate-100 mt-20 flex items-center justify-center h-screen">
  <form className="bg-white p-6 rounded-lg shadow-md w-96"
        action="https://sphereremodeling.us21.list-manage.com/subscribe/post?u=ecf7e32e68345cc3d9a5c44c6&id=dd3036066d&f_id=00ce5de1f0"
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
            id="mce-FNAME"
            required
            value={formData.FNAME}
            onChange={handleInputChange}
            className="w-full my-3 flex-1 py-2 px-4 border rounded-md"

          />
        </div>
        <div className="my-3">
          <label htmlFor="LNAME" className="block">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            required
            value={formData.LNAME}
            onChange={handleInputChange}
            className="w-full my-3 flex-1 py-2 px-4 border rounded-md"

          />
        </div>
        <div className="my-3">
          <label htmlFor="PHONE" className="block">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="PHONE"
            id="mce-PHONE"
            value={formData.PHONE}
            onChange={handleInputChange}
            className="w-full my-3 flex-1 py-2 px-4 border rounded-md"

          />
        </div>
        <div className="my-3 ">
          <label htmlFor="EMAIL" className="block">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            value={formData.EMAIL}
            onChange={handleInputChange}
            // className="flex-1 py-2 px-24 border rounded-md"
            className="w-full my-3 flex-1 py-2 px-4 border rounded-md"

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
