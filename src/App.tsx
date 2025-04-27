import vorcloneLogo from './assets/vorclone.svg' // your Vorclone logo
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <a href="https://vorclone.com" target="_blank" rel="noopener noreferrer">
          <img src={vorcloneLogo} className="logo" alt="Vorclone Logo" />
        </a>
        <h1 className="title">Vorclone</h1>
        <p className="tagline">Powering the Future with Red and Black Precision</p>
      </header>

      <main className="main-content">
        <section className="about">
          <h2>About Vorclone</h2>
          <p>
            Vorclone delivers cutting-edge software solutions designed for speed,
            security, and scalability. Our commitment to excellence drives innovation across industries.
          </p>
        </section>

        <section className="learn-more">
          <a href="https://vorclone.com/about" target="_blank" rel="noopener noreferrer" className="learn-more-button">
            Learn More
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Vorclone. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
