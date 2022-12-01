import React from "react";
import Layout from "../components/Layout";

contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function contact(props) {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="text-black text-center mt-10">
          <h3 className="text-6xl font-bold font-font-worksans">Contact Us</h3>
        </div>
        {/* info */}

        <div className="container px-5 py-10 mx-auto lg:flex ">
          <div className="p-2">
            <div className="col-md-6 my-3">
              <div className="px-4 py-4">
                <div className="col">
                  <div
                    className="flex flex-row"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>

                    {/* <h6 className="name" style={{marginLeft: '24px', fontWeight: 'bolder'}}>Phone</h6> */}
                    <p className="px-2">
                      <span>+65 9105 8451</span>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="col">
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    {/* <h6 className="name" style={{marginLeft: '24px', fontWeight: 'bolder'}}>Email</h6> */}
                    <p
                      className=""
                      //   style={{ marginLeft: "50px", paddingTop: "12px" }}
                    >
                      <span className="px-2">mchhabra13@gmail.com</span>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="col">
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    {/* <h6 className="name" style={{marginLeft: '24px', fontWeight: 'bolder'}}>Location</h6> */}
                    <p className="px-2">
                      DHABA 1376 Beauty World Center #04-64, Singapore 588177
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="col">
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {/* <h6 className="name" style={{marginLeft: '24px', fontWeight: 'bolder'}}>Open Hours</h6> */}
                    <p className="px-2">
                      <strong>Monday :</strong>&nbsp;05:00pm to 10:30pm
                      <br />
                      <strong>Tuesday to Friday :&nbsp;</strong>11:00am to
                      2:30pm , 05:00pm to 10:30pm
                      <br />
                      <strong>Saturday &amp; Sunday :&nbsp;</strong>11:am to
                      10:30pm
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 lg:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
            <div className=" mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border-2 border-gray-dim focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="message"
                className="leading-7 text-sm text-gray-dark font-normal font-font-dmsans"
              >
                Message
              </label>
              <input
                id="message"
                name="message"
                className="w-full bg-white rounded border-2 border-gray-dim focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
            {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
          </div>
        </div>
        <div className="inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.754781351458!2d76.20944471516209!3d10.519970292495849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7efd9b304e705%3A0xea1eeb42ba5f1a7a!2sATEES%20Industrial%20Training%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1669195532147!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default contact;
