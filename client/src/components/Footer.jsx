import { NavLink } from "react-router-dom"
export const Footer = () =>{
    return(
        <>
       <footer className="w-full">
          <div className="px-7 bg-neutral-800 text-white  border-2 border-t-neutral-300 
          border-opacity-25 border-x-0 border-b-0">
            <div className=" gap-4 md:flex flex flex-wrap items-center justify-between
             md:px-52 py-5">
                <div className="">
                    <h1 className=" mb-6">Heading 1</h1>
                    <ul className="gap-y-5">
                        <li><NavLink to="/">Link 1</NavLink></li>
                        <li><NavLink to="/">Link 1</NavLink></li>
                        <li><NavLink to="/">Link 1</NavLink></li>
                        <li><NavLink to="/">Link 1</NavLink></li>
                        <li><NavLink to="/">Link 1</NavLink></li>
                        <li><NavLink to="/">Link 1</NavLink></li>
                    </ul>
                </div>
                <div className="">
                    <h1 className=" mb-6">Heading 2</h1>
                    <ul>
                        <li><NavLink to="/"> Link2</NavLink></li>
                        <li><NavLink to="/">Link2</NavLink></li>
                        <li><NavLink to="/">Link2</NavLink></li>
                        <li><NavLink to="/">Link2</NavLink></li>
                        <li><NavLink to="/">Link2</NavLink></li>
                        <li><NavLink to="/">Link2</NavLink></li>
                    </ul>
                </div>
                <div className="">
                    <h1 className=" mb-6">Heading 3</h1>
                    <ul>
                        <li><NavLink to="/">Link3</NavLink></li>
                        <li><NavLink to="/">Link3</NavLink></li>
                        <li><NavLink to="/">Link3</NavLink></li>
                        <li><NavLink to="/">Link3</NavLink></li>
                        <li><NavLink to="/">Link3</NavLink></li>
                        <li><NavLink to="/">Link3</NavLink></li>
                    </ul>
                </div>
                <div className="">
                    <h1 className=" mb-6">Heading 4</h1>
                    <ul>
                        <li><NavLink to="/">Link 4</NavLink></li>
                        <li><NavLink to="/">Link 4</NavLink></li>
                        <li><NavLink to="/">Link 4</NavLink></li>
                        <li><NavLink to="/">Link 4</NavLink></li>
                        <li><NavLink to="/">Link 4</NavLink></li>
                        <li><NavLink to="/">Link 4</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center">
               <div>
               <h1>Untittled website</h1>
                <h1>&copyrights @ 2024</h1>
               </div>
            </div>
            </div>
       </footer>
        </>
    )
} 