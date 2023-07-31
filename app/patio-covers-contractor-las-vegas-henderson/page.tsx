"use client"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import CallForFreeQuote from "../components/freeQuoteCall/freeQuote";
import Image from "next/image";

import Bathroom1 from "../public/las-vegas-bathroom-remodeling-1.webp";
import Kitchen1 from "/public/las-vegas-kitchen-remodeling-1.webp";
import HomeRemodel1 from "/public/las-vegas-henderson-home-remodel.webp";
import HomeRenovation1 from "/public/home-renovation-las-vegas-henderson-1.webp";
import Plans1 from "../public/las-vegas-remodeling-contractors.webp";
import Cover from "../components/cover";
import Border from "../components/Banner";
import BestKitchen1 from "/public/best-kitchen-contractor-las-vegas-henderson.webp";
import BestKitchen2 from "/public/best-kitchen-renovation-las-vegas-henderson.webp";
import BestKitchen3 from "/public/best-kitchen-renovation-las-vegas-henderson2.webp";
import BestKitchen4 from "/public/best-kitchen-contractor-las-vegas-henderson2.webp";
import Plans2 from "/public/kitchen-las-vegas.jpg";
import HomePageGallery from "../components/gallery/homepage";
import Banner from "../components/Banner";

export default function PatioCovers() {
  return (
    <div>
      <div>
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 ">
          <Image
            src={Plans2}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          
          />
        </div>
      </div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                {/* <p className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </p> */}
                <h1 className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                Discover the enchanting world of Sphere Remodeling, where outdoor design dreams come true in stunning splendor
                </h1>
                <p className="mt-8 text-md font-bold  tracking-tight text-slate-900">
                Indulge in the mesmerizing charm of Sphere Remodeling as we weave a patio cover that transcends beauty and blends seamlessly with your outdoor oasis. Beyond aesthetics, our patio covers add a touch of functionality, making each moment spent under its shade a cherished memory that withstands the test of time. 
          
                </p>
              </div>
            </div>
          </div>
                  

          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={BestKitchen1}
              alt=""
            />
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
         

                <p className="lg:-mt-8 sm:-mt-14 text-md tracking-tight text-slate-900">
                With our owners personally overseeing every transformation, boasting over 25 years of combined experience in both residential and commercial projects, you can rest assured that your outdoor design dreams are in the most capable hands.

                </p>

                <h2 className="mt-14 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                  We're more than just a remodeling company
                </h2>
                <p className="mt-2 text-md tracking-tight text-slate-900">
                Step into the enchanting world of Sphere Remodeling, where patio covers transcend mere structures to become captivating masterpieces of artistry and craftsmanship. Your outdoor living experience will ascend to new heights as we work our magic, bringing your patio cover dreams to vibrant reality. Embrace the allure of Las Vegas and Henderson as we embark on this enchanting journey together. Your outdoor haven awaits, and Sphere Remodeling is here to make it an extraordinary reality. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomePageGallery />

      <Banner/>

      <div className="overflow-hidden bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-2">
              <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl mt-2">
                With Sphere Remodeling, you're not just hiring a contractor
              </h1>
              <p className="mt-4 text-md font-bold tracking-tight text-slate-900">
              From crafting exceptional patio covers that elevate your outdoor living experience to transforming your kitchen into a culinary haven, Sphere Remodeling's passion for creating extraordinary living spaces knows no bounds. As your trusted partners, we take pride in turning your visions into reality, both inside and outside your home, with our unparalleled expertise and unwavering commitment to your satisfaction.
              </p>
              <p className="mt-2 text-md tracking-tight text-slate-900">
             
              Let your imagination soar as we turn your outdoor dreams into reality. With our dedication to excellence, we infuse every patio cover with enduring beauty and functionality. Imagine basking in the cool shade of your new patio cover, savoring moments with loved ones, and creating cherished memories in the heart of Las Vegas and Henderson. Our expertise doesn't stop at patio covers – we are masters of interior transformation as well. From kitchen remodeling that adds both style and functionality to your culinary space to crafting custom-made cabinets, durable countertops, and elegant wooden flooring, we elevate your kitchen to a whole new level of sophistication.

              </p>
              <div className="mt-10 flex">
              <CallForFreeQuote />
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                
                <Image
                  src={Kitchen1}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <Image
                    src={BestKitchen4}
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    src={BestKitchen2}
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    src={BestKitchen3}
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
