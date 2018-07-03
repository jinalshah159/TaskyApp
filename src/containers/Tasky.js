import React, { Component } from 'react';
import AddTask from '../components/addTask'
import {createTask,deleteTask,setSearchText,setPriorityFilter,updateTask} from '../actions/taskAction'
import FilterScreen from '../components/filterTask';
import { connect } from 'react-redux'
import ListTask from '../components/listTask'
import _ from 'lodash'
class Tasky extends Component {
    constructor(){
        super();
        this.state={
            currentPage:1,
            taskPerPage:5
        }
    }
    saveTask = (newTask) => {
        this.props.createTask(newTask);
    };
    deleteTask = (id) => {
        this.props.deleteTask(id);
    };
    editTask = (editedTask) => {
        this.props.updateTask(editedTask);
    }
    onPriorityFilterChange = (value) => {
        this.props.setPriorityFilter(value);
    };
    onSearchTextChange = (text) => {
        this.props.setSearchText(text);
    };
    render() {
        const { currentPage, taskPerPage } = this.state;

        let taskys = (this.props.priorityFilter!=="All")?
            _.filter(this.props.tasks,(obj) => { return (obj.categories===this.props.priorityFilter &&
                (_.includes(obj.title, this.props.searchText)))})
            : _.filter(this.props.tasks,(obj) => { return (_.includes(obj.title, this.props.searchText ))})
      debugger
        const indexOfLastTodo = currentPage * taskPerPage;
        const indexOfFirstTodo = indexOfLastTodo - taskPerPage;
        const currentTodos = taskys.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(taskys.length / taskPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="row content">
                <div className="col-sm-2 sidenav">
                    <FilterScreen selectedPriority={this.props.priorityFilter}
                                  searchText={this.props.searchText}
                                  onPriorityFilterChange={this.onPriorityFilterChange}
                                  onSearchTextChange={this.onSearchTextChange}/>
                </div>
                <div className={'col-sm-8 text-left'}>
                    <AddTask saveTask={this.saveTask}/>
                    <ListTask list={currentTodos}
                              deleteTask={this.deleteTask}
                              editTask={this.editTask}
                    />
                    <ul className="pagination">
                        { pageNumbers.map((i,index)=>{
                            return <li key={index} onClick={()=>{this.setState({currentPage:i})}}>
                                <a>{i}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    tasks:state.task.task,
    priorityFilter:state.task.priorityFilter,
    searchText:state.task.searchText
});


const mapActionToProps = ({
    createTask,updateTask,setPriorityFilter,setSearchText,deleteTask,
});

export default connect(mapStateToProps, mapActionToProps)(Tasky);


