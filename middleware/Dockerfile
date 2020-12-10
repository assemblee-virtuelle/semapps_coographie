FROM node:12.16-alpine

# Default arguments
ARG SELECTED_BRANCH=master
ARG SELECTED_DIR=.

RUN node -v
RUN npm -v

RUN npm install pm2 -g

RUN apk add --update --no-cache autoconf bash libtool automake python alpine-sdk openssh-keygen yarn nano

# Force cache invalidation if the selected branch changed since last build
# If we don't do that, Docker may skip the git clone command
ADD https://api.github.com/repos/assemblee-virtuelle/semapps/git/refs/heads/$SELECTED_BRANCH git-version.json

RUN git clone https://github.com/assemblee-virtuelle/semapps /semapps_clone

WORKDIR /semapps_clone
RUN git checkout $SELECTED_BRANCH

# Move selected dir to root /app directory
RUN mv $SELECTED_DIR /app

# We can now remove the clone
WORKDIR /app
RUN rm -Rf semapps_clone

RUN ./initialize.sh

RUN npm install

COPY ./ecosystem.config.js /app
COPY ./app /app

EXPOSE 3000

CMD [ "pm2-runtime", "ecosystem.config.js" ]
