# Flask DevOps Learning Dashboard

A responsive Flask application with HTML, CSS and JavaScript.

## Run locally in Ubuntu / WSL

```bash
cd /mnt/c/Users/Dell/Downloads/flask-devops-dashboard
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:5000

## API endpoints

- `/` - Dashboard
- `/health` - Health check JSON
- `/api/stats` - Dashboard statistics JSON

## Build and run with Docker

```bash
docker build -t flask-devops-dashboard:1.0 .
docker run --name flask-dashboard -p 5000:5000 flask-devops-dashboard:1.0
```

Open http://localhost:5000

Stop the container with `Ctrl+C` if running in the foreground, or:

```bash
docker stop flask-dashboard
docker rm flask-dashboard
```

## Push to Docker Hub

Create a public repository named `flask-devops-dashboard` under your Docker Hub account, then:

```bash
docker login
docker tag flask-devops-dashboard:1.0 tanmaykshirsagar/flask-devops-dashboard:1.0
docker push tanmaykshirsagar/flask-devops-dashboard:1.0
```
