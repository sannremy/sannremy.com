/**
 * Dark mode
 */
export const toggleDarkMode = () => ({
  type: 'TOGGLE_DARK_MODE',
})

/**
 * AMA
 */
export const addAMAMessage = ({ message }) => ({
  type: 'ADD_MESSAGE',
  message,
})

export const toggleAMA = () => ({
  type: 'TOGGLE_AMA',
})

/**
 * Tracking
 */
const addTracking = ({ eventType, eventProperties, href }) => ({
  type: 'ADD_TRACKING',
  eventType,
  eventProperties,
  href,
})

const resetTracking = () => ({
  type: 'RESET_TRACKING',
})

const shouldSendTracking = (state, { href }) => {
  return href !== null || state.events.length > 5
}

export const sendTracking = ({ eventType, eventProperties, href }) => {
  return (dispatch, getState) => {
    dispatch(addTracking({ eventType, eventProperties, href }))

    if (shouldSendTracking(getState(), { href })) {
      return fetch('/api/amplitude', {
        method: 'post',
        body: JSON.stringify({
          event_type: eventType,
          event_properties: eventProperties,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).finally(() => {
        dispatch(resetTracking())

        if (href) {
          window.location.href = href
        }
      })
    }
  }
}
