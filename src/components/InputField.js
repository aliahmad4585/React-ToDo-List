import React from 'react'

export default function InputField({ setInputText, inputText, todos, setTodos }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const addTodoTolist = () => {
        setTodos([
            ...todos, { text: inputText, completed: false, id:Math.random()*1000 }
        ])
       setInputText('')
       console.log(todos)
    }
    return (
        <div>
            <div className="row m-1 p-3">
                <div className="col col-11 mx-auto">
                    <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                        <div className="col">
                            <input onChange={inputTextHandler} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .." value={inputText} />
                        </div>
                        <div className="col-auto px-0 mx-0 mr-2">
                            <button onClick={addTodoTolist} type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
