FROM node:12.16-alpine

# Default arguments
ARG SELECTED_BRANCH=master
ARG SELECTED_DIR=.

RUN node -v
RUN npm -v

RUN apk add --update --no-cache git bash yarn nano

RUN npm install serve -g

# Force cache invalidation if the selected branch changed since last build
# If we don't do that, Docker may skip the git clone command
ADD https://api.github.com/repos/assemblee-virtuelle/semapps/git/refs/heads/$SELECTED_BRANCH git-version.json

RUN git clone https://github.com/assemblee-virtuelle/semapps.git /semapps_clone

WORKDIR /semapps_clone
RUN git checkout $SELECTED_BRANCH

# Move selected dir to root /app directory
RUN mv $SELECTED_DIR /app

# We can now remove the clone
WORKDIR /app
RUN rm -Rf /semapps_clone

RUN npm install

COPY ./app /app

RUN npm run build

EXPOSE 5000

CMD serve -s build -l 5000
