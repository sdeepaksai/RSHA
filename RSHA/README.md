# RSHA - Red Sheep Health & Assurance

A microservices-based platform for livestock management, traceability, and RFID tracking. Built with NestJS and deployed on Kubernetes.

## Project Overview

RSHA is a comprehensive system designed to track and manage livestock through their entire lifecycle, from farm to processing facility. The system provides real-time RFID tracking, detailed traceability records, and health/assurance monitoring.

## Architecture

### Microservices

1. **Livestock Service** (Port 3000)
   - Manages livestock data and checkpoints
   - Tracks animal arrivals, status, and movement
   - Entities: Livestock, Checkpoint

2. **Traceability Service** (Port 3001)
   - Manages product traceability through the supply chain
   - Tracks carcasses, cuts, and packaged products
   - Entities: Pack, PackComponent, Cut, Carcass, Farm

3. **RFID Adapter** (Port 3002)
   - Interfaces with RFID readers and devices
   - Records tag scan events
   - Maintains active tag registry

### Infrastructure

- **PostgreSQL**: Primary database for all services
- **Kafka**: Message broker for inter-service communication
- **API Gateway**: Nginx-based gateway for routing
- **Kubernetes**: Container orchestration

## Project Structure

```
RSHA/
├── services/
│   ├── livestock-service/
│   ├── traceability-service/
│   └── rfid-adapter/
├── infra/
│   ├── docker/
│   ├── k8s/
├── api/
│   └── openapi.yaml
├── .github/
│   └── workflows/
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- Docker
- Kubernetes cluster (for deployment)

### Development

1. Install dependencies for each service:
```bash
cd services/livestock-service
npm install
npm run dev
```

2. Repeat for other services in separate terminals

### Docker Build

```bash
docker build -t rsha/livestock-service:latest ./services/livestock-service
docker build -t rsha/traceability-service:latest ./services/traceability-service
docker build -t rsha/rfid-adapter:latest ./services/rfid-adapter
```

### Kubernetes Deployment

1. Create namespace and resources:
```bash
kubectl apply -f infra/k8s/namespaces.yaml
kubectl apply -f infra/k8s/postgres-statefulset.yaml
kubectl apply -f infra/k8s/kafka-statefulset.yaml
kubectl apply -f infra/k8s/api-gateway-deploy.yaml
kubectl apply -f infra/k8s/livestock-deploy.yaml
kubectl apply -f infra/k8s/traceability-deploy.yaml
kubectl apply -f infra/k8s/rfid-adapter-deploy.yaml
```

2. Verify deployments:
```bash
kubectl get deployments -n rsha
kubectl get services -n rsha
```

## API Documentation

API specifications are available in `api/openapi.yaml`. Key endpoints:

- `GET/POST /livestock` - Livestock management
- `GET/POST /traceability/pack` - Pack traceability
- `GET/POST /traceability/carcass` - Carcass tracking
- `GET/POST /rfid/scan` - RFID operations

## CI/CD

GitHub Actions workflows are configured for:
- Automated testing on PR
- Docker image builds
- Registry pushes on main branch

Workflows: `.github/workflows/ci-*.yml`

## Database Schema

### Livestock Service
- `livestock`: Main livestock records
- `checkpoint`: Movement checkpoints

### Traceability Service
- `pack`: Packaged products
- `pack_component`: Components within packs
- `cut`: Meat cuts
- `carcass`: Processed carcasses
- `livestock`: Reference to original animals
- `farm`: Source farm information

## Environment Variables

Create `.env` files in each service with:
```
NODE_ENV=development
DATABASE_URL=postgresql://user:password@postgres:5432/rsha_db
KAFKA_BROKERS=kafka:9092
```

## License

MIT

## Contact

For questions or support, contact the RSHA development team.
