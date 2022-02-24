import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
// import App from './App';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import NoPage from './NoPage/NoPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();