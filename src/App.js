import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About'
import Protected from './pages/Protected';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import AuthContext from './contexts/AuthContext';
import { useState } from 'react';

function App() {

  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {auth ? <Route path="/protected" element={<Protected />} />
        : null }
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
