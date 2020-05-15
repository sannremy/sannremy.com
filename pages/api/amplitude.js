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

  // Event type
  const event_type = req.body.event_type

  if (typeof event_type !== 'string') {
    res.status(200).json({ success })
  }

  // Event properties
  const event_properties = req.body.event_properties

  if (typeof event_properties !== 'object') {
    res.status(200).json({ success })
  }

  // User ID
  let user_id = req.cookies.uid
  if (!user_id) {
    user_id = uuidv4()

    res.setHeader('Set-Cookie', [
      `uid=${user_id}; HttpOnly; SameSite=Strict; Domain=src.onl; Secure;`
    ]);
  }

  // IP address
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : null

  if (req.method === 'POST' && event_type) {
    const data = JSON.stringify({
      api_key: process.env.AMPLITUDE_KEY,
      events: [
        {
          user_id,
          event_type,
          event_properties,
          ip,
        }
      ]
    })

    const req = https.request({
      hostname: 'api.amplitude.com',
      path: '/2/httpapi',
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'*/*'
      }
    });

    req.write(data);
    req.end();

    success = true
  }

  res.status(200).json({ success })
}
