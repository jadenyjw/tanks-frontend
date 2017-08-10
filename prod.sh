npm run build
scp -r build/* jadenyjw@ssh.tanks.ml:~/tanks-tmp 
ssh jadenyjw@ssh.tanks.ml 'sudo rm -rf /var/www/tanks/* ; sudo mv ~/tanks-tmp/* /var/www/tanks/'
