import  { HashRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import About from "./About/About";
import SearchBar from '../components/Searchbar'

function Main() {
    return (
            <HashRouter>
                <div className="content">
                    <SearchBar/>

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/Projects" element={<Projects />}></Route>
                        <Route path="/Contact" element={<Contact />}></Route>
                        <Route path="/About" element={<About />}></Route>
                    </Routes>
                </div>
                <footer className='footer'>
                <ul className='bottom-bar'>
                    <li><NavLink end to="/" className={"footer-link"}><span className="material-symbols-outlined">home</span>Home</NavLink></li>
                    <li><NavLink to="/Projects" className={"footer-link"}><span className="material-symbols-outlined">web</span>Projects</NavLink></li>
                    <li><NavLink to="/Contact" className={"footer-link"}><span className="material-symbols-outlined">account_circle</span>Contact & links</NavLink></li>
                    <li><NavLink to="/About" className={"footer-link"}><span className="material-symbols-outlined">question_mark</span>About</NavLink></li>
                </ul>
            </footer>
            </HashRouter>
    )
}

export default Main