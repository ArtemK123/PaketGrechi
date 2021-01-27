# Paket Grechi

## paket team

This project was done as a testing task solution in scope of the INT20H https://int20h.best-kyiv.org/

## How to launch
1. Go to our website - https://paket-grechi.azurewebsites.net/ (Note that azure may automatically stop the site when there are no visitors and restart it after the first request. So, you may need to wait a little while the site is restarting)
2. Launch it locally via docker - docker-compose up in the root folder
3. Launch it locally in separate processes - go to frontend and backend folders and run npm start there

## Dependencies
1. ReactJS in the frontend
2. ExpressJS/nodeJS server in the backend
3. Docker
4. Azure Web App

## How it works
- Changes from frontend and backend apps are populated in the same repository but stored in different folders.
- Each change in main branch triggers CI/CD pipeline, which builds frontend and backend separately, install them in docker containers and push items to dockerhub
- Dockerhub repositories contain webhooks, which are triggered when a new image appears in a repository. That image will be automatically redeployed to the Azure Web Apps
- Frontend and backend images are deployed to Azure Web Apps independently. In fact, they are two separate web sites and one of them calls another. 
- Backend uses external shop's APIs in order to get and populate data about products. Frontend just fetch this data.
