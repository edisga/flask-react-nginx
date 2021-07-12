#!/bin/bash
sudo apt update
sudo apt install -y software-properties-common curl
sudo apt install -y nginx
sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt update
sudo apt install -y python3.8
sudo apt install -y python3.8-distutils
sudo apt-get install -y python3.8-venv
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
sudo python3.8 get-pip.py
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
cd ~/codes/flask-react-nginx
cd api/
sudo python3.8 -m venv env
source env/bin/activate
pip install gunicorn
pip install -r requirements.txt
cd ~/codes/flask-react-nginx
sudo cp flaskapi.service /etc/systemd/system
sudo systemctl daemon-reload
service flaskapi start
service flaskapi status
exec bash
