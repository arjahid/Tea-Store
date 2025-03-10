import React, { useContext } from 'react';
import Heade from './Heade';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignIn = () => {
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value
        const user={email,password}
        console.log(user);
        signIn(email,password)
        .then(result=>{
            console.log(result);
            if(result.user){
                alert('User logged in successfully');
                navigate('/')

            }

        })

    }
    return (
        <div>
            <Heade></Heade>
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
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
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p>Are you new? <Link to='/signup'><span className='text-green-500 font-medium'>Sign Up</span></Link></p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignIn;