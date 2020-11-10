#!/bin/bash

git commit -am 'deploying...'
git push

ssh -i data-bin.pem ec2-user@18.216.107.77 -T <<'ENDSSH'

  sudo su -
  cd /home/ec2-user/voices-of-hope
  forever stop index.js
  git pull
  git reset --hard origin/master
  npm install
  npm run build
  forever start index.js

ENDSSH
