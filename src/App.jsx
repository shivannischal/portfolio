import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home, {Navbar, NotFound} from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App(){
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/contact'element={<Contact />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </Router>
    )
}

export default App;