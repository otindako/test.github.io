import './SideBar.css'
import { toggleTheme } from './theme'

function Sidebar(){
    return <div className="sidebar-container">
        <h2 className='sidebar-title'>My personal portfolio</h2>
        <div className='sidebar-box'>
            <div className="sidebar-item">
                <span className="material-symbols-outlined">bedtime</span>
                <button onClick={toggleTheme} className='sidebar-btn'>Dark mode</button>
            </div>

            <div className="sidebar-item">
                <button className='sidebar-btn'>Test</button>
            </div>

            <div className="sidebar-item">
                <button className='sidebar-btn'>Test</button>
            </div>
        </div>
    </div>
}

export default Sidebar