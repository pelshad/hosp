import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Sub from './pages/Sub';

const App = () => {
    return (
        <div className='App'>
        <Header />
        <Routes>
            <Route>
                <Route path="/*" element={<Main />} />
                <Route path="/Sub/*" element={<Sub />} />
            </Route>
        </Routes>
        <Footer />
        </div>
    );
};

export default App;