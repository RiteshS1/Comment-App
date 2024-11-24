# 🎉 Comment App with RBAC

A **Comment App** showcasing **Role-Based Access Control (RBAC)** implementation with user roles like **Viewer**, **Editor**, and **Admin**. This project demonstrates secure authentication, role-specific access, and a seamless user experience.

---

## 🌐 Live Link: [Click here](https://comment-app-gilt-five.vercel.app/)

- **Frontend**: [Comment App on Vercel] 
- **Backend API**: [Comment App API on Render]
---

## ✨ Features

- **Role-Based Access Control (RBAC)**:
  - **Viewer**: Read-only access to comments.
  - **Editor**: Read and write comments.
  - **Admin**: Full access including admin dashboard.
- **Authentication**: Secure login and signup using JSON Web Tokens (JWT).
- **Responsive Design**: Built with mobile-first responsiveness.
- **Modern Tech Stack**: React, Node.js, Express, MongoDB.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Create React App)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Frontend on **Vercel**, Backend on **Render**

---
## ⚠️ Attention

This project is for **educational purposes only** and demonstrates the implementation of **Role-Based Access Control (RBAC)**.  
Please **avoid using your main email or passwords** as this project may have security flaws. Use it only for learning and exploration.

---

## 🧪 Demo Accounts

Use the following credentials to explore the app:

- **Viewer**  
  - Username: `viewer@eg.com`  
  - Password: `viewer1`
- **Editor**  
  - Username: `editor@eg.com`  
  - Password: `editor1`
- **Admin**  
  - Username: `admin@eg.com`  
  - Password: `admin1`

---

## 🤝 Open for Contributions

Contributions are welcome! If you'd like to contribute, feel free to fork the repository, make improvements, and submit a pull request.  
Let's collaborate and make this project even better!

## 🛠️ Setup Instructions

Follow these steps to set up the project locally:

### Prerequisites
- Ensure you have **Node.js** and **npm** installed on your system.
- Install **Git** for version control.

### Steps to Clone and Run
1. **Clone the Repository**  
   Clone the repository using the following command:
   ```bash
   git clone https://github.com/your-username/comment-app.git
2. **Set up the Backend**
  Navigate to the backend folder:
  ```bash
  cd backend
```
Install dependencies:
```
npm install
```
Create a .env file and configure it with the following:
```MONGO_URI=<your-mongo-db-connection-string>
  JWT_SECRET=<your-jwt-secret>
  PORT=5000
```
Start the backend server:
```
node index.js
```
3. Set up the Frontend
Navigate to the frontend folder:
cd ../frontend
Install dependencies:
```
npm install
```
Create a .env file and configure it with the following:
```
REACT_APP_API_BASE=http://localhost:5000/api
```
Start the frontend development server:
```
npm start
```
``
