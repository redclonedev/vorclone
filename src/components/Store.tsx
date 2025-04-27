// src/components/Store.tsx
import { useState } from 'react'

type Product = {
  id: number
  name: string
  description: string
}

const mockProducts: Product[] = [
  { id: 1, name: 'Placeholder 1', description: 'Description 1' },
  { id: 2, name: 'Placeholder 2', description: 'Description 2' },
  { id: 3, name: 'Placeholder 3', description: 'Description 3' },
]

const Store = () => {
  const [search, setSearch] = useState('')
  const [products] = useState<Product[]>(mockProducts)

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Explore Our Premium Software</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%', maxWidth: '400px' }}
      />

      {filtered.length === 0 ? (
        <p>No products match your search.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filtered.map(product => (
            <li key={product.id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button onClick={() => alert(`Read more about ${product.name}`)}>Read More</button>
              <button onClick={() => alert(`Added ${product.name} to cart`)} style={{ marginLeft: '1rem' }}>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Store
