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
export const sendTracking = ({ eventType, eventProperties, href }) => {
  fetch('/api/amplitude', {
    method: 'post',
    body: JSON.stringify({
      event_type: eventType,
      event_properties: eventProperties,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).finally(() => {
    if (href) {
      window.location.href = href
    }
  })

  return { type: null };
}
