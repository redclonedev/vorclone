// src/components/Tools.tsx
import { useState } from 'react'

type Tool = {
  id: number
  name: string
  description: string
  downloadUrl: string
}

const mockTools: Tool[] = [
  {
    id: 1,
    name: 'Placeholder 1',
    description: 'Description 1',
    downloadUrl: '/downloads/placeholder1.zip',
  },
  {
    id: 2,
    name: 'Placeholder 2',
    description: 'Description 2',
    downloadUrl: '/downloads/placeholder2.zip',
  },
  {
    id: 3,
    name: 'Placeholder 3',
    description: 'Description 3',
    downloadUrl: '/downloads/placeholder3.zip',
  },
]

const Tools = () => {
  const [search, setSearch] = useState('')
  const [tools] = useState<Tool[]>(mockTools)

  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Our Tools</h2>
      <input
        type="text"
        placeholder="Search tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%', maxWidth: '400px' }}
      />

      {filtered.length === 0 ? (
        <p>No tools found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filtered.map(tool => (
            <li key={tool.id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <a href={tool.downloadUrl} download>
                <button>Download</button>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Tools
