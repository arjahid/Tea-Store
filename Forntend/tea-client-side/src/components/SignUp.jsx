import React, { useContext } from "react";
import Heade from "./Heade";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const handleFormSubmit = (e) => {
        e.preventDefault();
       const form=e.target;
       const email=form.email.value;
         const password=form.password.value;
         const data={email,password};
        console.log(data);
        createUser(email,password)
        .then(result=>{
            console.log(result)
            const newUser={email}
            // save user data to database
            fetch('http://localhost:7000/user',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    alert('User created successfully');}
                })
        })
        .catch(error=>console.log(error))

    }
  return (
    <div>
      <Heade></Heade>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleFormSubmit} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                    name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-accent mt-4">Login</button>
              </form>
              <p>Already have an accoutn? <Link to='/signin'><span className="text-green-500">Log in</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
