🚀 Static Web App – Dockerized with Apache

static web application served using Apache HTTP Server in Docker. You can either:

- **Pull the prebuilt image from Docker Hub**
- **Or clone the repo and build the image locally**

---

## 📦 Project Structure

```
.
├── index.html
├── public/
│   ├── css/
│   │   └── index.css
│   └── js/
│       └── index.js
├── .htaccess
├── Dockerfile
└── docker-compose.yml
```

---

## ✅ Option 1: Run from Docker Hub (Prebuilt Image)

Download the `docker-compose.yml` file directly from the repository:
[Download docker-compose.yml](https://github.com/YAZZYD/static-webapp-on-docker/blob/master/docker-compose.yml)

```
cd \path\to\docker-compose-file
docker pull yazzyd/static-web-app
docker compose up -d image
```

Then open: [http://localhost](http://localhost)

---

## 🔧 Option 2: Build Locally from Source

1. **Clone the Repo**

   ```
   git clone https://github.com/YAZZYD/static-webapp-on-docker.git
   cd static-webapp-on-docker
   ```

2. **Build and Run with Docker Compose**
   ```
   docker compose up -d local
   ```

The app will be accessible at: [http://localhost:8080](http://localhost:8080)

---

## 🛑 Stop the Container

```
cd \path\to\docker-compose\
docker compose down
```

Or

```
docker ps
docker stop <container_id>
```

---

## 📁 Notes

- `.htaccess` is used to avoid 404 errors when typing wrong URL.

---

## 📝 Additional Information

- For troubleshooting, check container logs with:
  ```
  docker logs yazzyd
  ```

- You can delete built images and build your own image using:

```
docker images
docker rmi <image_id>
```
