import React, { useState, useEffect, useRef} from 'react'

export default function App() {
    var form = useRef()
    const [todoList, setTodoList] = useState([]);
    const [wholeList, setWholeList] = useState([]);
    // var add_todo = useRef()
    // console.log(add_todo.current)

    // useEffect(() => {
    //     add_todo.current.addEventListener("click", () => {
    //         console.log('123')
    //         // form.current.submit()
    //         // console.log(form.current)
    //     })
    // }, []);

    function add_todo() {
        if(todoList.length <= 0) {
            setTodoList([form.current.value])
        } else {
            setTodoList(prevList => {
                return [...prevList, form.current.value]
            })
        }
    }



    return (
        <div>
            <h1 className='td-h'>To Do List</h1>
            <div className='m-div'>
                <input type='text' className='input' placeholder='Add a new item' ref={form}></input>
                <img className='input-img' src="../images/plus.png" onClick={add_todo}/>
                <div className='m-div-imgs'>
                    <img src="../images/done.png"/>
                    <img src="../images/all.png"/>
                    <img src="../images/not-done.png"/>
                </div>
            </div>
            <div>
                <ul className='m-list'>
                {todoList.map((name, index) => {
                    return <li key={index}>{name}</li>
                })}
                </ul>
            </div>
        </div>
    )
}