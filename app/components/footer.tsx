
// import React from "react";
// import "../styles/globals.css";


const navigation = {
  main: [
    { name: 'About', href: '/about-sphere-remodeling-construction-las-vegas-henderson' },
    { name: 'Contact Us', href: '/contact-sphere-remodeling' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
   ]
}



export default function Footer() {
  return (
    <>
    

    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-12 text-center text-xs leading-5 text-gray-500">
          &copy; All rights reserved to Sphere Remodeling LLC.<br/> 170 S Green Valley Pkwy #300, Henderson, NV 89012<br/> (702) 625-3387
          <br/> Nevada Licence Number #0090898
        </p>
      </div>
    </footer>

    </>
  ) 
};