docker pull postgres

docker run --name db-name -e POSTGRES_PASSWORD=password -d -p 5555:5432 postgres

knex migrate:latest

This is starter repository.

Knex integration
JWT & Local auth
Some helpers
