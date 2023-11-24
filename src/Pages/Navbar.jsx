import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [close,setClose]=useState(1)
     const navigate=useNavigate()
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated,user  } = useAuth0();
            
    let li1 = document.querySelector("#title1")
    let li2 = document.querySelector("#title2")
        let li3 = document.querySelector("#title3")
        let li4 = document.querySelector("#title4")
    
    function title2(){
        
        li2.setAttribute("id", "button2")
        li1.removeAttribute("id")
        li3.removeAttribute("id")
        li4.removeAttribute("id")
    }
    function title3(){
        
        li3.setAttribute("id", "button2")
        li1.removeAttribute("id")
        li2.removeAttribute("id")
        li4.removeAttribute("id")
    }
    function title4(){
        
        li4.setAttribute("id", "button2")
        li1.removeAttribute("id")
        li2.removeAttribute("id")
        li3.removeAttribute("id")
        navigate("/testimonials")
    }
    
    function home(){
     li1.setAttribute("id", "button2")
        li2.removeAttribute("id")
        li3.removeAttribute("id")
        li4.removeAttribute("id")
        navigate("/")
    }
    

    
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
      <nav className=" border-gray-200 py-2.5 bg-indigo-500 xl:h-16 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center my-auto">
                <img src={require("../assests/logo-png-removebg-preview.png")} className="mr-3 sm:h-9 w-40" alt="Landwind Logo"/>
                
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
                {/* --------------------condition to show login and logout button------------------------ */}
                {
                    isAuthenticated ? 
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> :
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto" onClick={() => loginWithRedirect()}>Log In</button>
                }
                
                
                
            </div>
            <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>{isAuthenticated && <p className=' text-center xl:my-0 my-10 text-purple-950 font-bold xl:hidden block'>Welcome {user.name}</p>}</li>
                    <li>
                        <a href="#" id="title1"
                            className=" hover-underline-animation block py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent  lg:p-0  xl:text-xl text-center w-full text-lg "
                            aria-current="page" onClick={home} >Home</a>
                    </li>
                    <li>
                        <a href="#" id="title2"
                            className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-700   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 xl:text-xl text-center w-full text-lg border-b" onClick={title2}>About</a>
                    </li>
                    <li>
                        <a href="#" id="title3"
                            className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 xl:text-xl text-center w-full text-lg pt-4" onClick={title3}>Contact Us</a>
                    </li>
                    <li>
                        <button  id="title4"
                            className="hover-underline-animation block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 xl:text-xl text-center w-full text-lg pt-4" onClick={title4}>Testimonials</button>
                    </li>
                    <li>{isAuthenticated && <p className=' text-center xl:my-0 my-10 text-purple-950 font-bold xl:block hidden'><span className='text-lg'>WELCOME</span> {user.name}</p>}</li>
                </ul>
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar
