#!/bin/bash

ssh -i voices-of-hope.pem ec2-user@3.21.15.203 -T <<'ENDSSH'

  sudo su -
  cd /home/ec2-user/voices-of-hope
  forever stop index.js
  git pull
  git reset --hard origin/master
#  npm install
  npm run build
  forever start -l /home/ec2-user/voices-of-hope/forever.log -a index.js

ENDSSH
