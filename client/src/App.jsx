import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Collection from "./pages/Collection"
import Navbar from "./components/Navbar"
import { Error } from "./pages/Error"
import { Footer } from "./components/Footer"
import { Logout } from "./pages/Logout"
const App = () =>{


  return (
    <>
     <BrowserRouter>
      <div className="flex flex-col h-screen">
      <Navbar />
     <div className="text-white px-2 pt-24 md:px-52 md:pt-32 flex-grow ">
     <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />}/>
           <Route path="/signup" element={<Signup />} />
           <Route path="/login" element={<Login />}/>
           <Route path="/collection" element={<Collection />} />
           <Route path="/logout" element={<Logout />} />
           <Route path="*" element={<Error />} />
       </Routes>
     </div>
     <Footer />
      </div>
     </BrowserRouter>
    </>
  )
}

export default App
