//combine reducers

import { combineReducers } from 'redux'

import generations from './generationsReducer'
import running from './runningReducer'

export default combineReducers({
    generations,
    running
})