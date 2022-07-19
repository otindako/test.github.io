import './App.css';
import { SearchBar } from './components/Searchbar';
import { Dashboard } from './components/Dashboard';
import { BottomBar } from './components/footer';

function App() {
  return <>
    <SearchBar />
    <Dashboard />
    <BottomBar />
  </>
}


export default App