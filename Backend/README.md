# 🧠 Digital Twin – Real-Time Machine Simulation

A fullstack web application that simulates a physical machine in real time using data from sensors (MQTT/RabbitMQ), visualized in 3D using Three.js.

![CI](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/ci.yml/badge.svg)

---

## 🚀 Tech Stack

**Frontend:**
- React + TypeScript
- Three.js for 3D visualization

**Backend:**
- Node.js + Express + TypeScript
- WebSockets / MQTT / RabbitMQ
- Zod for validation
- Prisma ORM

**Databases:**
- MongoDB (sensor data, logs, raw payloads)
- MySQL (structured data: users, machine config)

**Infrastructure:**
- Docker + Docker Compose
- GitHub Actions (CI/CD)

---

## ✅ Features

- Real-time machine simulation based on incoming sensor data
- Interactive 3D control panel
- Configuration options for simulation parameters
- Historical data storage and analysis
- CI pipeline with Docker build and optional tests

---

## 📦 Local Development

```bash
# Start the full stack using Docker
docker-compose up --build
