import SocialLinks from "./SocialLinks"
import profilePicture from '../assets/profil.jpeg'

const Hero = () => {
    return (
        <>
            <section className="hero py-24 bg-base-300 flex flex-col justify-center
            prose-ul:list-none prose-ul:flex prose-ul:mt-8
            prose-li:mx-1.5
            prose-p:mt-2
            ">
                <div className="w-11/12 md:w-auto hero-content flex-col md:flex-row-reverse items-center justify-center bg-base-100 rounded-[2rem] shadow-2xl p-8">
                    <img className="md:mx-8 mask mask-squircle w-44 md:w-72 max-w-sm rounded-lg shadow-2xl" src={profilePicture} alt="Profile Picture"/>
                    <div className="md:w-80">
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