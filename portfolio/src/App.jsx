import { useState } from 'react'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <article>
          <h1>Hi! I'm Harshita.</h1>
          <p>I'm an aspiring front-end web developer.<br></br>
            You can check out my projects <a href="#">here.</a>
          </p>
        </article>
        <img src="./imgs.png" alt="a woman holding a cat" />

      </main>
    </>
  )
}

export default App
