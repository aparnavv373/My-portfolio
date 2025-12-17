function Project(){
    
const projectSet=[
    {
        title:"Recipe Finder",
        description:"A fully responsive recipe search application that fetches real-time recipes using Spoonacular API.Includes search filters, ingredient display.",
        LiveDemo:"https://fantastic-elf-bc8940.netlify.app/",
        GitHubRepo:"https://github.com/aparnavv373/Recipe-finder",
        },
    {
        title:"Task-manager",
        description:"A responsive task manager that allows adding, editing, deleting, and filtering tasks. Automatically saves tasks in local storage.",
         LiveDemo:"https://ubiquitous-alpaca-e3eeee.netlify.app/",
         GitHubRepo:"https://github.com/aparnavv373/Task-manager" ,
    },
       {
        title:"Random Quote Generator",
        description:"A simple quote generator that displays a new motivational quote on button click. Fully responsive and minimal UI.",
         LiveDemo:"https://resonant-dasik-b5c09a.netlify.app/",
         GitHubRepo:"https://github.com/aparnavv373/Frontend-development/tree/main/Random_quote_generator",
    },
    
    
]
    return(

<section id="project" className="mt-8 min-h-screen flex flex-col items-center scroll-mt-20 ">
   
    <h1 className="text-[#0b161c] text-center text-5xl font-extrabold ">Projects</h1>
    <div className=" text-white grid sm:grid-cols-3 sm:justify-items-center gap-10 p-10 rounded-xl break-words " >
       
            {projectSet.map((project,index)=>(
                <div  key={index} className=" p-6 py-6 w-full bg-black/20 rounded-xl flex flex-col gap-4 max-w-sm justify-between shadow-lg hover:translate-y-2 transition duration-500 sm:min-h-xl">
                   
                    <h1 className="text-3xl text-center  font-extrabold ">{project.title}</h1>
                    <p className="max-w-md">{project.description}</p>
                    <div className="flex justify-center gap-6 sm:flex-wrap">
                    <a href={project.LiveDemo} className="bg-[#3A6073] hover:bg-[#16222A]  transition duration-300 rounded-xl px-4 py-2" >Live Demo</a>
                     <a href={project.GitHubRepo} className="bg-[#3A6073]   hover:bg-[#16222A]  transition duration-300 rounded-xl px-4 py-2">Github Repo</a>
                    </div>
                    
                    
                </div>
               
                
            ))}
    </div>
</section>
    )
}
export default Project