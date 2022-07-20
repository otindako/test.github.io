import { NavLink } from 'react-router-dom'
import '../index.css'
import './footer.css'

function BottomBar(){
    return <footer className='footer'>
        <ul className='bottom-bar'>
            <li><NavLink end to="/" className={"footer-link"}><span className="material-symbols-outlined">home</span>Home</NavLink></li>
            <li><NavLink to="/Projects" className={"footer-link"}><span className="material-symbols-outlined">web</span>Projects</NavLink></li>
            <li><NavLink to="/Contact" className={"footer-link"}><span className="material-symbols-outlined">account_circle</span>Contact</NavLink></li>
            <li><NavLink to="/About" className={"footer-link"}><span className="material-symbols-outlined">question_mark</span>About</NavLink></li>
        </ul>
    </footer>
}


export {BottomBar}