const https = require('https')
const { v4: uuidv4 } = require('uuid')

export const config = {
  api: {
    bodyParser: true,
    sizeLimit: '32kb',
  },
}

export default (req, res) => {
  let success = false
  let httpCode = 400

  // Events
  const events = req.body.events

  // Check if array
  if (!Array.isArray(events) && events.length > 0) {
    res.status(httpCode).json({ success })
    return
  }

  // User ID
  let user_id = req.cookies.uid
  if (!user_id) {
    user_id = uuidv4()

    res.setHeader('Set-Cookie', [
      `uid=${user_id}; HttpOnly; SameSite=Strict; Domain=src.onl; Secure;`
    ])
  }

  // IP address
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : null

  // Check event_type and event_properties
  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    if (!event.hasOwnProperty('event_type')) {
      res.status(httpCode).json({ success })
      return
    }

    if (
      event.hasOwnProperty('event_properties')
      && typeof event.event_properties !== 'object'
    ) {
      res.status(httpCode).json({ success })
      return
    }

    event.user_id = user_id
    event.ip = ip
  }

  if (req.method === 'POST') {
    const data = JSON.stringify({
      api_key: process.env.AMPLITUDE_KEY,
      events,
    })

    const req = https.request({
      hostname: 'api.amplitude.com',
      path: '/2/httpapi',
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'*/*'
      }
    })

    req.write(data)
    req.end()

    httpCode = 200
    success = true
  }

  res.status(httpCode).json({ success })
}
