#!/bin/bash

#git commit -am 'deploying...'
#git push

ssh -i voices-of-hope.pem ec2-user@3.15.234.3 -T <<'ENDSSH'

  sudo su -
  cd /home/ec2-user/voices-of-hope
  forever stop index.js
  git pull
  git reset --hard origin/master
  npm install
  npm run build
  forever start index.js

ENDSSH
