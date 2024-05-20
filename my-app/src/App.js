import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Main from './components/Main/Main';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/#home" element={<Main />} />
          <Route path="/#about" element={<Main />} />
          <Route path="/#experience" element={<Main />} />
          <Route path="/#projects" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;