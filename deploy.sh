#!/bin/bash

npm run build
git commit -am 'building dist'
git push

ssh -i voices-of-hope.pem ec2-user@3.21.15.203 -T <<'ENDSSH'

  sudo su -
  cd /home/ec2-user/voices-of-hope
  forever stop index.js
  git pull
  git reset --hard origin/master
  npm install
  forever start index.js

ENDSSH
