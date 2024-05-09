import { useState } from "react"
import { baseUrl } from "../url";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const Signup = ()=> {
  const {storetokenInLS} = useAuth();
  const URL = `${baseUrl}/register`
  const [user, setUser] = useState({
    username:"",
    emailid:"",
    phone:"",
    password:"",
  });
  
  const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
 
    setUser({
     ...user,
     [name]: value,
    });
}
const navigate = useNavigate()
const handleSubmit = async (e)=>{
  e.preventDefault();
  console.log(user);
 try{
  const response = await fetch(URL,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if(response.ok){
    const res_data = await response.json();
     console.log("data_response",res_data);
     storetokenInLS(res_data.token);
     //localStorage.setItem("token", res_data.token);
     setUser({ username:"", emailid:"", phone:"",password:"",
}); navigate("/login");
  }else{
    console.log("invalid credentials");
  }
  console.log("register",response);
 }catch(error){
  console.log("register", error);
 }
}
    return (
      <section>
        <main>
          <div className="">
            <div className="md:grid md:grid-cols-2 py-2  md:py-5 justify-between items-center">
                <div className="flex flex-col items-center px-2">
                  <img src="/images/signup.png" className="" alt="Image" />
                </div>
                <div className="md:h-full block justify-center items-center">
                  {/* <h1 className="text-2xl font-bold text-center">Signup Form</h1> */}
                  <br />
                  <form onSubmit={handleSubmit} className="md:w-full md:h-full p-5">
                    <div className="flex justify-between my-5">
                      <label htmlFor="username" className="mt-2">Username</label>
                      <input type="text" name="username" placeholder="username" autoComplete="off"
                      id="username" value={user.username} onChange={handleInput} className="text-black w-2/3 h-12 rounded-sm" required />
                    </div>
                    <div className="flex justify-between my-5">
                      <label htmlFor="email" className="mt-2">Emailid</label>
                      <input type="email" name="emailid" placeholder="emailid" autoComplete="off"
                      id="emailid" value={user.emailid} onChange={handleInput} className="text-black w-2/3 h-12 rounded-sm" required />
                    </div>
                    <div className="flex justify-between my-5">
                      <label htmlFor="phone" className="mt-2">Phone</label>
                      <input type="number" name="phone" placeholder="phone" autoComplete="off"
                      id="phone" value={user.phone} onChange={handleInput} className="text-black w-2/3 h-12 rounded-sm" required />
                    </div>
                    <div className="flex justify-between my-5">
                      <label htmlFor="password" className="mt-2">Password</label>
                      <input type="password" name="password" placeholder="password" autoComplete="off"
                      id="password" value={user.password} onChange={handleInput} className="text-black w-2/3 h-12 rounded-sm" required />
                    </div>
                    <br />
                    <div className="flex flex-col items-center">
                    <button type="submit" className="bg-blue-300 py-2 px-7 text-xl rounded-md">Submit</button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </main>
      </section>
    )
  }
  
  export default Signup