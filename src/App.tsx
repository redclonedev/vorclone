// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Store from './components/Store'
import Tools from './components/Tools'
import OpenSource from './components/OpenSource'
import Account from './components/Account'

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Vorclone Studio</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/tools">Tools</Link>
            <Link to="/open-source">Open Source</Link>
            <Link to="/account">Account</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Vorclone. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
