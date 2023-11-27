import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";


const Navbar = () => {
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

  return (
    <>
      <nav className=" border-gray-200 py-2.5 bg-sky-400 xl:h-20 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto pt-2 ">
            <a href="#" className="flex items-center my-auto">
                <img src={require("../assests/logo-png-removebg-preview.png")} className="mr-3 sm:h-9 xl:h-10 w-40" alt="Landwind Logo"/>
                
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
                 <p>{isAuthenticated &&  <img src={user.picture} alt="" className="h-10 xl:block hidden rounded-full mr-2 mx-auto" /> }</p>
                </div>
                {/* --------------------condition to show login and logout button------------------------ */}
                {
                    isAuthenticated ? 
    
                    <button type="button" className="bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> :
    
                    <button type="button" className=" bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto" onClick={() => loginWithRedirect()}>Log In</button>
                }
                
                
                
            </div>
            <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
                <li>{isAuthenticated &&  <img src={user.picture} alt="" className="h-10 xl:hidden rounded-full my-4 mx-auto block" /> }</li>
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
                    <li >
                        <Link to="/testimonials"  id="title4"
                            className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 xl:text-xl text-center w-full text-lg pt-4 " >Testimonials</Link>
                    </li>
                    <div>
                    
                    </div>
                </ul>
            </div>
            
        </div>
        <ScrollAnimation/>
    </nav>
    
    </>
  )
}

export default Navbar
