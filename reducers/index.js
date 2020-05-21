import { combineReducers } from 'redux'
import DarkMode from './dark_mode'
import AMA from './ama'
import Tracking from './tracking'

export default combineReducers({
  DarkMode,
  AMA,
  Tracking,
})
