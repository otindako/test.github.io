import '../index.css'
import './footer.css'

function BottomBar(){
    return <footer className='footer'>
        <ul className='bottom-bar'>
            <li><i className="material-icons">home</i> Home</li>
            <li><i className="material-icons">folder</i>Projects</li>
            <li><i className="material-icons">people</i>Contact</li>
            <li><i className="material-icons">tag_faces</i>About</li>
        </ul>
    </footer>
}

export {BottomBar}