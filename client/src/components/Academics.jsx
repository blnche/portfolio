import { useState } from 'react'
import AcademicsSkill from './AcademicsSkill'
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
import express from '../assets/logos/express.svg'
import npm from '../assets/logos/npm.svg'
import pug from '../assets/logos/pug.svg'

const Academics = () => {

    const [hover, setHover] = useState(false);
    const [altText, setAltText] = useState('')

    const handleAltText = (e) => {
        setHover(true)
        setAltText(e.target.alt)
    }

    const handleEmptyAltText = () => {
        setHover(false)
        setAltText('')
    }

    return (
        <>
            <section id="academics" className='flex flex-col items-center 
            prose-h2:text-4xl prose-h2:font-bold prose-h2:my-[2em]
            '>
                <h2 className='text-center'>Formations</h2>
                <div className="flex flex-col w-3/4 justify-center items-center md:items-stretch gap-14 md:flex-row">
                    <div className="card w-80 lg:w-96 my-4 bg-base-300 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="card-title">
                                <h3 className='text-2xl'>Developpeuse Web Full Stack</h3>
                            </div>
                            <p>Mars 2024 - Mars 2025</p>
                            <p>Deuxième année : Conceptrice d'applications</p>
                            <p>Contrat d'apprentissage</p>
                            <p>Rythme: 3 semaines en entreprise / 1 semaine en école</p>
                            <p>Formation éligible à l'Aide Exeptionnelle de 6000€</p>
                            <div className="divider">Compétences</div>
                            <div className="grid grid-cols-3">
                                <AcademicsSkill src={html} alt="HTML"/>
                                <AcademicsSkill src={css} alt="CSS"/>
                                <AcademicsSkill src={js} alt="Javascript"/>
                                <AcademicsSkill src={php} alt="PHP"/>
                                <AcademicsSkill src={phpmyadmin} alt="PhpMyAdmin"/>
                                <AcademicsSkill src={sass} alt="Sass"/>
                                <AcademicsSkill src={symfony} alt="Symfony"/>
                                <AcademicsSkill src={vuejs} alt="Vue.js"/>
                                <AcademicsSkill src={bootstrap} alt="Bootstrap"/>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 lg:w-96 my-4 bg-base-300 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="card-title">
                                <h3 className='text-2xl'>Developpeuse Web Full Stack (PHP)</h3>
                            </div>
                            <p>Avril 2023 - Octobre 2023</p>
                            <p>Titre délivré par 3W Academy (NSF 326) Niveau III(FR) 5 (EU) Arrêté du 25/01/2023 et inscrit au RNCP (37273)</p>
                            <p>Décerné le 8/11/2023</p>
                            <div className="divider">Compétences</div>
                            <div className="grid grid-cols-3">
                                <AcademicsSkill src={react} alt="React"/>
                                <AcademicsSkill src={npm} alt="npm"/>
                                <AcademicsSkill src={node} alt="Node.js"/>
                                <AcademicsSkill src={express} alt="Express.js"/>
                                <AcademicsSkill src={mongodb} alt="MongoDB"/>
                                <AcademicsSkill src={pug} alt="Pug"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Academics