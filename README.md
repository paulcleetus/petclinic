# petclinic
Service written in NodeJS as part of the scalable services assignment 


Pre-requisites:
Git 
Docker

To Run the service

`git clone https://github.com/paulcleetus/petclinic.git`

Build the Docker Image
`docker build . -t pcleetus/node-petclinic`

See the list of Docker Images available
`docker images`

Run the Docker Image, expose the containers 8081 port to the local machines 49160 port
`docker run -p 49160:8081 -d pcleetus/node-petclinic`

Get the container ID
`docker ps`

Get the container log
`docker logs <container id>`

See the service output in command line, run
`curl -i localhost:49160`

See the service output in browser, visit
`http://localhost:49160`

