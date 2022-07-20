import { NavLink } from 'react-router-dom'
import '../index.css'
import './footer.css'

function BottomBar(){
    return <footer className='footer'>
        <ul className='bottom-bar'>
            <li><NavLink end to="/" className={"footer-link"}><i className="material-icons">home</i> Home</NavLink></li>
            <li><NavLink to="/Projects" className={"footer-link"}><i className="material-icons">folder</i>Projects</NavLink></li>
            <li><NavLink to="/Contact" className={"footer-link"}><i className="material-icons">people</i>Contact</NavLink></li>
            <li><NavLink to="/About" className={"footer-link"}><i className="material-icons">tag_faces</i>About</NavLink></li>
        </ul>
    </footer>
}


export {BottomBar}