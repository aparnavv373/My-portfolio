function Education(){
    const educationSet=[
        {
            title:"B.Tech in Electronics and Communication Engineering",
            place:"COLLEGE OF ENGINEERING THALASSERY",
            year:"2021-2025"

        },
         {
            title:"Higher Secondary Education (Plus Two)",
            place:"GOVERNMENT HIGHER SECONDARY SCHOOL CHELORA",
            year:"2019-2021"

        },
        
         {
            title:"SSLC (10th Grade)",
            place:"KOODALI HIGHER SECONDARY SCHOOL",
            year:"2018-2019"

        },
        
        
        
    ]
return(
    
    <section id="education" className="w-full flex flex-col items-center py-20 px-6 justify-center gap-4">
         <h1 className="text-[#0b161c] text-5xl font-extrabold">Education</h1>
         <div className="relative flex flex-col gap-8  p-10 border-[#16222A]  w-full sm:w-[60%]">
          {educationSet.map((data,index)=>(
          

            <div  key={index}className="bg-black/20 flex flex-col gap-2 text-white rounded-xl p-4 items-center
            shadow-inner shadow-[#16222A] hover:bg-black/30  transition-all hover:scale-110 ">
                
                        <h3 className="text-xl font-semibold">{data.title}</h3>
                        <p className="text-white/80">{data.place}</p>
                        <p className="text-white/60 mt-2">{data.year}</p>
                           
                       
                        </div>
                       

                ))}
           
        </div>
    </section>
)
}
export default Education