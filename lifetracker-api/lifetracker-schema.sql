#!/bin/bash

read -p "You're about to delete the lifetracker and lifetracker_test databases. Are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Dropping lifetracker database..."
    psql -U jordanward -c "DROP DATABASE IF EXISTS lifetracker;"
    echo "Creating lifetracker database..."
    psql -U jordanward -c "CREATE DATABASE lifetracker;"
    echo "Applying schema to lifetracker database..."
    psql -U jordanward -d lifetracker -f lifetracker-schema.sql

    echo "Dropping lifetracker_test database..."
    psql -U jordanward -c "DROP DATABASE IF EXISTS lifetracker_test;"
    echo "Creating lifetracker_test database..."
    psql -U jordanward -c "CREATE DATABASE lifetracker_test;"
    echo "Applying schema to lifetracker_test database..."
    psql -U jordanward -d lifetracker_test -f lifetracker-schema.sql
else
    echo "Operation cancelled."
fi

-- chmod +x lifetracker-schema.sql
-- ./lifetracker-schema.sql