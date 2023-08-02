"use client"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import CallForFreeQuote from "../components/freeQuoteCall/freeQuote";
import Image from "next/image";
import Carousel2 from "../components/carousel/carouselRandom/carousel";
import Bathroom1 from "../public/las-vegas-bathroom-remodeling-1.webp";
import Kitchen1 from "/public/las-vegas-kitchen-remodeling-1.webp";
import HomeRemodel1 from "/public/las-vegas-henderson-home-remodel.webp";
import HomeRenovation1 from "/public/home-renovation-las-vegas-henderson-1.webp";
import Plans1 from "../public/las-vegas-remodeling-contractors.webp";
import Cover from "../components/cover";
import Banner from "../components/Banner";
import BestKitchen1 from "/public/best-kitchen-contractor-las-vegas-henderson.webp";
import BestKitchen2 from "/public/best-kitchen-renovation-las-vegas-henderson.webp";
import BestKitchen3 from "/public/best-kitchen-renovation-las-vegas-henderson2.webp";
import BestKitchen4 from "/public/best-kitchen-contractor-las-vegas-henderson2.webp";
import Plans2 from "/public/kitchen-las-vegas.jpg";
// import HomePageGallery from "../components/gallery/homepage";

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
      <div className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-8 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
              
                <h1 className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Kitchen Remodeling Las Vegas & Henderson
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
               

                <div className="lg:-mt-8 sm:-mt-14 text-md tracking-tight text-slate-900">
                You can trust us with all of your kitchen remodeling needs, from
                start to finish. We'll take care of everything from demolition
                to installation so that you don't have to worry about anything
                but enjoying your new space!
                <div className="mt-8">
                <Link 
                href="tel:7026253387"
                    className="inline-flex rounded-md bg-[#0B0D40] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#968FA6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Call Us Now
                  </Link>
                </div>
                </div>
                <Carousel2 />

                <h2 className="mt-14 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                  We're more than just a kitchen remodeling company
                </h2>
                <p className="mt-2 text-md tracking-tight text-slate-900">
                  Our expertise extends beyond kitchens. We're adept at
                  implementing energy-efficient insulation solutions, perfect
                  for the desert climate of Las Vegas and Henderson. Our
                  meticulous drywall work ensures smooth and seamless walls,
                  ready for the finishing touches of paint and decor. We'll fit
                  perfectly balanced overhead doors and even add elegant
                  finishing touches such as baseboards and door casings,
                  ensuring every detail of your home is polished and perfected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-12">
      <Carousel2 />
      </div>

      <Banner/>

      <div className="overflow-hidden bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-2">
              <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl mt-2">
                With Sphere Remodeling, you're not just hiring a contractor
              </h1>
              <p className="mt-4 text-md font-bold tracking-tight text-slate-900">
                We can help you design and build your dream kitchen. Whether
                you're looking for a modern, traditional, or rustic style, we
                have the expertise to make it happen. Our team of designers will
                work with you every step of the way to ensure that your new
                kitchen is perfect for you and your family.
              </p>
              <p className="mt-2 text-md tracking-tight text-slate-900">
             
                  From kitchen remodeling to general home renovations, we bring
                  unrivaled craftsmanship and passion to every project. Imagine
                  your outdated kitchen getting a stylish, modern overhaul with
                  custom-made cabinets, durable countertops, and elegant wooden
                  flooring, all skillfully designed and installed by our team.
                  Not only will these enhancements add value to your home, but
                  they will also transform your everyday living experience.

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
        <div className="px-96 pb-12">
      <Carousel2 />
      </div>
      </div>

    </div>
  );
}
