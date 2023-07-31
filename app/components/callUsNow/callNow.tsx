"use client"


import Link from "next/link";
export default function CallUsNow() {
  return (
    <div>  
    <Link
    href="tel:7026253387"
    className= "flex rounded-md bg-[#968FA6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0B0D40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100" >
    Call Now
  </Link></div>
  )
}
