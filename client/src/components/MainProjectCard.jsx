import imgTest from '../assets/project-img/school-townhall.png'
const MainProjectCard = (props) => {
    const {title, description, skills, repository, demo, picture, main_project} = props

    return (
        <>
        <div className='prose border-2 border-black flex flex-col items-end
        prose-ul:list-none prose-ul:w-fit prose-ul:flex
        prose-li:w-fit 
        prose-a:no-underline 
        prose-code:font-bold prose-code:bg-transparent
        prose-p:bg-black prose-p:text-white prose-p:w-3/4
        '>
            <div className="mockup-window border bg-base-300 aspect-video h-2/4 -z-10 absolute -left-1/4">
                <img src={imgTest} className='object-cover object-top h-full min-h-full min-w-full'/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {skills && skills.map((skill, index) => {
                    return (
                        <li key={index}><code>{skill.toUpperCase()}</code></li>
                    )
                })}
            </ul>
            <ul>
                {demo && <li><a href='#'>Demo</a></li>}
                {repository && <li><a href='#'>Repo</a></li>}
            </ul>

        </div>
        </>
    )

}

export default MainProjectCard