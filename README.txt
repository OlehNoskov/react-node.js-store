Creating and set up PostgreSQL database in docker:

1) docker run --name store-postgres -p 5432:5432 -e POSTGRES_PASSWORD=root -d postgres

2) docker exec -it docker_id bash

3) psql -h localhost -U postgres

4) CREATE DATABASE online_store;

5) \l - check existing database
