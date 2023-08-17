Compose sample application
React application with a NodeJS backend using express.js and a MongoDB database
Project structure:


.
├── backend
│   ├── Dockerfile
│   ...
├── compose.yaml
├── frontend
│   ├── ...
│   └── Dockerfile
└── README.md

Run below command to compose the all containers in single line
docker-compose up -d

once all containers created , you will be able to access the react and express application as below
React application: http:localhost:3000
Node application : http:localhost:5000/userlist
you can run apis in post man or any other similar tools.









