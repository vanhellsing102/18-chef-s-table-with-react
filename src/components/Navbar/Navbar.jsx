import { CgProfile  } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 py-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                    </div>
                        <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
            <div className="navbar-end">
                <CiSearch className="text-2xl"/>
                <input className="border-none outline-none mr-2 p-1 rounded-lg" type="search" placeholder="Search"/>
                <span className="bg-[#0BE58A] text-xl p-2 rounded-full"><CgProfile /></span>
            </div>
        </div>
    </div>
    );
};

export default Navbar;