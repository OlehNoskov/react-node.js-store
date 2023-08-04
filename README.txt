Online-store

Stack:
- PostgreSQL
- React.js
- Node.js
- express

For uploading files in application, inside folder "server" execute this command:
npm i express-fileupload

For generating unique file name inside folder "server" execute this command:
npm i uuid

For generating JWT inside folder "server" execute this command:
npm i jsonwebtoken bcrypt

For creating react application inside folder "client" execute this command:
npx create-react-app .
npm i axios react-router-dom mobx mobx-react-lite
npm install react-bootstrap bootstrap
npm i jwt-decode

Launching frontend:
npm start

Launching backend:
npm run dev

Creating and set up PostgreSQL database in docker:

1) docker run --name store-postgres -p 5432:5432 -e POSTGRES_PASSWORD=root -d postgres

2) docker exec -it docker_id bash

3) psql -h localhost -U postgres

4) CREATE DATABASE online_store;

5) \l - check existing database

