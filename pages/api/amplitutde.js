const https = require('https')
const { v4: uuidv4 } = require('uuid');

export const config = {
  api: {
    bodyParser: true,
    sizeLimit: '32kb',
  },
}

export default (req, res) => {
  let success = false

  const event_type = req.body.event_type

  let user_id = req.cookies.user_id
  if (!user_id) {
    user_id = uuidv4()
    res.setHeader('Set-Cookie', [
      `uid=${user_id}; HttpOnly; SameSite=Strict; Domain=src.onl; Secure;`
    ]);
  }

  if (req.method === 'POST' && event_type) {
    const data = JSON.stringify({
      api_key: process.env.AMPLITUDE_KEY,
      events: [
        {
          user_id,
          event_type
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
