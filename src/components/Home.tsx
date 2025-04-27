// src/components/Home.tsx
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Welcome to Vorclone Studio!</h2>
      <br></br>
      <p>
        At Vorclone, we specialize in building high-quality software solutions that empower businesses and developers alike.
        Our mission is to deliver both premium closed-source products tailored for enterprise performance and reliability,
        as well as free and open source tools designed to foster innovation and accessibility within the global tech community.
      </p>
      <br></br>
      <p>
        Whether you're looking for cutting-edge business software or tools to contribute to and build on,
        Vorclone offers a unique blend of proprietary and community-driven solutions.
      </p>

      <br></br>

      <h3>Explore Our Ecosystem:</h3>
      <br></br>

      <ul>
        <li><Link to="/store">Visit the Store</Link> - Discover our premium software offerings</li>
        <li><Link to="/tools">Check Out Our Tools</Link> - From utilities to developer aids</li>
        <li><Link to="/open-source">Explore Open Source</Link> - Collaborate, contribute, and innovate</li>
      </ul>
    </div>
  )
}

export default Home
