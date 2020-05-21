const Tracking = (state = {
  events: [],
}, action
) => {
  switch (action.type) {
    case 'ADD_TRACKING':
      const eventsToAdd = [...state.events];
      eventsToAdd.push({
        event_type: action.eventType,
        event_properties: action.eventProperties,
        time: Date.now(),
      })

      return {
        ...state,
        events: eventsToAdd,
      }
    case 'RESET_TRACKING':
      return {
        ...state,
        events: [],
      }
    default:
      return state
  }
}

export default Tracking
