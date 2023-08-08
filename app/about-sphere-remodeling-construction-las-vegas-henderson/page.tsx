"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";


import HomeRenovation1 from "/public/home-renovation-las-vegas-henderson-1.webp";
import Plans1 from "../../public/las-vegas-remodeling-contractors.webp";
import Cover from "../components/cover";
import CallForFreeQuote from "../components/freeQuoteCall/freeQuote";

export default function About() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">
              Sphere Remodeling
            </p>
            <h1 className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
              Redefining Your Living Spaces with Exceptional Expertise
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  We are masters of the art of home transformation. As a premier
                  home remodeling company in Las Vegas and Henderson, we have
                  been elevating living spaces for over 25 years with
                  unparalleled expertise and dedication. Our passion lies in
                  turning houses into homes that exude sophistication and
                  functionality.For business owners, we excel in commercial
                  tenant improvement, breathing new life into your workspace.
                </p>
                <p className="mt-4">
                  We offer a diverse range of services, catering to every aspect
                  of home improvement. Whether you desire a room addition to
                  expand your living area, a kitchen remodeling that reflects
                  your culinary dreams, or a stylish upgrade for your trim and
                  doors, we have the knowledge and skills to make it happen.
                </p>
              </div>
              <div>
                <p>
                  We extend our mastery to the great outdoors as well. Create a
                  relaxing sanctuary with our patio cover installations, where
                  you can unwind and connect with nature without compromising on
                  comfort.
                </p>
                <p className="mt-4">
                  At Sphere Remodeling, your dream home is our mission. We are
                  passionate about creating spaces that resonate with your
                  personality and lifestyle. Our commitment to excellence,
                  attention to detail, and timely execution have earned us the
                  trust of countless satisfied clients.
                </p>
              </div>
            </div>
            <div className="mt-8 flex">
            <CallForFreeQuote />

            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              src={Plans1}
              alt="The best home remodeling company in Las Vegas and Henderson"
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <Image
          src={HomeRenovation1}
          alt="Home remodeling and renovation in las-vegas"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"></h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p> */}
        </div>
      </div>
    </div>
  );
}
