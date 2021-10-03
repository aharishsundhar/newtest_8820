# Run Generated application in local
![Geppetto logo](https://readmegeppetto.s3.amazonaws.com/banner_home.svg)
## Prerequisites:
- [Docker -v 18.09.7](https://docs.docker.com/engine/install/)
- [Docker-compose -v 1.27.3](https://docs.docker.com/compose/install/)
- [bash](https://fossbytes.com/installing-gnu-bash-4-4-linux-distros/)


### Steps Followed to run application in docker-compose:
- To run the generated application in docker follow the below steps .

- Once the generated code is cloned the desired directory to run the application is reached using the below commands in the terminal .

```sh
$ cd devops/local/docker
```

- To check the list of available files in the present directory use the below command in the terminal .
```sh
$ ls - for ubuntu or mac

$ dir - for windows
```
- The command list outputs showing the following files as shown below .

```sh
docker-compose.yml  geppetto_compose.sh  mongo.js
```
- Now run the script file by using the below command.
```sh
$ bash geppetto_compose.sh
```
- You will see the list avabile method like below,
```
These are the usage options for help.
Flag c - To Create new containers and images.
Flag d - To Delete all the containers and images.
Flag r - To Restart the stopped containers.
Flag s - To Stop the running containers.
Here's the usage statement:

bash geppetto_compose.sh -c (or) bash geppetto_compose.sh -d (or) bash geppetto_compose.sh -r (or) bash geppetto_compose.sh -s
```
- From the above list of above files to run the generated application use the below command in the terminal .The -c flag indicates creating new docker images for the very first installation of the generated application .
```sh
bash geppetto_compose.sh -c
```
- On the successful completion of the script execution the application, you get the URL for that.
- Once script execution is completed make sure to check the all docker container status is `up` by using below command. Like below image.
```sh
docker ps -a
```
![docker conatiner status](https://readmegeppetto.s3.amazonaws.com/readme.png)

- Once the status of all containers are up, then your app is running in http://localhost:5055

- In cause if you have face any issue, please refer the [ERROR.md](./ERROR.md) for your reference.

Thanks for using [Geppetto Builder](https://stage.app.geppettosoftware.com).
