import React from 'react';

//UI/functional component
//todos destructuring parameter grabs the todos of the props object coming 4rm the parent component (App.js)
const Todos = ({todos, deleteTodo }) => { 
    //Checks if we have a todo from the App.js file. If yes, iterate over it using the .map method
    const todoList = todos.length ?  (
        todos.map((single_todo) => {
            return (
                <div onClick={ () => { deleteTodo(single_todo.id) }  } className="collection-item" key={single_todo.id}>
                    <span>{ single_todo.content }</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left</p>
    );

    //return a template to this component
    return (
        // collection class name is a default class that comes with materialize css framework added in public/index.html
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos;
