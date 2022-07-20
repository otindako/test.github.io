import { BottomBar } from "../components/footer";
import  { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import About from "./About/About";
import {SearchBar} from '/home/pablo/documents/projects/my-app/src/components/Searchbar'

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
                <BottomBar></BottomBar>
            </HashRouter>
    )
}

export default Main