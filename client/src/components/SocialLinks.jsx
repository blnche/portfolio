import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import email from '../assets/icons/email.svg'

const SocialLinks = ({ className }) => {
    return (
        <>
            <ul className={className}>
                <li><a href=""><img src={github} /></a></li>
                <li><a href=""><img src={email} /></a></li>
                <li><a href=""><img src={linkedin} /></a></li>
            </ul>
        </>
    )
}
export default SocialLinks