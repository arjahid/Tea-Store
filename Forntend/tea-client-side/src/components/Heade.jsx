import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Heade = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log('user',user);
    const links=<>
     <li><NavLink to='/addtea' className='hover:bg-green-500 bg-white mr-3'>Add Tea</NavLink></li>
     <li><NavLink to='/signup'  className='hover:bg-green-500 bg-white mr-3'>SignUp</NavLink></li>
     <li><NavLink to='/signin'  className='hover:bg-green-500 bg-white'>Login</NavLink></li>
    {
        user && <>
         <li><NavLink to='/user'  className='hover:bg-green-500 ml-2 bg-white'>User</NavLink></li>
    
        </>
    }
    </>
    const navigate=useNavigate();
    const handleSignOut=async()=>{
        try {
            await logOut();
            navigate('/signin');
        } catch (error) {
            console.error('Error signing out:', error);
        }

    }
   
    return (
        <div className="navbar bg-gradient-to-r from-green-400 via-green-300 to-green-400 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <NavLink to='/' className="btn btn-ghost text-xl text-green-700 bg-white hover:bg-green-400">TeaStall</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?<>
            <div className="flex items-center">
                            <span className="btn mr-2">{user.email}</span>
                            {user.photoURL && <img src={user.photoURL} alt="User Avatar" className="w-8 h-8 rounded-full" />}
                        </div>
            <NavLink onClick={handleSignOut} to='/logout' className='btn hover:bg-green-500 bg-white'>Logout</NavLink>
            </> :<Link to='/signin' className='hover:bg-green-500 btn bg-white'>Login</Link>
          }
        </div>
      </div>
    );
};

export default Heade;