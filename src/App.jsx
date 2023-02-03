import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BsGithub, BsLinkedin,BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import Troi from '../public/Troi3D.png'
import Design from '../public/Free illustration-8.png'
import Collab from '../public/Free illustration-5.png'
import BackEnd from '../public/Free illustration-14.png'
import fig from '../public/FigmaProto.png'
import Api from '../public/Api.png'
import port1 from '../public/port1.png'
import TroiMac from '../public/TroiMac.png'


function App() {
  const [darkMode, setDarkMode]=useState(false);


  return (
    <div className={darkMode ? "dark": ""}>
      <head>
        <title>Tamani Phiri</title>
        <link rel="icon" href="/favicon.ico/"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"/>
      </head>

      {/*Main Section*/}

      <main className="px-10 md:px-20 lg:px-40 bg-white  dark:bg-slate-800">
        <section className="min-h-screen">

          {/*NavBar*/}

          <nav className="py-10 mb-4 flex justify-between">
            <a href="#" className="text-xl text-gray-200 hover:-translate-y-1 ">Tamani</a>
            <ul className="flex items-center">
              <li className="bg-red-600 text-white px-4 py-2 border-none rounded-xl ml-8 flex justify-center align-middle shadow-black shadow-md hover:scale-105">
                <MdEmail className=" justify-center align-middle flex text-lg mr-2 mt-0.5"/>
                <a href="mailto:tamanigabriel0@gmail.com" >Email</a>
              </li>
            </ul>
          </nav>

          {/*Header*/}

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium text-red-600 md:text-6xl">Tamani Phiri</h2>
            <h3 className=" text-2xl py-2 md:text-3xl text-gray-400">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-200 md:text-xl max-w-lg mx-auto">
              Developer providing services for programming and design content needs. Join me down below and let's get popping! 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <a href="https://github.com/TamaniPhiri" className="hover:scale-110"><BsGithub/></a>
            <a href="https://linkedin.com/in/tamani-phiri-389b16256/" className="hover:scale-110"><BsLinkedin/></a>
            <a href="tel:+26-097-391-557"><BsFillTelephoneOutboundFill className="hover:scale-110"/></a>
          </div>
          <div className="hover:scale-110 relative bg-gradient-to-b from-red-600 justify-center rounded-full w-80 h-80 mt-20 mb-10 mx-auto overflow-hidden shadow-2xl shadow-gray-900">
            <img src={Troi} alt="#" className=" object-cover "/>
          </div>
        </section>

        {/*Services*/}

        <section>
          <div>
            <h3 className="text-3xl py-1 text-gray-500">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-200">
              Since the beginning of my journey as a developer and designer, I've done little remote work for a small
              <a href="https://www.facebook.com/imuksAppSolutions/" className="text-red-600"> agency</a> consulted for and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-200">
              I offer from a wide range of services, including UI design and programming.
            </p>
          </div>


          <div className="lg:flex gap-10 flex-1">

            {/*Cards-1*/}
            <div className="text-center overflow-hidden shadow-gray-900 shadow-2xl justify-center p-10 my-10 rounded-md h-fit">
              <div className="flex justify-center">
              <img src={Design} alt="" className=" justify-center object-cover flex-1 rounded-xl shadow-gray-600 shadow-xl" width={500} height={500}/> 
              </div>        
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-400">Beatiful Designs</h3>
              <p className="py-2 text-gray-200">
                Creating elegant designs suited for your needs following core design theory.
              </p>
              <h4 className="text-red-600">
                Design tools
              </h4>
              <p className="py-1 text-gray-400">Figma</p>
              <p className="py-1 text-gray-400">Adobe XD</p>
            </div>

            {/*Cards-2*/}
            <div className="text-center overflow-hidden shadow-gray-900 shadow-2xl justify-center p-10 my-10 rounded-md h-fit">
              <div className="flex justify-center">
              <img src={Collab} alt="" className=" justify-center object-cover flex-1 rounded-xl shadow-gray-600 shadow-xl" width={400} height={400}/> 
              </div>        
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-400">Front-End</h3>
              <p className="py-2 text-gray-200">
                Creating elegant user interfaces suited for your needs following core design theory.
              </p>
              <h4 className="text-red-600">
                Front-End tools
              </h4>
              <p className="py-1 text-gray-400">React</p>
              <p className="py-1 text-gray-400">React Native</p>
              <p className="py-1 text-gray-400">Tailwind CSS</p>
            </div>

            {/*Cards-3*/}
            <div className="text-center overflow-hidden shadow-gray-900 shadow-2xl justify-center p-10 my-10 rounded-md h-fit">
              <div className="flex justify-center">
              <img src={BackEnd} alt="" className=" justify-center object-cover flex-1 rounded-xl shadow-gray-600 shadow-xl" width={100} height={100}/> 
              </div>        
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-400">Back-End / Database</h3>
              <p className="py-2 text-gray-200">
                Creating Servers, API's and Databases suited for your needs following core programming knowledge.
              </p>
              <h4 className="text-red-600">
                Back-End and Database tools
              </h4>
              <p className="py-1 text-gray-400">Node JS</p>
              <p className="py-1 text-gray-400">Express</p>
              <p className="py-1 text-gray-400">Mongo DB</p>
            </div>

          </div>
        </section>

        {/*Portfolio*/}
        <section>
          <div>
            <h3 className="text-3xl py-1 text-gray-400">Portfolio</h3>
          </div>
          <div>
            <p className="text-md py-2 leading-8 text-gray-200">
            As a junior developer, I have a passion for using technology to create innovative solutions to real-world problems. I have completed a few <a href="https://github.com/TamaniPhiri" className="text-red-600">projects</a> that demonstrate my proficiency in multiple technologies, including JavaScript, React, React Native and Figma. I am constantly learning and expanding my skill set, with a particular focus on developing clean, maintainable code. I believe in the power of collaboration and enjoy working in teams to find the best solution for a project. I am eager to continue growing my skills and making a positive impact in the tech industry.
            </p>
            <p className="text-md py-2 leading-8 text-gray-200 mb-10">
              I offer from a wide range of services, including UI design and programming.
            </p>
          </div>

          {/*Projects*/}
          <div className="flex flex-col gap-10 lg:flex-wrap lg:flex-row" layout="resposive">
            <a href="https://www.figma.com/file/sUCvlw8K1r3NNc3Jk6seIG/Untitled?node-id=0%3A1&t=2AVvQODebM8i79x5-0" className="basis-1/2 flex-1 mb-10">
              <h3 className="text-2xl py-1 text-gray-400 mb-2">Gym UI</h3>
              <img src={fig} alt="" className="rounded-lg object-cover" />
            </a>
            <a href="https://api.jsonbin.io/v3/b/63d8cb5bc0e7653a0569c4c6" className="basis-1/2 flex-1 mb-10">
              <h3 className="text-2xl py-1 text-gray-400 mb-2">Rest API</h3>
              <img src={Api} alt="" className="rounded-lg object-cover" />
            </a>
            <a href="http://tamanifolio.vercel.app" className="basis-1/2 flex-1 mb-10">
              <h3 className="text-2xl py-1 text-gray-400 mb-2">Next Portfolio</h3>
              <img src={port1} alt="" className="rounded-lg object-cover" />
            </a>
            <a href="https://troi-mac-web.vercel.app" className="basis-1/2 flex-1 mb-10">
              <h3 className="text-2xl py-1 text-gray-400 mb-2">Dummy Landing Page</h3>
              <img src={TroiMac} alt="" className="rounded-lg object-cover" />
            </a>
          </div>
        </section>
        <footer className="w-full flex justify-center items-center flex-row"> 
            <div className="my-20 flex-row flex items-center">
             <BsFillTelephoneOutboundFill className="mr-4 text-gray-400 text-2xl"/>
              <a href="tel:+26-097-391-557" className="text-xl text-gray-400"> +26-097-391-557</a>
            </div>
        </footer>
      </main>
    </div>
  )
}

export default App
