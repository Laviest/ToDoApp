import React, { useState, useEffect, useRef} from 'react'

export default function App() {
    var form = useRef()
    var item_l = useRef()
    var done = useRef()
    var deleteItem = useRef()

    const [todoList, setTodoList] = useState([]);
    const [wholeList, setWholeList] = useState([]);

    function add_todo() {
        var nItem = form.current.value
        if(nItem.length <= 2) {
            item_l.current.classList.add("show")
        } else {
            item_l.current.classList.remove("show")
            if(todoList.length <= 0) {
                setTodoList([nItem])
            } else {
                setTodoList(prevList => {
                    return [...prevList, nItem]
                })
            }
            form.current.value = "";
        }
    }

    function delete_item(num) {
        setTodoList(prevList => prevList.filter((item) => {
            return item !== todoList[num];
        }))
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
            <h1 className='item-l' ref={item_l}>Item length must be longer than 2.</h1>
            <div>
                <ul className='m-list'>
                {todoList.map((name, index) => {
                    return <div key={index} className='item-div'>
                                <li>{index + 1}. {name}</li>
                                <img ref={done} src="images/check.png"/>
                                <img src="images/delete.jpg" onClick={() => delete_item(index)}/>
                            </div>
                })}
                </ul>
            </div>
        </div>
    )
}