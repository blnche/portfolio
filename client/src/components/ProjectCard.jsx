import github from '../assets/icons/github.svg'
import open_window from '../assets/icons/open-window.svg'

const ProjectCard = (props) => {
    const {title, description, skills, repository, demo, picture, main_project} = props

    return (
        <>
            <div className="prose card w-[350px] md:w-96 bg-base-300 shadow-xl hover:shadow-2xl my-4
            prose-img:m-0
            ">
                <div className="card-body">

                    <div className="card-actions">
                        {skills && skills.map((skill, index) => {
                            return (<div key={index} className="badge font-bold invert">{skill.toUpperCase()}</div>)
                        })}
                    </div>

                    <h3 className="card-title">{title}</h3>
                    <p>{description}</p>

                    <div className="card-actions justify-end">
                        {demo && <a href={demo}><img src={open_window}/></a>}
                        {repository && <a href={repository}><img src={github}/></a>}
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProjectCard