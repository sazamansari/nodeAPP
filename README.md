1. reverse proxy
   Load balancer
   Http Server

2. NGNEX
sudo yum install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx


3.
sudo yum install git

4.

sudo yum install nodejs

5.

sudo npm i pm2 -g
pm2 start index

# Other pm2 commands
pm2 show app
pm2 status
pm2 restart app
pm2 stop app
pm2 logs (Show log stream)
pm2 flush (Clear logs)

# To make sure app starts when reboot
pm2 startup ubuntu

# nodeAPP
