import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';



class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.task.id,
      title:props.task.title,
      content:props.task.content,
      categories:props.task.categories,
    }
  }

  editClick = () => {
    let editedObj = {
      id:this.state.id,
      title:this.state.title,
      content:this.state.content,
      categories:this.state.categories
    }
    this.props.handleHide();
    this.props.editTask(editedObj);
  }
  render() {

    return (

      <Modal
        show={this.props.show}
        onHide={()=>this.props.handleHide()}
        container={this}
        aria-labelledby="contained-modal-title-">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            {this.state.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className={"col-sm-4"}>
            Title :
          </h5>
          <p className={'col-sm-8'}>
            <input value={this.state.title}
                   onChange={()=>{this.setState({title:document.getElementById('txtTitleText').value})}}
                   id={'txtTitleText'}
                   className={'form-control'}/></p>

          <h5 className={"col-sm-4"}>
            Description :
          </h5>
          <p className={'col-sm-8'}>
            <input value={this.state.content}
                   onChange={()=>{this.setState({content:document.getElementById('txtDescription').value})}}
                   id={'txtDescription'}
                   className={'form-control'}/></p>
          <h5 className={"col-sm-4"}>
            Priority :
          </h5>
          <p className={'col-sm-8'}>
            <select id={"selPrioritytemp"}
                    onChange={()=>this.setState({categories:document.getElementById('selPrioritytemp').value})}
                    className={'form-control'}>
              <option value={'High'} selected={("High"===this.state.categories)}>High</option>
              <option value={'Medium'} selected={("Medium"===this.state.categories)}>Medium</option>
              <option value={'Low'} selected={("Low"===this.state.categories)}>Low</option>
            </select>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{this.editClick()}}>Edit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;


