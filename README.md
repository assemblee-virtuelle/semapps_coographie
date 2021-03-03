# SemApps Coographie

## Initial setup

### Install Docker

Install Docker engine:
https://docs.docker.com/engine/install/

> For Ubuntu 19.10, see [this comment](https://github.com/docker/for-linux/issues/833#issuecomment-544236041)

Configure Docker user as root:
https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user

Install Docker-compose:
https://docs.docker.com/compose/install/

### Clone this repo

```
git clone https://github.com/assemblee-virtuelle/semapps_coographie.git
```

### Build and start the containers

```
make build
make start
```

## Maintenance

### Access the middleware REPL

```
docker exec -it middleware pm2 attach 0
```

### Follow the logs

```
docker exec -it middleware pm2 logs
```
