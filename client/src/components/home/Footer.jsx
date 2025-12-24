import React from 'react'

const Footer = () => {
   return (
      <>
         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

         <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10 mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

               {/* Column 1 */}
               <div className="sm:col-span-2 lg:col-span-1">
                  <a href="/">
                     <img src="./logo.svg" alt="Logo" className="h-11 w-auto" />
                  </a>
                  <p className="text-sm mt-6">
                     Resume-build is a free Resume builder application used to create, edit & export customizable resumes with the help of AI.
                  </p>
               </div>

               {/* Column 2 */}
               <div className="flex flex-col lg:items-center lg:justify-start">
                  <div className="flex flex-col text-sm space-y-2.5">
                     <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                     <a className="hover:text-slate-600 transition" href="#">Home</a>
                     <a className="hover:text-slate-600 transition" href="#features">
                        Features
                        <span className="text-xs text-white bg-purple-500 rounded-md ml-2 px-2 py-0.5">AI - Powered</span>
                     </a>
                     <a className="hover:text-slate-600 transition" href="#testimonials">Testimonials</a>
                     <a className="hover:text-slate-600 transition" href="#contact">Contact</a>
                  </div>
               </div>

               {/* Column 3 - Feedback */}
               <div>
                  <h2 className="font-semibold text-gray-800 mb-5">We value your feedback</h2>
                  <div className="text-sm space-y-6 max-w-sm">
                     <p>Share your thoughts and help us improve our platform.</p>

                     <div className="space-y-3 p-3 rounded-md bg-indigo-50">
                        <input
                           className="focus:ring-2 bg-white ring-indigo-600 outline-none w-full py-2 rounded px-2"
                           type="text"
                           placeholder="Your Name"
                        />

                        <input
                           className="focus:ring-2 bg-white ring-indigo-600 outline-none w-full py-2 rounded px-2"
                           type="email"
                           placeholder="Your Email"
                        />

                        <textarea
                           className="focus:ring-2 bg-white ring-indigo-600 outline-none w-full py-2 rounded px-2 resize-none h-20"
                           placeholder="Write your feedback..."
                        ></textarea>

                        <button className="bg-purple-600 px-4 py-2 w-full text-white rounded">
                           Submit Feedback
                        </button>
                     </div>
                  </div>
               </div>

            </div>

            <p className="py-4 text-center border-t mt-10 border-slate-200">
               Copyright 2025 © <a href="/">Resume - Build</a> All Rights Reserved.
            </p>
         </footer>
      </>
   )
}

export default Footer
