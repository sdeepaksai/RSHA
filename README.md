# RSHA — RFID Slaughterhouse Platform

This repository contains the full microservice-based livestock traceability platform.

## Services
- Livestock Service (status + history)
- Traceability Service (pack → farm chain)
- RFID Adapter (vendor webhook → Kafka)

## Infra
- Docker Compose (Postgres + Kafka + Services)
- NGINX API Gateway
- GitHub Actions CI

## Run locally

```bash
./scripts/dev-up.sh
```
