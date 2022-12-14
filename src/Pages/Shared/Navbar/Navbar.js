import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)

    const HandelLouOut = () => {
        LogOut()
            .then(() => { })
            .catch((error) => {
                console.error(error)
            })
    }

    const menuItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            {
                user?.uid ?
                    <>
                        <li><Link to='/dashboard'>Dash Board</Link></li>
                        <li><button onClick={HandelLouOut} >Sign Out</button></li>
                    </> :
                    <li><Link to='/login'>LogIn</Link></li>
            }
        </>

    return (
        <div className="navbar bg-base-200 text-black flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost rounded-sm normal-case text-xl"><img className='w-11' src={logo} alt="" /><span className='ml-2'>AlphaMobile</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer"  tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;