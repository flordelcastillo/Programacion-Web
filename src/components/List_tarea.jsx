import React from "react";

function List_tarea(){

    return (
        <ul className='List-tarea'>  
            <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task N</p> <button className='basura'>🗑️</button></li>
            <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task N-1</p> <button className='basura'>🗑️</button></li>
            <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='completada'>Completed Task N-2</p> <button className='basura'>🗑️</button></li>
            <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task k</p> <button className='basura'>🗑️</button></li>
            <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task 2</p> <button className='basura'>🗑️</button></li>
            <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='completada'>Completed Task 1</p> <button className='basura'>🗑️</button></li>
        </ul>
    )

}

export default List_tarea;