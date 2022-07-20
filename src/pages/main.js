import  { HashRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import About from "./About/About";
import SearchBar from '../components/Searchbar'
import Sidebar from "../components/SideBar";

const idValues = [ 0, 1, 2, 3 ];


function Main() {
    const [active, setActiveId] = useState(0);

    return (
            <HashRouter>
                    <SearchBar/>
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/Projects" element={<Projects />}></Route>
                        <Route path="/Contact" element={<Contact />}></Route>
                        <Route path="/About" element={<About />}></Route>
                    </Routes>
                <footer className='footer'>
                <ul className='bottom-bar'>

                    <li>
                        <NavLink end to="/" className={`footer-link ${active === idValues[0] ? "active-link" : ""}`}
                        onClick={() => setActiveId(idValues[0])}>
                        <span className="material-symbols-outlined">home</span>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Projects" className={`footer-link ${active === idValues[1] ? "active-link" : ""}`}
                        onClick={() => setActiveId(idValues[1])}>
                        <span className="material-symbols-outlined">web</span>Projects</NavLink>
                    </li>

                    <li>
                        <NavLink to="/Contact" className={`footer-link ${active === idValues[2] ? "active-link" : ""}`}
                        onClick={() => setActiveId(idValues[2])}>
                        <span className="material-symbols-outlined">account_circle</span>Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="/About" className={`footer-link ${active === idValues[3] ? "active-link" : ""}`}
                        onClick={() => setActiveId(idValues[3])}>
                        <span className="material-symbols-outlined">question_mark</span>About</NavLink>
                    </li>

                </ul>
            </footer>
            </HashRouter>
    )
}

export default Main