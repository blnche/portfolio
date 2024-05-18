import SocialLinks from "./SocialLinks"
import profilePicture from '../assets/profil.jpeg'

const Hero = () => {
    return (
        <>
            <section className=" hero bg-base-200 flex-col
            prose-ul:list-none prose-ul:flex 
            prose-li:mx-0.5
            ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="mask mask-squircle max-w-sm rounded-lg shadow-2xl" src={profilePicture} alt="Profile Picture"/>
                    <div>
                        <p>Salut, moi c'est</p>
                        <h2 className="text-5xl font-bold">Blanche Peltier</h2>
                        <p>Je suis</p>
                        <p className="text-4xl">Développeuse Web Full Stack</p>
                        <p>Actuellement à la recherche d'une entreprise pour effectuer mon alternance.</p>
                        <SocialLinks />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero