import SocialLinks from "./SocialLinks"

const Footer = () => {
    return (
        <>
            <footer className="footer items-center px-4 py-8 bg-base-300 text-base-content">
                <aside className="items-center grid-flow-col">
                    <a href="" className="btn btn-ghost text-3xl"><h1>{'{Blanche}'}</h1></a>
                    <p>Design et création par Blanche Peltier</p>
                </aside>
                <SocialLinks className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"/>
            </footer>
        </>
    )
}

export default Footer