import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
       this.setState({ //gets input from form
           content : e.target.value
       }) 
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // display what ever weve saved in our state
        console.log(this.state);
        //pass the form data to the parent component (Todos.js) so it can be added to the todos list
        this.props.addTodo(this.state);//send this.state because we want to send everything that's been added to state
        // empty state so as to remove the typed in todo. do this in value property of the input field too
        this.setState({
            content:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo : </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo