const ProjectCard = (props) => {
    const {title, description, skills, repository, demo, picture, main_project} = props

    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                <div className="card-actions">
                    <div className="badge">Github</div>
                    <div className="badge">Demo</div>
                </div>

                <h3 className="card-title">{title}</h3>
                <p>{description}</p>

                <div className="card-actions justify-end">
                    <div className="badge">Github</div>
                    <div className="badge">Demo</div>
                </div>
            </div>
        </div>
        </>
    )

}

export default ProjectCard