import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import backgroundImage from "../src/assets/ravi_processed.jpg";
import htmlPng from "../src/assets/html.png";
import css from "../src/assets/css.png";
import bootstrap from "../src/assets/bootstrap.png";
import tailwind from "../src/assets/tailwindCss.png";
import javascript from "../src/assets/javascript.png";
import react from "../src/assets/react.png";
import node from "../src/assets/nodeJs.png";
import express from "../src/assets/express.png";
import mongodb from "../src/assets/mongodb.png";
import sql from "../src/assets/sql.png";
import side2 from "../src/assets/side3.jpg";
import cyber from "./assets/Cy1.png"
import Ecomerce from "./assets/Ecomerce1.png"
import Todo from "./assets/todo.png"
import EcomerceOnePage from "./assets/EcomerceOnePage.png"
import OnlineSchool from "./assets/OnlineSchool.png"
import TravelWorld from "./assets/TravelWorld.png"
import ZayShop from "./assets/ZayShop.png"


import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";
import { FaMapSigns } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaGlobeAsia } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Project", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to determine the active link based on scroll position
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY + 100; // Offset to trigger the change a little earlier

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    // Add scroll event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* ******************************************************************* */}
      <Disclosure as="nav" className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative  flex h-16 items-center justify-between">
            <div className="absolute     inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}

              <DisclosureButton
                onClick={() => setMenuOpen(!menuOpen)}
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {menuOpen ? (
                  <XMarkIcon aria-hidden="true" className="size-6" />
                ) : (
                  <Bars3Icon aria-hidden="true" className="size-6" />
                )}
              </DisclosureButton>
            </div>
            <div className="flex flex-1   items-center justify-start sm:items-stretch sm:justify-between">
              <div className="">
                <h2 className="text-white text-3xl font-bold cursor-pointer">
                  Ravi Lakshakar
                </h2>
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4">
                  <ul>
                    {navigation.map((item) => (
                      <li className="cursor-pointer">
                        <Link
                          to={item.name}
                          smooth={true}
                          duration={500}
                          className={activeLink === item.name ? "active" : ""}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <ul className=" flex flex-col justify-between">
              {navigation.map((item) => (
                <li className="text-white py-2">
                  <Link
                    to={item.name}
                    smooth={true}
                    duration={500}
                    className={activeLink === item.name ? "active" : ""}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <section
        id="Home"
        className={`h-screen mt-9 w-full  bg-black bg-[50%_center] md:bg-[90%_center] bg-contain bg-no-repeat flex items-center justify-center md:justify-start px-5 md:px-10 lg:px-20 transition-transform duration-300 ${
          menuOpen ? "translate-y-40" : "translate-y-0"
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-start text-white pl-10">
          <h1 className="text-yellow-300 font-semibold text-2xl mb-5">
            Hello !
          </h1>
          <h1 className="text-6xl font-bold">
            I'm <span className="text-yellow-300">Ravi</span>
          </h1>
          <h1 className="text-6xl my-1 font-bold text-yellow-300">Lakshakar</h1>
          <h1 className="text-2xl mt-3 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Frontend Engineer",
                  "React Developer",
                  "MernStack Developer",
                  "Node.js Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </section>

      <section id="About" className=" bg-black my-8 ">
        <div className="grid md:grid-cols-5">
          <div className=" py-3 pl-2 col-span-5 md:col-span-2 ">
            <div className="grid grid-cols-2 my-5">
              <div className=" flex justify-end pr-4 md:pr-0 md:justify-center ">
                <img
                  className="rounded-full w-[180px] h-[180px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] border-3 border-white"
                  src={side2}
                  alt=""
                />
              </div>
              <div className="text-white flex justify-center flex-col  ">
                <p
                  className="font-semibold"
                  style={{ color: "rgb(153, 153, 153)" }}
                >
                  Name:Ravi Lakshakar
                </p>
                <p
                  className="my-2 font-semibold"
                  style={{ color: "rgb(153, 153, 153)" }}
                >
                  job Role : Mern Stack Developer
                </p>
                <p
                  className="font-semibold"
                  style={{ color: "rgb(153, 153, 153)" }}
                >
                  Experience: fresher
                </p>
                <p
                  className="my-2 font-semibold"
                  style={{ color: "rgb(153, 153, 153)" }}
                >
                  Address : jaipur , Rajasthan
                </p>
              </div>
            </div>
            <div className="" style={{ color: "rgb(153, 153, 153)" }}>
              <h2 className="font-semibold text-2xl pl-16 sm:pl-40  md:pl-13 my-3">
                Skills
              </h2>
              <div className="grid grid-cols-3 gap-2 mx-16 md:mx-0">
                <div className="flex justify-end  items-center ">
                  <img className="w-[70px]" src={htmlPng} alt="" />
                </div>
                <div className="flex justify-center  items-center ">
                  <img className="w-[70px]" src={css} alt="" />
                </div>
                <div className="flex justify-start  items-center ">
                  <img className="w-[70px]" src={bootstrap} alt="" />
                </div>
                <div className="flex justify-end items-center ">
                  <img className="w-[70px]" src={tailwind} alt="" />
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[70px]" src={javascript} alt="" />
                </div>
                <div className="flex justify-start items-center ">
                  <img className="w-[70px]" src={react} alt="" />
                </div>
                <div className="flex justify-end items-center ">
                  <img className="w-[70px]" src={node} alt="" />
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[70px]" src={express} alt="" />
                </div>
                <div className="flex justify-start items-center ">
                  <img className="w-[70px]" src={mongodb} alt="" />
                </div>
                <div className="flex justify-end items-center">
                  <img className="w-[70px]" src={sql} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 py-5 pl-5 pr-8">
            <h2 className="text-white text-5xl font-bold">About Me</h2>
            <p style={{ color: "rgb(153, 153, 153)" }} className="my-5">
              I am a passionate Web Developer specializing in building
              responsive, user-friendly, and high-performance websites. With
              experience in modern web technologies like React.js, Node.js,
              Express.js, and MongoDB, I create dynamic web applications that
              enhance user experience.I have a strong foundation in frontend and
              backend development, ensuring seamless integration between design
              and functionality. I enjoy solving complex problems, optimizing
              web performance, and implementing best practices in SEO, security,
              and deployment.
            </p>
            <h3 className="text-white  font-semibold mt-10">
              <span className=" inline-block  w-[150px] ">Profile:</span>
              <span style={{ color: "rgb(153, 153, 153)" }}>Web Developer</span>
            </h3>
            <h3 className="text-white font-semibold my-3">
              <span className=" inline-block  w-[150px] ">Domain:</span>
              <span style={{ color: "rgb(153, 153, 153)" }}>
                Specializing in E-commerce and Corporate Websites
              </span>
            </h3>
            <h3 className="text-white font-semibold">
              <span className=" inline-block  w-[150px] ">Education:</span>
              <span style={{ color: "rgb(153, 153, 153)" }}>
                Bachelor of Science
              </span>
            </h3>
            <h3 className="text-white font-semibold my-3">
              <span className=" inline-block  w-[150px] ">Language:</span>
              <span style={{ color: "rgb(153, 153, 153)" }}>
                English, Hindi
              </span>
            </h3>
            <h3 className="text-white font-semibold">
              <span className=" inline-block  w-[150px] ">Other Skills:</span>
              <span style={{ color: "rgb(153, 153, 153)" }}>
                Version Control (Git, GitHub), RESTful API , Problem-Solving &
                Debugging
              </span>
            </h3>
          </div>
        </div>
      </section>

      <section id="Resume" className=" text-white mt-28">
        <div className="">
          <h2 className="text-5xl font-extrabold my-5 text-center">Resume</h2>
          <p
            style={{ color: "rgb(153, 153, 153)" }}
            className="leading-7 md:px-40 text-center"
          >
            Web Developer skilled in React.js, Node.js, and MongoDB, building
            responsive and high-performance websites for E-commerce and
            corporate platforms. Passionate about creating seamless user
            experiences and optimizing web performance.
          </p>
        </div>
        <div className="mt-10 ">
          <h2 className="border-b-2 text-5xl border-amber-300 mx-14 pb-7 font-extrabold text-center">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-7 mx-10 md:mx-20">
            <div className=" p-7 bg-gray-900">
              <h2 className="text-3xl font-bold text-amber-300">
                2024-Present
              </h2>
              <h3 className="text-3xl py-2.5">MernStack Developer (Trainee)</h3>
              <h3
                className="font-semibold"
                style={{ color: "rgb(153, 153, 153)", fontSize: "20px" }}
              >
                We Rns it solution
              </h3>
              <p
                className="leading-7 mt-4"
                style={{ color: "rgb(153, 153, 153)" }}
              >
                We Rns IT Solution is a tech-driven company specializing in web
                development. As a MERN Stack Developer Intern, I design and
                build dynamic web applications for optimal performance and user
                experience.
              </p>

              <ul
                className="list-disc pl-5 "
                style={{ color: "rgb(153, 153, 153)" }}
              >
                <li className="pr-5">
                  Developed and maintained full-stack web applications using
                  MongoDB, Express.js, React.js, and Node.js (MERN Stack).
                </li>
                <li>
                  Designed and implemented RESTful APIs to improve data
                  communication between frontend and backend..
                </li>
                <li>
                  Optimized database queries and API performance, reducing
                  response time and enhancing scalability.
                </li>
                <li>
                  Collaborated with a team to develop E-commerce and corporate
                  websites, integrating authentication, payment gateways, and
                  admin dashboards.
                </li>
              </ul>
            </div>
            <div className=" p-7 bg-gray-900">
              <h2 className="text-3xl font-bold text-amber-300">
                June 2024 (1 Month)
              </h2>
              <h3 className="text-3xl py-2.5">Web Development Internship </h3>
              <h3
                className="font-semibold"
                style={{ color: "rgb(153, 153, 153)", fontSize: "20px" }}
              >
                Octanet Services Pvt. Ltd.
              </h3>
              {/* <p className='leading-7 mt-4' style={{color: "rgb(153, 153, 153)"}}>We Rns IT Solution is a tech-driven company specializing in web development. As a MERN Stack Developer Intern, I design and build dynamic web applications for optimal performance and user experience.</p> */}

              <ul
                className="list-disc pl-5 my-3"
                style={{ color: "rgb(153, 153, 153)" }}
              >
                <li className="pr-5">
                  Developed a basic front-end project, enhancing skills in HTML,
                  CSS, and JavaScript.
                </li>
                <li>
                  Collaborated with team members to understand project
                  requirements and implement design specifications.
                </li>
                <li>
                  Gained practical experience in responsive design and user
                  interface development.
                </li>
                <li>
                  {" "}
                  <span
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1qKSBGUE5veX0BhJ8lxW_9-imh8BCx5df/view",
                        "_blank"
                      )
                    }
                    className="text-blue-500 cursor-pointer"
                  >
                    Certification
                  </span>{" "}
                  Received a certificate of completion for the internship.
                </li>
              </ul>
            </div>
            <div className=" p-7 bg-gray-900">
              <h2 className="text-3xl font-bold text-amber-300">
                June 2023- June 2024
              </h2>
              <h3 className="text-3xl py-2.5">Software Development Course </h3>
              <h3
                className="font-semibold"
                style={{ color: "rgb(153, 153, 153)", fontSize: "20px" }}
              >
                Tips-G (Training, Internship, Placement, Salary & Graduation)
              </h3>
              {/* <p className='leading-7 mt-4' style={{color: "rgb(153, 153, 153)"}}>We Rns IT Solution is a technology-focused company specializing in web and software development. As a MERN Stack Developer Trainee, I contributed to building and optimizing web applications while enhancing performance and user experience.</p> */}

              <ul
                className="list-disc pl-5 my-3 "
                style={{ color: "rgb(153, 153, 153)" }}
              >
                <li className="pr-5">
                  Learned and practiced front-end development using HTML, CSS,
                  Bootstrap, and Tailwind CSS.
                </li>
                <li>
                  Built interactive web applications using JavaScript and
                  React.js.
                </li>
                <li>Developed back-end APIs with Node.js and Express.js.</li>
                <li>
                  Worked with databases like MongoDB and SQL for data storage
                  and management.
                </li>
                <li>
                  Gained programming fundamentals and problem-solving skills in
                  C++ and Python.
                </li>
                <li>
                  Understood full-stack development concepts and created
                  complete web applications.
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>

        <div className="mt-20 ">
          <h2 className="border-b-2 text-5xl font-extrabold border-amber-300 mx-14 pb-7 text-center">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-7 mx-10 md:mx-20">
            <div className=" p-7 bg-gray-900">
              <h2 className="text-3xl font-bold text-amber-300">2023-2024</h2>
              <h3 className="text-3xl py-2.5">Software Development Course</h3>
              <h3
                className="font-semibold text-[1.2rem]"
                style={{ color: "rgb(153, 153, 153)" }}
              >
                TIPS-G ( Training , Internship,Placement,Salary,and Graduation.
                )
              </h3>
              {/* <p className='leading-7 mt-4' style={{color: "rgb(153, 153, 153)"}}>Grade: First class distinction.</p> */}
            </div>
            <div className=" p-7 bg-gray-900">
              <h2 className="text-3xl font-bold text-amber-300">2020-2023</h2>
              <h3 className="text-3xl py-2.5">Bachelor of Science</h3>
              <h3
                className="font-semibold"
                style={{ color: "rgb(153, 153, 153)", fontSize: "20px" }}
              >
                Rajasthan University
              </h3>
              <p
                className="leading-7 mt-4"
                style={{ color: "rgb(153, 153, 153)" }}
              >
                Grade: First class distinction.
              </p>
            </div>

            <div></div>
          </div>
        </div>

        <div className=" flex justify-center items-center w-full mt-20">
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1zJjibWGNL0CHwQQKibLkSmkvw70J2055QFb_igPbOTw/edit?usp=sharing",
                "_blank"
              )
            }
            className="inline-block  bg-amber-500 hover:bg-amber-600  text-black cursor-pointer font-bold py-5 px-10 rounded-full"
          >
            Download Resume
          </button>
        </div>
      </section>

      <section id="Project" className="text-white my-28">
        <div className="">
          <h2 className="text-5xl font-extrabold my-5 text-center">Project</h2>
          <p
            style={{ color: "rgb(153, 153, 153)" }}
            className="leading-7 my-10 md:px-40 text-center"
          >
            Below are sample Web Development projects showcasing expertise in
            React.js, Node.js, MongoDB, and modern frontend and backend
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 my-32 ">
          {/* Project Cards */}
          <div className="max-w-sm rounded overflow-visible shadow-lg relative">
            <div className="relative">
              <img
                className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={cyber}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 cursor-pointer hover:text-amber-300">
                CyberSecurity Website
              </div>
              <p className="text-gray-700 text-base">
              This is FrontEnd Project Create By React.js.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <span onClick={() =>
              window.open(
                "https://cyber-security-one-liart.vercel.app/",
                "_blank"
              )
            } className="inline-block bg-amber-300 cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Live Preview
              </span>
              <span onClick={() =>
              window.open(
                "https://github.com/RAVIWITHGIT/React_Project/tree/master/cyber-security",
                "_blank"
              )
            } className="inline-block cursor-pointer bg-amber-300 rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Source Code
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-visible shadow-lg relative">
            <div className="relative">
              <img
                className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={Todo}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 cursor-pointer hover:text-amber-300">
                Todo Web Application
              </div>
              <p className="text-gray-700 text-base">
                This is Todo Desktop Web Application Which consists of frontend and backend.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span onClick={() =>
              window.open(
                "https://mytodo-lovat.vercel.app/",
                "_blank"
              )
            } className="inline-block bg-amber-300 cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Live Preview
              </span>
              <span onClick={()=>
                window.open(
                  "https://github.com/RAVIWITHGIT/Todo_FrontEnd",
                  "_blank"
                )
              } className="inline-block cursor-pointer bg-amber-300 rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Source Code
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-visible shadow-lg relative">
            <div className="relative">
              <img
                className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={Ecomerce}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 cursor-pointer hover:text-amber-300">
              Ecommerce Web Application 
              </div>
              <p className="text-gray-700 text-base">
              This is Ecommerce Web Application Which consists of frontend and backend.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span onClick={() =>
              window.open(
                "https://e-commerce-xi-lovat-44.vercel.app/",
                "_blank"
              )
            } className="inline-block bg-amber-300 cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Live Preview
              </span>
              <span onClick={()=>
                window.open(
                  "https://github.com/RAVIWITHGIT/Ecommerce_Project",
                  "_blank"
                )
              } className="inline-block cursor-pointer bg-amber-300 rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Source Code
              </span>
            </div>
          </div>

          {/* Duplicate or Additional Project Cards */}
          <div className="max-w-sm rounded overflow-visible shadow-lg relative">
            <div className="relative">
              <img
                className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={EcomerceOnePage}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 cursor-pointer hover:text-amber-300">
                Single E-commerce Static Page 
              </div>
              <p className="text-gray-700 text-base">
                This is Single Page. create by Html ,Css ,Javascript
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span onClick={() =>
              window.open(
                "https://e-commerceonepage.vercel.app/",
                "_blank"
              )
            } className="inline-block bg-amber-300 cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Live Preview
              </span>
              <span onClick={() =>
              window.open(
                "https://github.com/RAVIWITHGIT/Respnsive_Frontend/tree/master/E-commerce%20_OnePageWebsite",
                "_blank"
              )
            }  className="inline-block cursor-pointer bg-amber-300 rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Source Code
              </span>
            </div>
          </div>

          {/* If there is an odd number of cards, this one will be centered */}
          <div className="max-w-sm rounded overflow-visible shadow-lg relative md:col-span-2 lg:col-span-1 mx-auto">
            <div className="relative">
              <img
                className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={OnlineSchool}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 cursor-pointer hover:text-amber-300">
                Single Page School Static Website
              </div>
              <p className="text-gray-700 text-base">
                This is Single Page static Website Create by Html, Css, BootStrap
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span onClick={() =>
              window.open(
                "https://respnsive-frontend.vercel.app/",
                "_blank"
              )
            } className="inline-block bg-amber-300 cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Live Preview
              </span>
              <span onClick={() =>
              window.open(
                "https://github.com/RAVIWITHGIT/Respnsive_Frontend/tree/master/Online_school",
                "_blank"
              )
            } className="inline-block cursor-pointer bg-amber-300 rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Source Code
              </span>
            </div>
          </div>
          {/* If there is an odd number of cards, this one will be centered */}
          <div className="max-w-sm rounded overflow-visible shadow-lg relative md:col-span-2 lg:col-span-1 mx-auto">
            <div className="relative">
              <img
                className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={TravelWorld}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 cursor-pointer hover:text-amber-300">
              Single Page Travel Static Website
              </div>
              <p className="text-gray-700 text-base">
              This is Single Page static Travel Website Create by Html, Css, BootStrap.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span onClick={() =>
              window.open(
                "https://responsive-travel-world.vercel.app/",
                "_blank"
              )
            } className="inline-block bg-amber-300 cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Live Preview
              </span>
              <span onClick={() =>
              window.open(
                "https://github.com/RAVIWITHGIT/ResponsiveTravelWorld",
                "_blank"
              )
            } className="inline-block cursor-pointer bg-amber-300 rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Source Code
              </span>
            </div>
          </div>
          {/* If there is an odd number of cards, this one will be centered */}
          <div className="max-w-sm rounded overflow-visible shadow-lg relative md:col-span-2 lg:col-span-1 mx-auto">
            <div className="relative">
              <img
                className="w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                src={ZayShop}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 cursor-pointer hover:text-amber-300">
              Multi Page E-Commerce Static Website
              </div>
              <p className="text-gray-700 text-base">
              This is Multi Page static Website Create by Html, Css, BootStrap.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span onClick={() =>
              window.open(
                "https://responsive-zay-shop.vercel.app/",
                "_blank"
              )
            } className="inline-block bg-amber-300 cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Live Preview
              </span>
              <span onClick={() =>
              window.open(
                "https://github.com/RAVIWITHGIT/Responsive_ZayShop",
                "_blank"
              )
            } className="inline-block cursor-pointer bg-amber-300 rounded-full px-3 py-2 text-sm font-semibold text-black mr-2 mb-2">
                Source Code
              </span>
            </div>
          </div>
        </div>

        <div className="h-screen flex flex-col justify-center items-center bg-[url('https://rishabhnmishra.github.io/images/bg_1.jpg')] bg-cover bg-center">
          <h1 className="text-white text-5xl font-bold text-center pt-20">
            More projects on <span className="text-amber-300"> Github</span>
          </h1>
          <p className="text-center my-8 text-2xl">
            I love to build dynamic web applications and craft seamless user
            experiences while optimizing <br /> performance and functionality
          </p>
          <div className=" flex justify-center items-center w-full ">
            <button
              onClick={() => {
                window.open("https://github.com/ProjectWithRavi");
              }}
              className="inline-block   bg-amber-500 hover:bg-amber-600  text-black cursor-pointer font-bold py-4 px-12 rounded-full"
            >
              GITHUB
            </button>
          </div>
        </div>
      </section>

      <section id="Contact">
        <div className="">
          <h2 className="text-5xl font-extrabold my-5 text-center text-white">
            Contact Me
          </h2>
          <p
            style={{ color: "rgb(153, 153, 153)" }}
            className="leading-7 text-[20px] md:px-40 text-center"
          >
            Below are the details to reach out to me!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 text-white gap-10 px-20 my-20">
          <div className="  flex flex-col justify-center items-center">
            <div className=" bg-gray-900 w-24 h-24 flex justify-center items-center rounded-full">
              <FaMapSigns className="text-amber-300 text-4xl  " />
            </div>
            <h3 className="my-3 font-bold">Address</h3>
            <p className="" style={{ color: "rgb(153, 153, 153)" }}>
              Rajasthan, India
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <div className=" bg-gray-900 w-24 h-24 flex justify-center items-center rounded-full">
              <IoMdCall className="text-amber-300 text-4xl  " />
            </div>
            <h3 className="my-3 font-bold">Contact Number</h3>
            <p className="" style={{ color: "rgb(153, 153, 153)" }}>
              +91 8890831283
            </p>
          </div>
          <div className="  flex flex-col justify-center items-center">
            <div className=" bg-gray-900 w-24 h-24 flex justify-center items-center rounded-full">
              <SiMinutemailer className="text-amber-300 text-4xl  " />
            </div>
            <h3 className="my-3 font-bold">Email Address</h3>
            <p
              onClick={() =>
                (window.location.href = "mailto:ravilak219@gmail.com")
              }
              className="text-blue-500 cursor-pointer"
            >
              ravilak219@gmail.com
            </p>
          </div>
          <div className="  flex flex-col justify-center items-center">
            <div className=" bg-gray-900 w-24 h-24 flex justify-center items-center rounded-full">
              <FaGlobeAsia className="text-amber-300 text-4xl  " />
            </div>
            <h3 className="my-3 font-bold">Download Resume</h3>
            <p
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1zJjibWGNL0CHwQQKibLkSmkvw70J2055QFb_igPbOTw/edit?usp=sharing",
                  "_blank"
                )
              }
              className="cursor-pointer text-blue-500"
            >
              Resume Link
            </p>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center w-full text-white ">
          <p className="text-3xl mx-2 my-2">Have a Question?</p>
          <button
            onClick={() => {
              window.open("https://forms.gle/GifUS2RhM9MsJvVZ9");
            }}
            className="inline-block   bg-amber-500 hover:bg-amber-600  text-black cursor-pointer font-bold py-3 px-11 rounded-full"
          >
            CLICK HERE
          </button>
        </div>

        <div className=" flex justify-center items-center w-full my-12 text-white ">
          <p
            className=" mx-2 text-[20px]"
            style={{ color: "rgb(153, 153, 153)" }}
          >
            Find me on
          </p>
          <div
            onClick={() => {
              window.open("https://www.linkedin.com/in/ravi-lakshakar/");
            }}
            className="w-14 h-14 cursor-pointer bg-gray-900 flex justify-center items-center rounded-full"
          >
            <FaLinkedinIn className="text-amber-300 text-[23px]" />
          </div>
          <div
            title="Coming soon"
            className="w-14 h-14 cursor-pointer bg-gray-900 mx-2 flex justify-center items-center rounded-full"
          >
            <TfiYoutube className="text-amber-300 text-[25px]" />
          </div>
          <div
            title="Coming soon"
            className="w-14 h-14 cursor-pointer bg-gray-900 flex justify-center items-center rounded-full"
          >
            <FaXTwitter className="text-amber-300 text-[25px]" />
          </div>
        </div>

        <div>
          <p
            className="text-center text-2xl my-20"
            style={{ color: "rgb(153, 153, 153)" }}
          >
            Copyright ©2025 All rights reserved{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;

// https://rishabhnmishra.github.io/
