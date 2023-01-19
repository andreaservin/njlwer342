import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor () {
    super()
    this.state = {
      taskList: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato',],
      handleAddTask: (e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          this.setState({ taskList: [...this.state.taskList, this.state.newTask], newTask: '' })
        }
      },
      newTask: '',
      handleChangeNewTask: (e) => {
        this.setState({ newTask: e.target.value })
      } 
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {
              this.state.taskList.map((value, key) => (
                <li key={key}>{value}</li>
              ))
            }
          </ul>
           <form>
             <input onKeyDown={this.state.handleAddTask} value={this.state.newTask} onChange={this.state.handleChangeNewTask} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
