import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin, FaGithub, FaSkype }  from 'react-icons/fa'


const Sidebar = () =>{
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo'/>
            </Link>
            <nav className='nav-links'>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
                <NavLink activeclassname="active" className='portfolio-link' to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='/'>
                        <FaLinkedin color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Shubham242G'>
                        <FaGithub color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='/'>
                        <FaSkype color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;