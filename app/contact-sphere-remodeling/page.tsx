import Image from "next/image";
import Kitchen1 from "../../public/las-vegas-kitchen-remodeling-1.jpg";
import { Form } from "../components/contactForm/Form";

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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact us</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
              Thank you for considering Sphere Remodeling for your home renovation needs. With over 25 years of combined experience, we specialize in transforming homes into extraordinary living spaces. Located in Las Vegas, serving Henderson and the surrounding areas, we understand that your home is a reflection of your unique personality and style. Let us help you create the home of your dreams.              </p>
              {/* <form action="#" method="POST" className="mt-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="phone" className="block font-semibold text-gray-900">
                        Phone
                      </label>
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        How can we help you?
                      </label>
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div> */}
                  {/* <fieldset className="sm:col-span-2">
                    <legend className="block text-sm font-semibold leading-6 text-gray-900">Expected budget</legend>
                    <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                      <div className="flex gap-x-2.5">
                        <input
                          id="budget-under-25k"
                          name="budget"
                          defaultValue="under_25k"
                          type="radio"
                          className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                        />
                        <label htmlFor="budget-under-25k">Less than $25K</label>
                      </div>
                      <div className="flex gap-x-2.5">
                        <input
                          id="budget-25k-50k"
                          name="budget"
                          defaultValue="25k-50k"
                          type="radio"
                          className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                        />
                        <label htmlFor="budget-25k-50k">$25K – $50K</label>
                      </div>
                      <div className="flex gap-x-2.5">
                        <input
                          id="budget-50k-100k"
                          name="budget"
                          defaultValue="50k-100k"
                          type="radio"
                          className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                        />
                        <label htmlFor="budget-50k-100k">$50K – $100K</label>
                      </div>
                      <div className="flex gap-x-2.5">
                        <input
                          id="budget-over-100k"
                          name="budget"
                          defaultValue="over_100k"
                          type="radio"
                          className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                        />
                        <label htmlFor="budget-over-100k">$100K+</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send message
                  </button> */}
                {/* </div>
              </form>
            </div> */}
<Form />    


          </div>
        </div>
      </div>   
      </div>
 
    )
  }
  