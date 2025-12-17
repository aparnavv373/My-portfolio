
import { useState } from "react"
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io"
function Navbar(){
    const[open,setOpen]=useState(false)
    return(
        
         <nav className="flex items-center justify-between bg-gradient-to-r from-[#3A6073] to-[#16222A] rounded-full shadow-lg px-6 py-4 text-white fixed right-4 left-4 z-40">
        <a href="#home" className="font-bold text-lg">Aparna</a>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8">

          <li><a href="#about" className="hover:text-[#00eaff] duration-200">About</a></li>
          <li><a href="#education" className="hover:text-[#00eaff] duration-200">Education</a></li>
          <li><a href="#skill" className="hover:text-[#00eaff] duration-200">Skills</a></li>
          <li><a href="#project" className="hover:text-[#00eaff] duration-200">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#00eaff] duration-200">Contact</a></li>
        </ul>


        {/*Mobile Icon*/}
        <div className="sm:hidden text-3xl cursor-pointer "
        onClick={()=>setOpen(!open)}>
            {open?<IoIosCloseCircleOutline />:<IoIosMenu />}
             
        </div>
         {open && (
        <ul className="sm:hidden fixed right-4 left-4 top-20 bg-[#4f5c67] text-white rounded-xl p-4 flex flex-col gap-3 shadow-lg">
          <li><a href="#about" className="hover:text-[#00eaff] duration-200"onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#education" className="hover:text-[#00eaff] duration-200"onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#skill" className="hover:text-[#00eaff] duration-200"onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#project" className="hover:text-[#00eaff] duration-200"onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:text-[#00eaff] duration-200"onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
        
       

         </nav>
       
          

    )
}


export default Navbar