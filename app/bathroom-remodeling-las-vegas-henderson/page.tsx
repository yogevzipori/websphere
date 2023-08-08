"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";
import Carousel2 from "../components/carousel/carouselRandom/carousel";
import Carousel3 from "../components/carousel/carouselBathroom/carousel";


import Bathroom1 from "/public/las-vegas-bathroom-remodeling-1.webp";
import Bathroom2 from "/public/bathroom-shower-remodeling-henderson-las-vegas.jpg"
import Bathroom3 from "/public/bathroom-remodeling-henderson-renovetaion-las-vegas.jpg";
import Bathroom4 from "/public/bathroom-remodeling-henderson-renovetaion-las-vegas.jpeg";
import Kitchen1 from "/public/las-vegas-kitchen-remodeling-1.webp";
import HomeRemodel1 from "/public/las-vegas-henderson-home-remodel.webp";
import HomeRenovation1 from "/public/home-renovation-las-vegas-henderson-1.webp";
import Plans1 from "/public/las-vegas-remodeling-contractors.webp";
import Cover from "../components/cover";
import Banner from "../components/Banner";
import HomePageGallery from "../components/gallery/homepage";
import CallForFreeQuote from "../components/freeQuoteCall/freeQuote";

export default function BathroomRemodeling() {
  return (
    <div>
      <Cover />

      <div className="overflow-hidden bg-slate-100 py-12">
        <div className="px-4 pb-2">
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h1 className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                Designing Your Dream Bathroom: Crafted to Perfection
              </h1>

              <p className="mt-8 text-md font-bold  tracking-tight text-slate-900">
                At Sphere Remodeling, where we specialize in turning ordinary
                bathrooms into extraordinary havens of relaxation and elegance.
                With over 25 years of combined experience in residential and
                commercial projects, our owners personally oversee every
                transformation, bringing a wealth of expertise and dedication to
                each endeavor.
              </p>

              <div className="mt-2 text-md tracking-tight text-slate-900">
                We firmly believe that your home should be an authentic
                reflection of your unique personality and style. That's why
                we're passionate about transforming bathrooms into luxurious
                oases that perfectly suit your preferences.
                
              </div>

              <div className="mt-10 flex">
              <CallForFreeQuote />

              </div>
            </div>

            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"></div>
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={Bathroom4}
                alt="Best bathroom remodeling contractor in Las Vegas and Henderson"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                width={1152}
                height={842}
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={Bathroom2}
                  alt="Bathroom and Shower remodeling contractor in Las Vegas and Henderson"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={Bathroom1}
                  alt="Las Vegas and Henderson bathroom remodeling contractor"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={Bathroom3}
                  alt="Bathroom contractor in Las Vegas and Henderson"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pb-12">
        <Carousel3 />
        </div>
      </div>
      <Banner />
    </div>
  );
}
