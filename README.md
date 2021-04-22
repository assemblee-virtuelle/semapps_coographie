# SemApps Coographie

## Initial setup

### Install Docker

```
./install-docker.sh
```

This script will:

- Install Docker engine ([official doc](https://docs.docker.com/engine/install/))
- Configure Docker user as root ([official doc](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user))
- Install Docker-compose ([official doc](https://docs.docker.com/compose/install/))

### Clone this repo

```
git clone https://github.com/assemblee-virtuelle/semapps_coographie.git
```

### Build and start the containers

```
make build-prod
make start-prod
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
