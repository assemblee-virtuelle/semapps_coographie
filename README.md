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
git clone git@github.com:assemblee-virtuelle/semapps_coographie.git
```

### Build the containers

```
make build
```

### Generate SSL certificates

```
./init-letsencrypt.sh
```

You should edit the file and run the command once per domain name.
If you have problems to launch Nginx because of missing certificates, you should edit the /nginx/conf.d/app.conf file and remove all HTTPS config. And restore this file after the certificates have been created.

## Maintenance

### Access the middleware REPL

```
docker exec -it middleware pm2 attach 0
```

### Follow the logs

```
docker exec -it middleware pm2 logs
```

## Frequent errors

### 502 Bad Gateway on the middleware

Nginx needs to be restarted to take into accounts updates in the middleware.

```
docker-compose restart nginx
```
