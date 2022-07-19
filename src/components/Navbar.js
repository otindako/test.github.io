import './Navbar.css'
import '../index.css'
import { toggleTheme } from './theme'

function Navbar(){
    return <header className='header'>
        <nav className='nav-component width-container'>
            <h1>Test</h1>
            <ul className='list-items'>
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li><i className='material-icons' onClick={toggleTheme}>brightness_2</i></li>
            </ul>
        </nav>
    </header>
}

export {Navbar}