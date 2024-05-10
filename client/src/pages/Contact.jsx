import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { baseUrl } from "../url";
const Contact = ()=> {
  const defaultContactData = {
    emailid:"",
    username:"",
    message:"",
  }
  const [contact, setContact] = useState(defaultContactData);
  
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  if(userData && user){
    setContact({
      username: user.username,
      emailid: user.emailid,
      message:"",
    })
    setUserData(false);
  }
 
  const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
 
    setContact({
     ...contact,
     [name]: value,
    });
}
const URL = `${baseUrl}/form/contact`
const handleSubmit = async(e)=>{
  e.preventDefault();
  try{
    const response = await fetch(URL,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    console.log("feedback",response);
    if(response.ok){
      
      setContact(defaultContactData);
      const data = await response.json();
      console.log(data);
      alert("Message sent successfully");
    }else{
      alert("invalid");
      console.log("invalid credentials");
    }
  }
  catch(error){
    console.log(error);
  }

}
    return (
      <main>
      <section>
      <div className="md:grid md:grid-cols-2 py-2  md:py-5 justify-between items-center">
      
        <div className="md:h-full block justify-center items-center">
                  <h1 className=" text-2xl font-bold text-center">Contact Us</h1>
                  <br />
                  <form onSubmit={handleSubmit} className="md:w-full md:h-full p-5">
                 
                    <div className="flex justify-between my-5">
                      <label htmlFor="email" className="mt-2">Emailid</label>
                      <input type="email" name="emailid" placeholder="emailid" autoComplete="off"
                      id="emailid" value={contact.emailid} onChange={handleInput} className="text-black w-2/3 h-12 rounded-sm" required />
                    </div>
                    
                    <div className="flex justify-between my-5">
                      <label htmlFor="username" className="mt-2">username</label>
                      <input type="text" name="username" placeholder="username" autoComplete="off"
                      id="username" value={contact.username} onChange={handleInput} className="text-black w-2/3 h-12 rounded-sm" required />
                    </div>
                    <div className="flex justify-between my-5">
                      <label htmlFor="message" className="mt-2">Feedback</label>
                      <textarea cols="30" rows="10"  name="message" placeholder="" autoComplete="off"
                      id="message" value={contact.message} onChange={handleInput} className="text-black w-2/3 h-24 rounded-sm" required />
                    </div>
                    <br />
                    <div className="flex flex-col items-center">
                    <button type="submit" className="bg-blue-300 py-2 px-7 text-xl rounded-md">Send</button>
                    </div>
                  </form>
        </div>
        <div className="flex flex-col items-center">
            <img src="/images/contact.png" alt="Image" className=""  />
        </div>
      </div>
      </section>
    </main>
    )
  }
  
  export default Contact