/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";


import Plans1 from "/public/las-vegas-remodeling-contractors.webp";

export default function Cover() {
  return (
      <div>
       <div className="relative isolate overflow-hidden my-6 mx-4 px-6 py-24 sm:py-32 lg:px-8 ">
          <Image
            src={Plans1}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            width={2200}
            height={800}
          />
        </div>
    </div>
  )
}
