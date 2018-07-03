import React, { Component } from 'react';
import {Label} from 'react-bootstrap';
import ModalComponent from './modalComponent';


class ListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false
        }
    }
    handleHide = () => {
        this.setState({ show: false });
    }
    delete = (id) => {
        this.props.deleteTask(id)
    }
    render() {
        const {title,categories,content,id} = this.props.task;

        return (

                <div>

                    <div className={'col-sm-6'}>
                        <h4>{title} {"  "}<small>{content}</small></h4>
                    </div>
                    <div className={'col-sm-2'}>
                        <h4><Label bsStyle={(categories==='High')?"danger":(categories==='Medium')?"primary":"warning"}>{categories}</Label></h4>
                    </div>

                    <div className={'col-sm-1'} onClick={()=>{this.setState({ show: true })}}>
                        <h4><span className="glyphicon glyphicon-pencil"/></h4>
                    </div>
                    <div className={'col-sm-1'} onClick={()=>{this.delete(id)}}>
                        <h4><span className={'glyphicon glyphicon-trash'}/></h4>
                    </div>
                    <ModalComponent show={this.state.show} task={this.props.task} editTask={this.props.editTask}  handleHide={this.handleHide} />
                </div>

        );
    }
}

export default ListComponent;


