#!/bin/bash

source .env.local

echo "Building..."
yarn build

echo "Deploying sannremy.com..."
lftp -u $FTP_USER,$FTP_PASSWORD $FTP_HOST << EOF
mirror -R out/ /www/
bye
EOF

echo "Done."
