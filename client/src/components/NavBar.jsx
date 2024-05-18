const NavBar = () => {
    return (
        <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a href="" className="btn btn-ghost text-3xl"><h1>{'{Blanche}'}</h1></a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <a className="btn btn-ghost flex-row lg:hidden" href="#">
                    CV
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </a>
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="">Formation</a></li>
                        <li><a href="">Projets</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center text-lg">
                    <li><a href="">Formation</a></li>
                    <li><a href="">Projets</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button className="btn btn-ghost flex-row">
                    CV
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </button>
            </div>
        </div>
        </>
    )
}

export default NavBar