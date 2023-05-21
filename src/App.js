import React, { useState, useEffect, useRef} from 'react'

export default function App() {
    var form = useRef()
    var item_l = useRef()

    const [todoList, setTodoList] = useState([]);
    const [crossOutList, setCrossOutList] = useState([]);
    const [showDone, setShowDone] = useState(false);
    const [showAll, setShowAll] = useState(true);
    const [showNotDone, setShowNotDone] = useState(false)

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

    function cross_item(num) {
        var value = todoList[num];
        if(crossOutList.includes(value)) {
            setCrossOutList(prevList => prevList.filter((item) => {
                return item != value;
            }))
        } else {
            setCrossOutList(prevList => [...prevList, value])
        }
    }

    function show_done() {
        setShowAll(false)
        setShowNotDone(false)
        setShowDone(true)
    }

    function show_not_done() {
        setShowAll(false)
        setShowNotDone(true)
        setShowDone(false)
    }

    function show_all() {
        setShowAll(true)
        setShowNotDone(false)
        setShowDone(false)
    }

    return (
        <div>
            <h1 className='td-h'>To Do List</h1>
            <div className='m-div'>
                <input type='text' className='input' placeholder='Add a new item' ref={form}></input>
                <img className='input-img' src="../images/plus.png" onClick={add_todo}/>
                <div className='m-div-imgs'>
                    <img src="../images/done.png" onClick={() => show_done()}/>
                    <img src="../images/all.png" onClick={() => show_all()}/>
                    <img src="../images/not-done.png" onClick={() => show_not_done()}/>
                </div>
            </div>
            <h1 className='item-l' ref={item_l}>Item length must be longer than 2.</h1>
            <div>
                <ul className='m-list'>
                {todoList.map((name, index) => {
                    if(showAll) {
                        if(crossOutList.includes(name)) {
                            return  <div key={index} className='item-div'>
                                        <li>{index + 1}. <s>{name}</s></li>
                                        <img src="images/check.png" onClick={() => cross_item(index)}/>
                                        <img src="images/delete.jpg" onClick={() => delete_item(index)}/>
                                    </div>
                        } else {
                            return <div key={index} className='item-div'>
                                        <li>{index + 1}. {name}</li>
                                        <img src="images/check.png" onClick={() => cross_item(index)}/>
                                        <img src="images/delete.jpg" onClick={() => delete_item(index)}/>
                                    </div>
                            }
                    } else if(showDone) {
                        if(crossOutList.includes(name)) {
                            return  <div key={index} className='item-div'>
                                        <li>{index + 1}. <s>{name}</s></li>
                                        <img src="images/check.png" onClick={() => cross_item(index)}/>
                                        <img src="images/delete.jpg" onClick={() => delete_item(index)}/>
                                    </div>
                        }
                    } else if(showNotDone) {
                        if(!crossOutList.includes(name)) {
                            return  <div key={index} className='item-div'>
                                        <li>{index + 1}. {name}</li>
                                        <img src="images/check.png" onClick={() => cross_item(index)}/>
                                        <img src="images/delete.jpg" onClick={() => delete_item(index)}/>
                                    </div>
                        }
                    }
                })}
                </ul>
            </div>
        </div>
    )
}