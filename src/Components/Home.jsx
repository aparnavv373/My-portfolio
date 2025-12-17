import Profile from'../assets/PHOTO.jpeg';
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Home(){
return(
  <section id="home"className='flex sm:flex-row flex-col-reverse items-center justify-evenly px-6 min-h-screen scroll-mt-20'>
    <div className='flex flex-col gap-6 items-center sm:items-start text-center sm:text-left'>
      <h1 className='text-4xl text-white  font-bold'>Hello I'm <span className='text-5xl sm:text-6xl font-extrabold text-[#00eaff] '>Aparna</span></h1>
       <h2 className='text-3xl font-semibold  text-white'>Frontend Developer(Fresher)</h2>
       <p className='text-xl text-white max-w-md'>I create clean, responsive and beautiful user interfaces.</p>
       <div className='flex  items-center gap-6 '>
        <a 
  href="https://drive.google.com/file/d/1wn1KNvG28PUy55lXZYyo061wxbhN1-3e/view?usp=drivesdk" 
  target="_blank" 
  className="bg-[#3A6073] hover:bg-[#16222A] text-white px-4 py-2 rounded-xl"  
>
  View Resume
</a>
<div className=' bg-gradient-to-r from-[#16222A] to-[#3A6073] rounded-full p-2'>
     <a href="https://www.linkedin.com/in/aparna-vv-1788b526b" target="_blank" className="text-3xl   rounded-full"><FaLinkedin /></a>
         </div>
     <div className=' bg-gradient-to-r from-[#16222A] to-[#3A6073] rounded-full p-2'>
      
 
        <a href="https://github.com/aparnavv373" target="_blank" className="text-3xl"><FaGithub /></a>

</div>

     
       </div>

    </div>
  <div className="aspect-square w-64 sm:w-72 md:w-80 p-2 bg-gradient-to-r from-[#16222A] to-[#3A6073] rounded-full overflow-hidden">
  <img
    src={Profile}
    alt="Profile"
    className="w-full h-full rounded-full object-cover object-top "
  />
</div>

  </section>
  
)
}
export default Home 