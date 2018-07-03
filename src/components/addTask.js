import React, { Component } from 'react';

class AddTask extends Component {
  saveTask = () => {
    let newTaskObj = {
      title:document.getElementById('txtTitle').value,
      content:document.getElementById('txtDesc').value,
      categories:document.getElementById('selPriority').value,
      id:new Date().valueOf()
    }
    this.props.saveTask(newTaskObj);
    document.getElementById('txtTitle').value=''
    document.getElementById('txtDesc').value=''
    document.getElementById('selPriority').value='High'
  }

  render() {


    return (

      <div className={'panel panel-default'} >
        <div className="panel-heading">Add Task</div>
        <div className="panel-body">
          <div className={"form-group"}>
            <div className={"col-sm-3"}>
              <input className={'form-control'} id='txtTitle' placeholder={'Title'} type={'text'} />
            </div>
            <div className={"col-sm-5"}>
              <input className={'form-control'} id='txtDesc' placeholder={'Description'} type={'text'} />
            </div>
            <div className="col-sm-2">
              <select id={"selPriority"} className={'form-control'}>
                <option value={'High'}>High</option>
                <option value={'Medium'}>Medium</option>
                <option value={'Low'}>Low</option>
              </select>
            </div>
            <div className={"col-sm-2"}>
              <button className={'btn btn-info'} onClick={()=>{this.saveTask()}}>Add Task</button>
            </div>
          </div>

        </div>
      </div>



    );
  }
}

export default AddTask;


