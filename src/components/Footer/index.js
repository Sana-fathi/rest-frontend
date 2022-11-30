// import React from "react";

// function index(props) {
//   return <div className="bg-black h-">

//   </div>;
// }

// export default index;
import { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
// import { Config } from '@common';
// import { Fetcher, HttpRequest } from '@services';
// import FormData from 'form-data';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Footer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { mail } = form;
    const newErrors = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // mail errors
    if (!mail || mail === "") newErrors.mail = "Field cannot be blank!";
    else if (!mail.match(mailformat)) newErrors.mail = "Invalid mail format!";

    return newErrors;
  };

  const newsletterSubmission = async (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      errors.state = "invalid-feedback";
      setErrors(newErrors);
      return;
    } else {
      errors.state === "invalid-feedback" ? "valid-feedback" : undefined;
      setErrors(newErrors);

      // No errors! Put any logic here for the form submission!
      // alert('Thank you for your feedback!')

      const formData = new FormData();
      formData.append("email", form.mail);

      const result = await HttpRequest(
        // Config.Url + "/web-newsletter-subscription",
        "POST",
        formData,
        {}
      );
      // console.log("SUBSCRIPTION_RESPONSE", result); // TODO Remove on final build

      if (result.error) {
        toast.error(result.data, {
          position: "top-right",
          autoClose: 4000,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return;
      } else {
        toast.success(result.data, {
          position: "top-right",
          autoClose: 4000,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <div className="bg-black">
      {/* <footer style={{background:"#333",width: "auto",
height:"auto"}}>
        <AuthModal /> */}
      <div className="py-2 pt-8 px-10 lg:flex flex-row justify-between">
        <div className="flex flex-col text-center lg:text-left lg:px-5">
          <p className="text-white text-2xl font-font-worksans font-extrabold lg:w-72">
            ¿Te apasiona ayudar a tu comunidad?
          </p>
          <h1 className="text-white text-5xl font-font-worksans font-extrabold">
            Fonditas
          </h1>
          <div className="px-5">
            <div
              className="flex flex-row justify-center lg:justify-start mt-3"
            >
              <Link href={"/"}>
                <div className="bg-tbRed p-2 rounded-full">
                  <RiFacebookFill size={20} fill="white" />
                </div>
              </Link>
              <Link href={"/"}>
                <div
                  className="bg-tbRed p-2 mx-2 rounded-full"
                  
                >
                  <IoLogoTwitter size={20} fill="white" />
                </div>
              </Link>
              <Link href={"/"}>
                <div
                  className="bg-tbRed p-2 rounded-full">
                  <FaInstagram size={20} fill="white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex  flex-row justify-center mt-5 xl:mx-20">
          <div className="px-4 text-white mx-10 font-font-dmsans">
          <div className="">Menu</div>
          <ul className="list">
            <Link href={"/"}>
              <li>Nosotros</li>
            </Link>
            <Link href={"/"}>
              <li>Nosotros</li>
            </Link>
          </ul>
        </div>
        <div className="text-white px-5 mx-10 font-font-dmsans">
          <ul className="list">
            <Link href={"/"}>
              <li>Nosotros</li>
            </Link>
            <Link href={"/"}>
              <li>Nosotros</li>
            </Link>
          </ul>
        </div></div>
       
        <div className="flex justify-around mt-3">
          <form>
            <h3 className="text-white font-font-dmsans">Subscribe</h3>
            <div className="">
              <input
                onChange={(e) => setField("mail", e.target.value)}
                type="email"
                inputMode="email"
                name="mail"
                id="newsletter"
                placeholder="Email"
                className="relative flex flex-row md:justify-center md:items-center w-72 h-9 px-2 rounded"
                required
              />
              <FiSend
                onClick={(e) => newsletterSubmission(e)}
                stroke="#777f86d4"
                size={30}
                type="submit"
                className="absolute ml-60 mt-[-30px]"
              />
            </div>
            <div className={errors.state}>{errors.mail}</div>
          </form>
        </div>
      </div>

      <div style={{}}>
        <div
          className=""
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTopStyle: "solid",
            borderTopColor: "#9B9B9B",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          <div>
            <small style={{ color: "#eeeeee" }}>
              Copyright @ 2022 DHABA 1376 PTE LTD |
              <span style={{ color: "GrayText" }}>
                {" "}
                Crafted By{" "}
                <a
                  href="https://atees.sg"
                  style={{ textDecoration: "none", color: "GrayText" }}
                >
                  {" "}
                  ATEES
                </a>
              </span>
            </small>
          </div>
        </div>
      </div>

      {/* </footer> */}
      <ToastContainer />
    </div>
  );
};

export default Footer;
