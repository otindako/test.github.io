import './Searchbar.css'
import '../index.css'
import { toggleTheme } from './theme'

function SearchBar(){
    return <header className='header'>
        <div className="top-buttons">
            <i className="material-icons">menu</i>
            <input type="text" className='search-bar' placeholder='Search'/>
            <i className='material-icons' onClick={toggleTheme}>brightness_2</i>
        </div>
    </header>
}

export {SearchBar}