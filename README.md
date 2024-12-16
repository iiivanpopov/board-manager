## Installation

### Prerequisites

1. [Docker](https://docs.docker.com/engine/install/)
2. [Git](https://git-scm.com/downloads)

### Steps

### 1. Clone the Repository

```bash
git clone https://github.com/webfryingpan/board-manager.git
```

### 2. Configure

Create and set up the boards/defects/defect types options in `backend/data` folder.
(defects.txt, defect_types.txt, products.txt)

Create and configure `.env` files in the `./`, `./frontend` and `./backend` directories.

### 4. Build the Project

```bash
docker-compose build
```

### 5. Run the Project

```bash
docker-compose up
```

## Updating

### 1. Pull from repository

```bash
git pull
```

### 2. Build

```bash
docker-compose build
```
