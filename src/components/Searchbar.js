import './Searchbar.css'
import { toggleTheme } from './theme'

export default function SearchBar(){
    return <header className='header'>
        <div className="top-buttons">
        <span className="material-symbols-outlined">menu</span>
            <input type="text" className='search-bar' placeholder='Search projects'/>
            <span className="material-symbols-outlined" onClick={toggleTheme}>bedtime</span>
        </div>
    </header>
}