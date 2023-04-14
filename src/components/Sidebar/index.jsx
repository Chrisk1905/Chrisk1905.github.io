import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-c.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/"> 
                <FontAwesomeIcon icon={faHome} color="#4d4d4ek"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about"> 
                <FontAwesomeIcon icon={faUser} color="#4d4d4ek"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"> 
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4ek"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/geol-chris-kim/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Chrisk1905'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/@chriskim8566/featured'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar