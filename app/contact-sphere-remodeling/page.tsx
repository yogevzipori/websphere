import Image from "next/image";
import Kitchen1 from "../../public/las-vegas-kitchen-remodeling-1.webp";
import ContactUsForm from "../components/contactUs/contactUsForm";

export default function ContactUs() {
    return (
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <Image
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
            src={Kitchen1}
            alt=""
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h1 className="mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-3xl">Contact Sphere Remodeling</h1>
              <p className="mt-2 text-lg leading-8 text-gray-600">
              Thank you for considering Sphere Remodeling for your home renovation needs. With over 25 years of combined experience, we specialize in transforming homes into extraordinary living spaces. Located in Las Vegas, serving Henderson and the surrounding areas, we understand that your home is a reflection of your unique personality and style. Let us help you create the home of your dreams.   </p>
         <ContactUsForm /> 
      
          </div>
        </div>
      </div>   
      </div>
 
    )
  }
  