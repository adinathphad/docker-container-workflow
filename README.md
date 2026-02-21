# 🚀 Dockerized Node.js Hello World App

This project demonstrates how to containerize a simple Node.js Express application using Docker.

---

## 📁 Project Structure


├── Dockerfile

├── app.js

├── package.json

├── .gitignore

├── .dockerignore

└── README.md

---

## 🏗 Build Image

docker build -t myimage:v1 .

---

## ▶ Run Container

docker run -dp 8080:8080 myimage:v1

---

## 🌐 Test

curl localhost:8080

---

## 🛑 Stop

docker stop $(docker ps -q)
