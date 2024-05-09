import { NavLink } from "react-router-dom"
const About = ()=> {
    return (
      <main>
        <section>
        <div className="md:grid md:grid-cols-2 justify-between items-center">
        <div className="">
            <img src="/images/about.png" alt="Image" width="400" height="400" />
          </div>
          <div className="md:w-full">
             <h1 className="my-5 md:text-2xl text-xl font-bold italic ">About Untittle</h1>
             <p className="my-5 text-xs md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quas possimus corrupti. Ab odio, molestiae porro in 
             tempore excepturi magnam veniam, nisi qui laudantium quos laboriosam non repellendus labore alias!</p>
             <div className="my-5">
              <NavLink to="/about" className="">
                <button className="bg-blue-300 p-2 rounded-lg mr-2 md:mr-5">Read more</button>
                </NavLink>
              
             </div>
          </div>
          
        </div>
        </section>
      </main>
    )
  }
  
  export default About