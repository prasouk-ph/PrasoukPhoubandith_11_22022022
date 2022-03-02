import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Accomodation from './components/pages/Accomodation/Accomodation';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accomodation/:id" element={<Accomodation />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
