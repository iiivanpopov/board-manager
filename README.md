# Board Manager

A project to manage boards using Docker and Prisma.

## Installation

### Prerequisites

1. [Docker](https://docs.docker.com/engine/install/)
2. [Git](https://git-scm.com/downloads)

### Steps

### 1. Clone the Repository

```bash
git clone https://github.com/webfryingpan/board-manager.git
```

### 2. Configure Your Data

Modify the data in `backend/data` according to your requirements.

### 3. Set Up Environment Variables

Create and configure `.env` files in the `root`, `frontend` and `backend` directories.

### 4. Build the Project with Docker Compose

```bash
cd board-manager

docker-compose build
```

### 5. Run the Project

```bash
docker-compose up
```

### 7. Congratulations

Your project should now be up and running.

## Updating the app

### 1. Pull from repository

```bash
git pull
```

### 2. Build

```bash
docker-compose build
```
