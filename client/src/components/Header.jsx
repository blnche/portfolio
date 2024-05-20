import NavBar from "./NavBar"

const Header = () => {
    return (
        <>
            <header className="sticky top-2 md:top-4 z-10 shadow-sm bg-base-300/75 backdrop-blur-lg rounded-full md:w-4/5 md:px-8 mt-2 mb-2 md:mb-4 md:mt-4 mx-2 md:mx-auto">
                <NavBar/>
            </header>
        </>
    )
}

export default Header