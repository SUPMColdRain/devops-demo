#!/bin/bash
# bash /c/Users/fried/WebstormProjects/studying-lab/harbor.sh

# method 1: download from network
#wget -c https://github.com/docker/compose/releases/download/1.25.5/docker-compose-Linux-x86_64
#mv docker-compose-Linux-x86_64 /usr/bin/docker-compose
# method 2: copy from pc
cp /c/Users/fried/WebstormProjects/studying-lab/docker-compose-Linux-x86_64 /usr/bin/docker-compose
# give privilege
chmod a+x /usr/bin/docker-compose


#wget -c https://github.com/goharbor/harbor/releases/download/v2.0.0/harbor-offline-installer-v2.0.0.tgz
#cp /c/Users/fried/harbor-init/harbor-offline-installer-v2.0.0.tgz .
#tar -xf harbor-offline-installer-v2.0.0.tgz
#rm harbor-offline-installer-v2.0.0.tgz
# 没有harbor文件夹的写法
cp -r /c/Users/fried/WebstormProjects/studying-lab/harbor /root/harbor

mkdir /https/ca -p
chmod -R 777 /https/ca/
# shellcheck disable=SC2164
cd /https/ca/
openssl genrsa -des3 -out harbor.key 2048
openssl req -sha512 -new -subj "/C=CN/ST=JX/L=JJ/O=test/OU=test/CN=192.168.99.119" -key harbor.key -out harbor.csr
cp harbor.key  harbor.key.org
openssl rsa -in harbor.key.org -out harbor.key
openssl x509 -req -days 100000 -in harbor.csr -signkey harbor.key -out harbor.crt

# shellcheck disable=SC2164
cd /root/harbor/
#cp /c/Users/fried/WebstormProjects/studying-lab/harbor-init/nginx.conf /root/harbor/
#cp /c/Users/fried/WebstormProjects/studying-lab/harbor-init/harbor.yml /root/harbor/
./install.sh
cp /c/Users/fried/WebstormProjects/studying-lab/harbor/common/config/core/app.conf /root/harbor/common/config/core/app.conf
cp /c/Users/fried/WebstormProjects/studying-lab/harbor/common/config/nginx/nginx.conf /root/harbor/common/config/nginx/nginx.conf

docker-compose up -d

#docker stack deploy -c /c/Users/fried/WebstormProjects/studying-lab/stack-monitor.yml monitor
#docker stack deploy -c /c/Users/fried/WebstormProjects/studying-lab/stack-portainer.yml portainer
