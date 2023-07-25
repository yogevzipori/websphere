"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";
import Carousel2 from "../components/carousel/carouselRandom/carousel";

import Bathroom1 from "../public/las-vegas-bathroom-remodeling-1.jpg";
import Kitchen1 from "/public/las-vegas-kitchen-remodeling-1.jpg";
import HomeRemodel1 from "/public/las-vegas-henderson-home-remodel.jpg";
import HomeRenovation1 from "/public/home-renovation-las-vegas-henderson-1.jpg";
import Plans1 from "../public/las-vegas-remodeling-contractors.jpg";
import Cover from "../components/cover";
import Border from "../components/Banner";
import BestKitchen1 from "/public/best-kitchen-contractor-las-vegas-henderson.jpg";
import BestKitchen2 from "/public/best-kitchen-renovation-las-vegas-henderson.jpg";
import BestKitchen3 from "/public/best-kitchen-renovation-las-vegas-henderson2.jpg";
import BestKitchen4 from "/public/best-kitchen-contractor-las-vegas-henderson2.jpg";
import Plans2 from "/public/kitchen-las-vegas.jpg";
import HomePageGallery from "../components/gallery/homepage";
import CallForFreeQuote from "../components/freeQuoteCall/freeQuote";
import Banner from "../components/Banner";

export default function KitchenRemodeling() {
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
                  Unleash the Magic of Home Remodeling: Elevate Your Space in
                  Las Vegas & Henderson with Sphere Remodeling
                </h1>
                <p className="mt-8 text-md font-bold  tracking-tight text-slate-900">
                  Our owners, possessing over 25 years of combined experience in
                  residential and commercial projects, personally operate Sphere
                  Remodeling, bringing a wealth of expertise and dedication to
                  every transformation we undertake. From state-of-the-art
                  kitchens in high-end restaurants to stylish home renovations,
                  our expertise in carpentry and renovation shines through.
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
                  Imagine your dream home, and we'll make it a reality! Our team
                  of remodeling experts has over 25 years of experience,
                  ensuring your project is in the best hands. We take care of
                  everything, so you can sit back and enjoy the process. From
                  demolishing the old to crafting the new, we'll handle it all
                  with ease. In the heart of the desert, your home will shine
                  with a new light. Our passion for delivering outstanding
                  results ensures your satisfaction. Are you ready to embark on
                  this home remodeling journey with us? Let's create a space
                  that feels like home sweet home. With us, it's easy,
                  enjoyable, and stress-free. Step into our world of home
                  remodeling, where dreams come true with a touch of magic!
                </p>
                <Carousel2 />

                <h2 className="mt-14 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Unlock the hidden potential of your entire home with our
                  transformative touch
                </h2>
                <p className="mt-2 text-md tracking-tight text-slate-900">
                  From chic living rooms to glamorous bedrooms, and from lavish
                  bathrooms to awe-inspiring kitchens, we bring a touch of
                  coolness to every corner of your home. Each project is an
                  artistic expression, uniquely tailored to match your distinct
                  taste and style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
      <div className="px-6">
        <Carousel2 />
      </div>

      <div className="overflow-hidden bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-2">
              <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl mt-2">
                Step into a realm of unparalleled creativity and expertise with
                Sphere Remodeling - we're your partners in making dreams a
                reality
              </h2>
              <p className="mt-4 text-md font-bold tracking-tight text-slate-900">
                Whether you envision a modern masterpiece, a timeless
                traditional space, or a charming rustic retreat, we've got the
                know-how to bring it to life. Our talented designers will
                collaborate with you throughout the entire process, ensuring
                that every detail aligns with your vision and perfectly
                complements your family's needs.
              </p>
              <p className="mt-2 text-md tracking-tight text-slate-900">
                From concept to completion, your dream kitchen will become a
                reality that not only dazzles the eyes but also warms the heart.
                Let us be your partners in creating a kitchen space that will be
                a source of joy and inspiration for years to come. Get ready to
                fall in love with your new kitchen – designed and built with
                passion and expertise, exclusively for you.
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
      <div className="px-6">
        <Carousel2 />
      </div>
    </div>
  );
}
