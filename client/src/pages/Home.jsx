import { NavLink } from "react-router-dom"


const Home = ()=> {
  return (
    <>
    <main>
      <section className="">
        <div className="md:grid md:grid-cols-2 justify-between items-center ">
          <div className="md:w-full">
             <p className="my-5 text-xs md:text-xl ">Tittled to be</p>
             <h1 className="my-5 text-xl md:text-2xl font-bold italic">Ipsum dolor sit amet</h1>
             <p className="my-5 text-xs md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quas possimus corrupti. Ab odio, molestiae porro in 
             tempore excepturi magnam veniam, nisi qui laudantium quos laboriosam non repellendus labore alias!</p>
             <div className=" my-5">
              <NavLink to="/collection" className=""><button className="bg-blue-300 p-2 rounded-lg mr-2 md:mr-5">View more</button></NavLink>
              <NavLink to="/contact" className=""><button className="bg-blue-300 p-2 rounded-lg"> Connect now</button></NavLink>
             </div>
          </div>
          <div className="md:w-full ">
            <img src="/images/home.png" alt="Image" className="md:w-full" />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home
