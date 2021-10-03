# List of errors and its solution

![docker issue](https://readmegeppetto.s3.amazonaws.com/dockerissue.png)
# 1. Permission denied for docker:
- If you have face these kind of issue `docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post` for ubuntu or mac
- ## [Solution](https://docs.docker.com/engine/install/linux-postinstall/)
- Once you have completed steps in above link, don't forget to restart the machine and then run the bash file.


# 2. Version unsupported for docker-compose:
- If you have face any version issue with regards to docker-compose like `Version in "./docker-compose.yml" is unsupported`.  
- ### [Reference](https://docs.docker.com/compose/compose-file/compose-versioning/)
-  Please check the docker-compose version by using below command.
```sh
$ docker-compose -v
```
- If you docker-compose version have below `1.22` please update the docker-compose version.
- ## [Solution](https://docs.docker.com/compose/install/#upgrading)
- Once you successfully updated the docker-compose run the bash file again.
