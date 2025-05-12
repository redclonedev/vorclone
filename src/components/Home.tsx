// src/components/Home.tsx
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Vorclone | Home</title>
      </Helmet>

      <h2>Welcome to Vorclone Studio!</h2>
      <br></br>
      <p>
        At Vorclone, we build premium software for enterprises and open-source tools for the global dev community—powerful, reliable, and accessible.
      </p>
      <br></br>
      <p>
        From enterprise-grade software to open-source tools, Vorclone blends innovation with community.
      </p>

      <br></br>

      <h3>Explore Our Ecosystem:</h3>
      <br></br>

      <ul>
        <li><Link to="/store">Visit the Store</Link> - Discover our premium software offerings</li>
        <br></br>
        <li><Link to="/tools">Check Out Our Free Tools</Link> - From free utilities to developer aids</li>
        <br></br>
        <li><Link to="/open-source">Explore Open Source</Link> - Collaborate, contribute, and innovate</li>
      </ul>
    </div>
  )
}

export default Home
