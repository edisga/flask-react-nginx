#!/bin/bash

source ~/.bashrc
nvm install 14
nvm use 14

# You might need to run this commands after doing:
# sudo su
# su<user>

cd ~/codes/flask-react-nginx
cd frontend/
npm install
npm run build

sudo cp -R ~/codes/flask-react-nginx/frontend /var/www/html/build

