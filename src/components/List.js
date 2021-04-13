import React from 'react'

export default function List(props) {

    function deleteHandler(event, id) {
        
       props.setTodos(props.todos.filter((el)=>el.id !== id));
    }
    return (
        <div>
            {props.todos.map(todo => (
                <div className="row mx-1 px-5 pb-3 w-80" id={todo.key}>
                    <div className="col mx-auto">
                        <div className="row px-3 align-items-center todo-item rounded">
                            <div className="col-auto m-1 p-0 d-flex align-items-center">
                                <h2 className="m-0 p-0">
                                    <i className="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                                    <i className="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                                </h2>
                            </div>
                            <div className="col px-1 m-1 d-flex align-items-center">
                                <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readOnly value={todo.text} title="Buy groceries for next week" />
                                <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value={todo.text} />
                            </div>

                            <div className="col-auto m-1 p-0 todo-actions">
                                <div className="row d-flex align-items-center justify-content-end">
                                    
                                    <h5 className="m-0 p-0 px-2">
                                        <i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo" onClick={(event) => deleteHandler(event, todo.id)}></i>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
