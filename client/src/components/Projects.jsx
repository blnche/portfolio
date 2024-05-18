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
        fetchProjects()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error}</p>

    return (
        <>
        <section>
            <h2>Projects</h2>
            {projects && projects.map((project, index) => {

                if(project.main_project) {
                    return (
                        <React.Fragment key={index}>
                            <MainProjectCard  {...project} />
                        </React.Fragment>
                    )
                }
                else return (
                    <React.Fragment key={index}>
                        <ProjectCard {...project} />
                    </React.Fragment>
                )
            })}
        </section>
        </>
    )
}

export default Projects