import bootstrap from '../assets/logos/bootstrap.svg'
import html from '../assets/logos/html.svg'
import css from '../assets/logos/css.svg'
import js from '../assets/logos/js.svg'
import react from '../assets/logos/react.svg'
import symfony from '../assets/logos/symfony.svg'
import php from '../assets/logos/php.svg'
import vuejs from '../assets/logos/vuejs.svg'
import mongodb from '../assets/logos/mongodb.svg'
import node from '../assets/logos/node.svg'
import sass from '../assets/logos/sass.svg'
import phpmyadmin from '../assets/logos/phpmyadmin.svg'

const Academics = () => {
    return (
        <>
            <section className='flex flex-col items-center 
            prose-h2:text-4xl prose-h2:font-bold prose-h2:my-[1em]
            '>
                <h2>Formations</h2>
                <div className="flex flex-col w-3/4 justify-evenly md:flex-row">
                    <div className="card w-72 md:w-84 lg:w-96 my-2 bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="card-title">
                                <h3 className='text-2xl'>Developpeuse Web Full Stack</h3>
                            </div>
                            <p>Mars 2024 - Mars 2025</p>
                            <p>Deuxième année : Conceptrice d'applications</p>
                            <p>Contrat d'apprentissage</p>
                            <p>Rythme: 3 semaines en entreprise / 1 semaine en école</p>
                            <p>Formation éligible à l'Aide Exeptionnelle de 6000€</p>
                            <div className="divider"></div>
                            <div className="grid grid-cols-3">
                                <img src={html}/>
                                <img src={css}/>
                                <img src={js}/>
                                <img src={php}/>
                                <img src={phpmyadmin}/>
                                <img src={sass}/>
                                <img src={symfony}/>
                                <img src={vuejs}/>
                                <img src={bootstrap}/>
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 md:w-84 lg:w-96 my-2 bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="card-title">
                                <h3 className='text-2xl'>Developpeuse Web Full Stack (PHP)</h3>
                            </div>
                            <p>Avril 2023 - Octobre 2023</p>
                            <p>Titre délivré par 3W Academy (NSF 326) Niveau III(FR) 5 (EU) Arrêté du 25/01/2023 et inscrit au RNCP (37273)</p>
                            <p>Décerné le 8/11/2023</p>
                            <div className="divider"></div>
                            <div className="grid grid-cols-3">
                                <img src={node}/>
                                <img src={react}/>
                                <img src={mongodb}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Academics