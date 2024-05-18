import SocialLinks from "./SocialLinks"
import profilePicture from '../assets/profil.jpeg'

const Hero = () => {
    return (
        <>
        <section>
            <p>Salut, moi c'est</p>
            <h2>Blanche Peltier</h2>
            <p>Je suis</p>
            <p>Développeuse Web Full Stack</p>
            <p>Actuellement à la recherche d'une entreprise pour effectuer mon alternance.</p>
            <img src={profilePicture} alt="Profile Picture"/>
            <SocialLinks />
        </section>
        </>
    )
}

export default Hero