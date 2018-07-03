import React, { Component } from 'react'
import TaskComponent from './listComponent'
class ListTask extends Component {
  render () {
    return (
      <div>
        <div className={'panel panel-default'} >
          <div className='panel-heading'>Tasks</div>
          <div className='panel-body'>
            {
              this.props.list.map((task, index) => {
                return <div key={index} className={'list-group-item col-sm-12'}>
                  <TaskComponent deleteTask={this.props.deleteTask} editTask={this.props.editTask} task={task} />
                </div>
              })
            }
          </div>
        </div>

      </div>
    )
  }
}

export default ListTask
