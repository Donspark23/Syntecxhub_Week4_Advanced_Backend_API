![GitHub stars](https://img.shields.io/github/stars/Donspark23/Syntecxhub_Week4_Advanced_Backend_API)
![GitHub forks](https://img.shields.io/github/forks/Donspark23/Syntecxhub_Week4_Advanced_Backend_API)

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

# 🚀 Advanced Backend API (Week 4 Project) built with Node.js, Express, and MongoDB.

Features:
- JWT Authentication & Authorization
- Role-Based Access Control (Admin/User)
- User Management System (Promote, Block/Unblock)
- Audit Logging System for Admin Actions
- Analytics Endpoints (User Stats & Logs)
- Security Middleware (Helmet, Rate Limiting, CORS)
- Global Error Handling

Designed with scalable MVC architecture and production-ready practices.

---

## 📌 Features

✅ User Authentication (JWT)  
✅ Role-Based Authorization (Admin/User)  
✅ User Management (Promote, Block, Unblock)  
✅ Audit Logging System (Track user actions)  
✅ Scheduled Jobs (Auto cleanup using cron)  
✅ RESTful API Architecture  
✅ Secure Password Hashing  

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- node-cron
- dotenv
- cors

---

## 📂 Project Structure
config/ controllers/ middleware/ models/ routes/ jobs/ server.js


---

## 🔐 Authentication

Uses JWT-based authentication.

### Register
POST /api/auth/register


### Login
POST /api/auth/login


---

## 👑 Admin Features

Only accessible to admin users:
GET    /api/users PATCH  /api/users/:id/promote PATCH  /api/users/:id/block PATCH  /api/users/:id/unblock


---

## 📊 Audit Logs

Tracks all important actions:
GET /api/logs


Example actions:
- PROMOTE_USER
- BLOCK_USER
- UNBLOCK_USER

---

## ⏱️ Scheduled Jobs

Automated cleanup using node-cron:

- Deletes logs older than 7 days
- Runs daily

Manual trigger:
POST /api/jobs/cleanup


---

## ⚙️ Environment Variables

Create a `.env` file:
MONGO_URI=your_mongodb_uri JWT_SECRET=your_secret_key


---

## 🚀 Getting Started

### 1. Install dependencies
npm install


### 2. Run server
npm run dev


---

## 🧪 Testing

Use Postman or any API client.

Add header for protected routes:
Authorization: Bearer YOUR_TOKEN


---

## 💡 Key Learnings

- Implemented secure authentication system
- Built role-based access control
- Designed audit logging system
- Automated backend tasks using cron jobs
- Structured scalable backend architecture

---

## 📌 Author

**Uchenna Chidera Onyesom**

---

## ⭐ If you like this project

Give it a star ⭐ and connect with me on LinkedIn!
