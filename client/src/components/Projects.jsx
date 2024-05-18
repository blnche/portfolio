import React, { useEffect, useState } from "react"
import axios from 'axios'
import MainProjectCard from "./MainProjectCard"
import ProjectCard from "./ProjectCard"

const Projects = () => {

    const [projects, setProjects] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // const API = 'https://portfolio-v1-api-three.vercel.app/api/projects'
    const API = 'http://localhost:3000/api/projects'

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
        // fetchProjects()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error}</p>

    return (
        <>
        <section className="prose-h2:text-4xl prose-h2:font-bold prose-h2:my-[1em]">
            <h2>Projects</h2>
            {projects && projects.map((project, index) => {
                if(project.main_project) {
                    return (
                        <React.Fragment key={index}>
                            <MainProjectCard  {...project} />
                        </React.Fragment>
                    )
                }
            })}

            <div className="flex flex-col items-center">
                <h3>Plus de projects</h3>
                <div className="flex flex-wrap justify-center">
                    {projects && projects.map((project, index) => {
                        if(!project.main_project) {
                            return (
                                <React.Fragment key={index}>
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