import {CREATE_TASK, UPDATE_TASK, DELETE_TASK, PRIORITY_FILTER_SET, SEARCH_TEXT_SET} from './index'

export const createTask = (request) => {
  return {
    type: CREATE_TASK,
    payload: request
  }
}

export const updateTask = (request) => {
  return {
    type: UPDATE_TASK,
    payload: request
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

export const setPriorityFilter = (str) => {
  return {
    type: PRIORITY_FILTER_SET,
    payload: str
  }
}

export const setSearchText = (str) => {
  return {
    type: SEARCH_TEXT_SET,
    payload: str
  }
}
