import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Footer(){
    return(
        <footer className="flex flex-col justify-center items-center gap-4  p-12">
        <div className="flex gap-6 ">
         <a href="https://www.linkedin.com/in/aparna-vv-1788b526b"target="_blank" className="text-3xl"><FaLinkedin /></a>
        <a href="https://github.com/aparnavv373"  target="_blank" className="text-3xl"><FaGithub /></a>
         <a href="aparnavv836@gmail.com" className="text-3xl"><SiGmail /></a>
          </div>
          <div>
                <p className="text-xl text-white">&copy; 2025 Aparna. All rights reserved.</p>
          </div>
          </footer>
         
       
        
    )

}
export default Footer