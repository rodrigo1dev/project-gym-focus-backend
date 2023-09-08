#!/bin/sh

echo "Waiting for PostgresSQL..."

while ! nc -z postgres 5432; do
  sleep 0.1
done

echo "PostgreSQL started."

yarn prisma generate

yarn prisma migrate dev

yarn start:dev
