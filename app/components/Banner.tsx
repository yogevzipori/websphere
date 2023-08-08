"use client";

import CallUsNow from "./callUsNow/callNow";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

export default function Banner() {
    return (
      <div className="bg-slate-100 mt-12">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Ready to Schedule? 
            <br />
            We Offer a Free Consulting at Your Home!
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <CallUsNow />
            <a href="/about-sphere-remodeling-construction-las-vegas-henderson" className="text-sm font-semibold leading-6 text-slate-900">
              Learn More About Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  