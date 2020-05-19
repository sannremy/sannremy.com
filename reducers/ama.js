const AMA = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        message: action.message,
      }
    case 'TOGGLE_AMA':
      return {
        ...state,
        isOpened: !state.isOpened,
      }
    default:
      return state
  }
}

export default AMA
