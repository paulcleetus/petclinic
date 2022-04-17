# petclinic
API Service written in NodeJS, MongoDB (Mongoose) as part of the scalable services assignment 


# Pre-requisites
- Git 
- Docker
- Docker-Compose

# Run the service

Checkout locally the code from repo
`git clone https://github.com/paulcleetus/petclinic.git`

Change to the checkout directory and Build the Docker Image
`docker-compose build`

See the list of Docker Images available
`docker images`

Run the Docker Images
`docker-compose up`

Get the container ID
`docker ps`

Get the container log
`docker logs <container id>`

See the service output in command line, run
`curl -i localhost:8081`

See the service output in browser, visit
`http://localhost:8081`

Stop the running containers
`docker stop <container id>`
OR
`Ctrl + C` in the CMD

# Connecting the MongoDB Service
You can install mongoDB Compass GUI to directly interact with the MongoDB Service Container
on the URL `mongodb://localhost:27017`
if username and password are set, update those in connection string

# Testing the API Service
You can install Postman API testing utility and load the included Postman test collection to test the services when they are running.



