import './App.css';
import { SearchBar } from './components/Searchbar';
// import { SideBar } from './components/sidebar';
import { Dashboard } from './components/Dashboard';
import { BottomBar } from './components/footer';

function App() {
  return <>
    <SearchBar />
    <Dashboard />
    <BottomBar />
    {/* <SideBar /> */}
  </>
}


export default App