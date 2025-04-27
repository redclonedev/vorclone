import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Vorclone</h1>
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

// Updated Placeholder Components
function Home() {
  return <div>Welcome to Vorclone - Cutting-edge software solutions.</div>
}

function Store() {
  return <div>Explore our premium software products.</div>
}

function Tools() {
  return <div>Access powerful free and premium tools developed by Vorclone.</div>
}

function OpenSource() {
  return <div>Check out our open source projects and contribute.</div>
}

function Account() {
  return <div>Manage your account: login, register, profile settings.</div>
}

export default App
