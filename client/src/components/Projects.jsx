import React, { useEffect, useState } from "react"
import axios from 'axios'
import MainProjectCard from "./MainProjectCard"
import ProjectCard from "./ProjectCard"

const Projects = () => {

    const [projects, setProjects] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const API = 'https://portfolio-v1-api-three.vercel.app/api/projects'
    // const API = 'http://localhost:3000/api/projects'

    const fetchProjects = async () => {
        try {
            const response = await axios.get(API)
            console.log(response.data)
            setProjects(response.data)
        } 
        catch (err) {
            console.log(err)
            setError(err)
        } 
        finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchProjects()
    }, [])

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error : {error}</p>

    return (
        <>
        <section id="projects" className="flex flex-col items-center
        prose-h2:text-4xl prose-h2:font-bold prose-h2:my-[2em]
        ">
            <h2>Projects</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error : {error}</p>}
            {projects && projects.map((project) => {
                if(project.main_project) {
                    return (
                        <React.Fragment key={project.id}>
                            <MainProjectCard  {...project} />
                        </React.Fragment>
                    )
                }
            })}

            <div className="mt-6 flex flex-col items-center md:w-4/5">
                {!loading && !error && <h3 className='my-6 text-3xl'>Plus de projects</h3>}
                <div className="flex flex-wrap justify-center md:w-full md:justify-evenly">
                    {projects && projects.map((project) => {
                        if(!project.main_project) {
                            return (
                                <React.Fragment key={project.id}>
                                 <ProjectCard {...project} />
                                </React.Fragment>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects