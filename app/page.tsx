"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Bathroom1 from "../public/las-vegas-bathroom-remodeling-1.webp";
import Kitchen1 from "../public/las-vegas-kitchen-remodeling-1.webp";
import HomeRemodel1 from "../public/las-vegas-henderson-home-remodel-renovetaion.jpg";
import HomeRemodel2 from "../public/las-vegas-henderson-home-remodel.webp";
import Patio from "../public/las-vegas-henderson-patio-covers-renovetaion.jpg";
import Commercial from "../public/commercial-tenant-improvements-las-vegas-henderson.jpg";
import RoomAdd from "../public/room-addition-contractors-las-vegas-henderson.jpeg";


import HomeRenovation1 from "../public/home-renovation-las-vegas-henderson-1.webp";
import BestContractor from "/public/best-remodeling-contractor-las-vegas.webp";
import Cover from "./components/cover";
import type { NextPage } from "next";
// import HomePageGallery from "./components/gallery/homepage";
import Carousel1 from "./components/carousel/carouselHomePage/carousel";
import Banner from "./components/Banner";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

let myImage: StaticImageData | undefined;

const posts = [
  {
    id: 1 as number,
    title: "Home Remodeling" as string,
    description:
      "Sphere Remodeling, your home transformation partner in Las Vegas and Henderson. We reimagine, redesign, and recreate your living spaces, delivering a seamless blend of style, functionality, and quality. Embrace the dream home experience with our comprehensive home remodels." as string,
    href: "/home-remodeling-las-vegas" as string,
    image: HomeRemodel1 as StaticImageData,
  },

  {
    id: 2 as number,
    title: "Kitchen Remodeling" as string,

    description:
      "Sphere Remodeling, your premier expert in Las Vegas and Henderson for outstanding kitchen remodels. We revitalize your kitchens into stunning, efficient spaces, tailored to your lifestyle. Excellence in design, craftsmanship, and finish, delivering your dream kitchen in every project." as string,
    href: "/kitchen-remodeling-las-vegas-henderson" as string,
    image: Kitchen1 as StaticImageData,
  },

  {
    id: 3 as number,
    title: "Bathroom Remodeling" as string,

    description:
      "Sphere Remodeling, your prime service provider in Las Vegas and Henderson for exceptional bathroom remodels. We transform your bathrooms into elegant, functional spaces, personalized to your taste. Expect flawless execution, top-tier materials, and a luxury finish every time." as string,

    href: "/bathroom-remodeling-las-vegas-henderson" as string,
    image: Bathroom1 as StaticImageData,
  },

  {
    id: 4 as number,
    title: "Patio Covers" as string,
    description:
      "Sphere Remodeling, your premier choice in Las Vegas and Henderson for impeccable drywall installations. We deliver durable, smooth surfaces, executed with precision and tailored to your needs. Expect excellence and professionalism in every project." as string,

    href: "/patio-covers-contractor-las-vegas-henderson" as string,
    image: Patio as StaticImageData,
  },

  {
    id: 5 as number,
    title: "Commercial Tenant Improvements " as string,

    description:
      "Sphere Remodeling, your trusted partner in Las Vegas and Henderson for precision flooring installations. We provide a range of durable and stylish flooring options, expertly fitted for a seamless, lasting finish. Quality service tailored to your preferences and executed to the highest standards." as string,

    href: "/tenant-improvements-las-vegas-henderson" as string,
    image: Commercial as StaticImageData,
  },

  {
    id: 6 as number,
    title: "Room Additions and Garage Conversions" as string,

    description:
      "Sphere Remodeling, your go-to in Las Vegas and Henderson for seamless garage conversions. We repurpose your garage, creating functional, livable spaces. A cost-effective solution to home expansion." as string,

    href: "#" as string,
    image: RoomAdd as StaticImageData,
  },
];

const incentives = [
  {
    name: "Free Estimates",
    // imageSrc:
    //   "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Take the first step towards your dream remodel today! Contact us to schedule your free estimate, and let's bring your vision to life together.",
  },
  {
    name: "1 Year Labore Warranty on Every Project",
    // imageSrc:
    //   "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Our commitment to excellence extends beyond the completion of the remodeling work. ",
  },
  {
    name: "100% Satisfaction Guarantee",
    // imageSrc:
    //   "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Our commitment is to ensure that you are fully satisfied with the outcome of your remodeling project.",
  },
];

export default function Home() {
  return (
    <div>
      <Cover />
      <div className="bg-[#C5CCD9] mx-4">
        <div className=" mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none ">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 ">
              <div>
                <h1 className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Sphere Remodeling: Transforming Las Vegas Homes and Commercial
                  Spaces with Expert Craftsmanship
                </h1>
                <p className="mt-2 text-md font-bold  tracking-tight text-slate-900">
                  With over 25 years of combined experience, our owners
                  personally oversee every project, ensuring that each endeavor
                  is handled with the utmost professionalism, care, and
                  attention to detail. Your satisfaction is our top priority,
                  and we go above and beyond to bring your vision to life.
                </p>
                <div>
                  From crafting bespoke room additions to designing kitchen
                  remodels that capture your culinary dreams, we infuse your
                  space with creativity and craftsmanship that truly resonates
                  with your lifestyle. Let us be your trusted partners in
                  creating a home that celebrates your individuality and becomes
                  a testament to your unique taste.
                  <div className="mt-8">
                <Link 
                href="tel:7026253387"
                    className="inline-flex rounded-md bg-[#0B0D40] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#968FA6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get a Free Quote
                  </Link>
                </div>
                </div>
                
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={HomeRenovation1}
                  alt="Description"
                  className="object-cover object-center"
                  width={500}
                  height={400}
                />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  {/* <div className="sm:flex-shrink-0">
                    <img
                      className="h-16 w-16"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div> */}
                  <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-md font-medium text-slate-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-900 tracking-tight">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}





            </div>
           
        <Carousel1 />
     
          </div>
        </div>

        <div className="bg-white py-12 sm:py-8 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                We are a full-service residential design and remodeling service
              </h2>
              <p className="mt-2 text-md font-bold tracking-tight text-slate-900 sm:text-xl">
                Our founders, with over 25 years of combined expertise in
                residential and commercial renovations, personally oversee every
                project. Rest assured, your vision is in the best hands.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between"
                >
                  <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="relative w-full ">
                      {post.image && (
                        <Image
                          src={post.image}
                          alt="Description"
                          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                          width={300}
                          height={200}
                        />
                      )}

                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs"></div>
                      <div className="group relative">
                        <h3 className=" mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Banner/>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
                  We Put Customers First
                </h2>
                <p className="mt-2 text-md font-bold tracking-tight text-slate-900 sm:text-2xl">
                  We pride ourselves on transforming your ideas and visions into
                  beautifully crafted spaces that exceed your expectations.
                </p>
                <p className="mt-2 text-md tracking-tight text-slate-900">
                  With us, you're not just getting a contractor, you're
                  partnering with experienced professionals who take pride in
                  their work. From meticulous insulation installation that
                  optimizes your home's energy efficiency to artful drywall work
                  and overhead door installation, we're committed to exceeding
                  your expectations.
                </p>
                <div className="mt-8">
                <Link
                href="tel:7026253387"
                    className="inline-flex rounded-md bg-[#968FA6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0B0D40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get a Free Quote
                  </Link>
                </div>
                <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                  <blockquote className="text-base leading-7">
                    <p></p>
                  </blockquote>
                </figure>
              </div>
            </div>
            <Image
              src={BestContractor}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      {/* <HomePageGallery /> */}
    </div>
  );
}