import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Card from './Card.tsx'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card
      title="Sample Card"
      description="This is a sample card description."
      imageUrl="https://via.placeholder.com/150"
    />
    <App />
  </StrictMode>,
)
