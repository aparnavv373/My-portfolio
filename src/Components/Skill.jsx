import python from '../assets/Python.svg'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import javascript from'../assets/javascript-logo.png'
import reactLogo from '../assets/react.svg'
import tailwind from '../assets/Tailwind_CSS_Logo.svg'
import vscode from '../assets/VisualStudio.svg'
import github from '../assets/github.svg'
import Git from '../assets/git.svg'
import Vercel from '../assets/Vercel.svg'

const skillsData = [

    {
        title:"Frontend",
        skills:[
            {name:"HTML",icon:html},
            {name:"CSS",icon:css},
            {name:"JavaScript",icon:javascript},
            {name:"React",icon:reactLogo},
            {name:"Tailwind CSS",icon:tailwind},
        ]
    },
    {
        title:"Tools",
        skills:[
            {name:"VS Code",icon:vscode},
             {name:"Github",icon:github},
              {name:"Git",icon:Git},
                 {name:"Vercel",icon:Vercel},
        ]
    },
     {
        title:"Languages",
        skills:[
            {name:"Python",icon:python},
             {name:"JavaScript",icon:javascript},
        ]
    }
]

function Skill(){
    return(
        <section id="skill" className='text-white py-20 px-6 '>
            <h2 className='text-[#0b161c] text-center text-5xl font-extrabold  '>Skills</h2>
            <div className="grid sm:grid-cols-2  gap-8 p-4">
    {skillsData.map((data, index) => (
        <div
            key={index}
            className=" rounded-2xl shadow-inner shadow-[#16222A] p-8
            bg-black/10  hover:translate-y-2  transition-all duration-500"
        >
            <h3 className="text-center text-2xl font-semibold mb-6">{data.title}</h3>

            <div className="flex flex-wrap justify-center gap-6">
                {data.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center  gap-3 
                        rounded-3xl p-2 bg-[#3A6073]/30 shadow-lg hover:scale-110 ansition-all duration-300"
                    >
                        <img src={skill.icon} alt={skill.name}className="w-10 h-10 " />
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    ))}
</div>

        </section>

    )

}
export default Skill