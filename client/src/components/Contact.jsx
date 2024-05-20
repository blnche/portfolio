import { Typewriter } from 'react-simple-typewriter'

const Contact = () => {

    return (
        <>
            <section id="contact" className="prose self-center text-center mx-6 my-36 pb-8 flex flex-col items-center bg-success rounded-xl
            prose-h2:text-4xl prose-h2:font-bold prose-h2:my-[2em]
            ">
                <h2>Prochaine étape ?</h2>
                <p className="text-2xl">Me contacter!</p>
                <p className="w-1/2">En quête d'une alternance, mais je suis ouverte à toute discussion d'idées ou autres.</p>
                <p>Let's  
                    <span>
                        <Typewriter
                            words={[' talk!', ' code!', ' work together!', ' have a coffee!']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </p>
                <button className="btn btn-outline btn-wide mt-4">Envoyer moi un mail</button>
            </section>
        </>
    )
}

export default Contact