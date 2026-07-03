#!/bin/bash
docker compose -f infra/docker-compose.yaml up -d --build
echo "RSHA platform is starting..."
