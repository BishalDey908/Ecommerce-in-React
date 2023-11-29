
import React from "react";
import video from "../assests/galaxy.mp4"
import ScrollAnimation from "./ScrollAnimation";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Typed from 'typed.js';


const LandingPage = () => {
    const el = React.useRef(null);
  const [close,setClose]=useState(1)
    //  const navigate=useNavigate()
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated,user  } = useAuth0();

    function openClose(){
      if(close===0){
      document.querySelector("#mobile-menu-2").style.display="none"
      setClose(close+1)
      }
      else if(close===1){
        document.querySelector("#mobile-menu-2").style.display="block"
      setClose(0)
      }
   }
   let use = useNavigate()
   function home(){
      use("/home")
   }

   function alert(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "WELCOME to Shopper's Delight",
        showConfirmButton: false,
        timer: 2500
      });
   }

   React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FAST DELEVERY', 'BEST QUALITY PRODUCT',"VALUE FOR MONEY","7 DAY RETURN"],
      typeSpeed: 80,
      showCursor: false,
      
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
   
  return (
    <div className="w-full h-full relative">
      <nav className=" border-gray-200 py-2.5 bg-blue-950 xl:h-20 bg-opacity-40">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto pt-2">
            <a href="#" className="flex items-center my-auto">
                <img src={require("../assests/logo-png-removebg-preview.png")} className="mr-3 sm:h-9 " alt="Landwind Logo"/>
                
            </a>
            <div className="flex items-center lg:order-2 gap-2">
                <div className="hidden mt-2 mr-4 sm:inline-block">
                    <span></span>
                </div>
                 
                
                <button data-collapse-toggle="mobile-menu-2" type="button"
                
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                    aria-controls="mobile-menu-2" aria-expanded="true" >
                    <span className="sr-only">Open main menu</span>
                    <svg onClick={openClose} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            ></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            ></path>
                    </svg>
                </button>
                <div className=" hidden xl:flex">
                <div className="xl:flex hidden ">
                <div>{isAuthenticated &&  <img className="h-10 rounded-full" src={user.picture} alt=""  />}</div>
                <p>{isAuthenticated &&  <p className=" pt-2 ml-2 text-white font-bold">{user.nickname}</p> }</p>
                </div>
                </div>
                {/* --------------------condition to show login and logout button------------------------ */}
                {
                    isAuthenticated ? 
    
                    <button id="logout" type="button" className="bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) } >Log Out</button> :
    
                    <button type="button" className=" bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto" onClick={() => loginWithRedirect()}>Log In</button>
                }
                
                
                {/* <img src={user.name} alt="" className="h-10 xl:hidden block rounded-full mx-auto my-4 " /> */}
            </div>
            <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>{isAuthenticated && <p className="xl:hidden block">{user.name}</p>}</li>
                    <li>
                        <Link to="/home"  id="title1"
                            className=" hover-underline-animation block py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent  lg:p-0  xl:text-xl text-center w-full text-lg "
                            aria-current="page" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about"  id="title2"
                            className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-700   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 xl:text-xl text-center w-full text-lg border-b" >About</Link>
                    </li>
                    <li>
                        <Link to="/contactUs"  id="title3"
                            className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 xl:text-xl text-center w-full text-lg pt-4" >Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/testimonials"  id="title4"
                            className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 xl:text-xl text-center w-full text-lg pt-4" >Testimonials</Link>
                    </li>
                   
                </ul>
            </div>
            
        </div>
        <ScrollAnimation/>
    </nav>
      <div >
        <video  className="w-full h-full " src={video} autoPlay muted loop/>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white mt-[-50px]">
        <img src={require("../assests/logo-png-removebg-preview.png")} alt="" className="w-80 mx-auto"  />
        <h1 className="focus-in-expand-fwd text-4xl text-white font-extrabold mt-4" >Shopping should be delightful as travalling</h1>
        <h1 className="text-flicker-in-glow text-3xl text-green-200 font-bold mt-4">With Shopper's Delight</h1>
        <div className="h-10 mt-4 text-blue-300 font-bold"><span className="text-2xl my-2" ref={el} /></div>
        <div className="my-10">
        
        <button  className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-2xl" onClick={()=>{
            home()
            alert()
        }}>Explore Now</button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage
