import React, { Component } from "react";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
        this.add = props.add;
    }

    handleChange = (event) => {
        this.setState(
            { todo: event.target.value }
        )
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.add(this.state.todo);
        console.log(this.state.todo);
        this.setState(
            { todo: "" }
        )
    }

    render() {
        return (
            <div>
                <h4>AddTodo</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="todo">Todo</label>
                        <input type="text" id="todo" value={this.state.todo} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <input type="submit" value="Save" />
                    </div>

                </form>
            </div>

        );
    }
}

export default AddTodo;