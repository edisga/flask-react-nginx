#!/bin/bash
sudo apt update
sudo apt install -y software-properties-common curl
sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt update
sudo apt install -y python3.9
sudo apt-get install -y python3-venv
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
cd ~/codes
cd api/

sudo python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

cd ~/codes
cd frontend/
npm install
npm run build
sudo cp flaskapi.service /etc/systemd/service/
