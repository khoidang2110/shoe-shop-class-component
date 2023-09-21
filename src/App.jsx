import { useState } from 'react'

import Ex_Shoe from './components/Ex_Shoe'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Ex_Shoe/>
    </>
  )
}

export default App
