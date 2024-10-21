import { useState } from 'react'

function App() {
  return (
    <>
      <div className='header'>
        <h1>Lista de Flor</h1>
        <div className='agregarNuevaTarea'>
          <input type="text" />
          <button type="submit">ADD</button>
        </div>
      </div>
      <ul className='lista'>
        <li className='tareita'>
          <input type="checkbox" />
          <span>Task N</span>
          <button className='tachito'>🗑️</button>
        </li>
        <li className='tareita'>
          <input type="checkbox" />
          <span>Task N-1</span>
          <button className='tachito'>🗑️</button>
        </li>
        <li className='tareita'>
          <input type="checkbox" />
          <span>Completed Task N-2</span>
          <button className='tachito'>🗑️</button>
        </li>
        <li className='tareita'>
          <input type="checkbox" />
          <span>Task K</span>
          <button className='tachito'>🗑️</button>
        </li>
        <li className='tareita'>
          <input type="checkbox" />
          <span>Task 2</span>
          <button className='tachito'>🗑️</button>
        </li>
        <li className='tareita'>
          <input type="checkbox" />
          <span>Completed Task 1</span>
          <button className='tachito'>🗑️</button>
        </li>
      </ul>
    </>
  )
}

export default App;
