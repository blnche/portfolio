import { useState, useEffect } from 'react'
import axios from 'axios'
import shoolProject from '../assets/project-img/school-townhall.png'
import townHallProject from '../assets/project-img/wordpress-townhall.png'
import github from '../assets/icons/github.svg'
import open_window from '../assets/icons/open-window.svg'

const MainProjectCard = (props) => {
    const {id, title, description, skills, repository, demo, picture, main_project} = props
    
    const API = 'https://portfolio-v1-api-three.vercel.app'
    // const API = 'http://localhost:3000'
    const pictureUrl = API+picture

    return (
        <>
            <div className='relative h-[30rem] landscape:h-80 landscape: my-8 md:w-3/4 lg:w-2/3 xl:w-3/5 my-2 py-2 flex flex-col items-end justify-between
            prose-ul:list-none prose-ul:w-fit
            prose-li:w-fit prose-li:m-1
            prose-a:no-underline 
            prose-code:font-bold prose-code:bg-transparent
            prose-p:bg-base-300 prose-p:w-3/4 prose-p:shadow
            '>
                <div className="mockup-window border bg-success aspect-video h-80 -z-10 absolute top-12 -left-3/4 md:top-20 md:-left-20 lg:top-12 lg:left-0 landscape:top-16">
                    <img src={pictureUrl} alt={title} className='object-cover object-top h-full min-h-full min-w-full'/>
                </div>
                
                <h3 className='text-4xl self-center lg:self-end p-2'>{title}</h3>
                
                <p className='p-3 rounded-lg self-center order-last lg:order-none lg:self-end lg:w-1/2'>{description}</p>
                <ul className='pr-1.5 self-end flex flex-col items-center lg:flex-row'>
                    {skills && skills.map((skill, index) => {
                        return (
                            <li key={index}><code className='text-sm lg:text-base text-success'>{skill.toUpperCase()}</code></li>
                        )
                    })}
                </ul>
                <ul className='pr-1.5 self-end flex'>
                    {demo && <li><a href={demo}><img src={open_window}/></a></li>}
                    {repository && <li><a href={repository}><img src={github}/></a></li>}
                </ul>
            </div>
        </>
    )

}

export default MainProjectCard