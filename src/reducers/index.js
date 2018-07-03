import { combineReducers } from 'redux'
import TaskReducer from './taskReducer'

const rootReducer = combineReducers({
  task: TaskReducer
})

export default rootReducer
