docker notes
------
#
####docker delete  All image
>  docker kill $(docker ps -a -q)
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q -f dangling=true)
docker rmi $(docker images -q)

### 列出当前所有正在运行的container
$docker ps
### 列出所有的container
$docker ps -a
### 列出最近一次启动的container
$docker ps -l

docker  build -t -d  test  .
docker run -i -t ubuntu bash #登陆到docker容器
docker run -i -t -d ubuntu bash
##net
主机IP
ip -4 -o addr show eth0
Docker ip
docker run ubuntu ip -r -o addr show eth0
___
###mac docker 
sudo brew install boot2docker
sudo boot2docker init
sudo boot2docker up

$ boot2docker stop
$ boot2docker download
$ boot2docker up
boot2docker status
docker version
boot2docker ip
boot2docker upgrade

docker run -d -P --name web nginx
docker port web






*. aaa

>
sss
>

![]()
[baidu.com](http://www.baidu.com)
*dsdsdsds*
**sdsdsdsds**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


****


