// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Store from './components/Store'
import Tools from './components/Tools'
import Library from './components/Library'
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
            <Link to="/tools">Tools / Open Source</Link>
            <Link to="/library">My Library</Link>
            <Link to="/account">Account</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/open-source" element={<Library />} />
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
