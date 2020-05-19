const DarkMode = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return !state
    default:
      return state
  }
}

export default DarkMode
