import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Hello World!</h1>
    </div>
  )
}

export default App
