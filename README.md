<div align="center">

<img src="./front/src/assets/logo.png" alt="ChatRealTime logo" width="110" />

# ChatRealTime 💬⚡

**A real-time full-stack chat application built with React, Node.js, Express, MongoDB and Socket.IO.**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--Time-010101?style=flat-square&logo=socket.io&logoColor=white)](https://socket.io/)
[![GitHub](https://img.shields.io/badge/GitHub-FerdinandJuko-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/ferdinandjuko/Chat-Realtime)

</div>

---

## ✨ About the project

**ChatRealTime** is a personal full-stack messaging project focused on real-time communication between users.

The application combines a React frontend with an Express/MongoDB backend and uses **Socket.IO** for live messaging. Authentication, avatar setup, user retrieval and message persistence are handled through REST endpoints, while real-time events are exchanged through WebSockets.

The project is also a practical playground for working with:

- React component architecture
- REST API integration with Axios
- real-time communication with Socket.IO
- MongoDB data persistence with Mongoose
- user authentication and password hashing
- profile avatar generation
- client-side routing and state handling

---

## 🚀 Features

| Area | Implementation |
|---|---|
| Authentication | User registration and login |
| Security | Password hashing with `bcrypt` |
| Messaging | Real-time communication with `Socket.IO` |
| Persistence | MongoDB + Mongoose |
| Avatars | Local avatar generation with `@multiavatar/multiavatar` |
| API communication | Axios |
| Routing | React Router |
| UI styling | Styled Components |
| Notifications | React Toastify |
| Emoji support | Emoji Picker React |
| User discovery | Retrieve available users from the backend |

---

## 🧱 Tech Stack

### Frontend

<p>
<img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-6.14-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-1.4-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.IO_Client-4.7-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
<img src="https://img.shields.io/badge/Styled_Components-6.0-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" />
</p>

### Backend

<p>
<img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.IO-4.6-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
</p>

---

## 🏗️ Architecture

```text
┌──────────────────────────────┐
│          React App           │
│      localhost:3000          │
│                              │
│  Pages • Components • UI     │
│  Axios • Socket.IO Client    │
└──────────────┬───────────────┘
               │
        REST API + WebSocket
               │
               ▼
┌──────────────────────────────┐
│      Node.js / Express       │
│      localhost:5000          │
│                              │
│ Auth • Users • Messages      │
│ Socket.IO • Mongoose         │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│           MongoDB            │
│ mongodb://localhost:27017    │
│            /chat             │
└──────────────────────────────┘
```

---

## 📁 Project Structure

```text
Chat-Realtime/
│
├── back/
│   ├── controllers/
│   ├── ...
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── front/
    ├── src/
    │   ├── assets/
    │   ├── pages/
    │   ├── utils/
    │   └── ...
    ├── package.json
    └── .env
```

---

## ⚙️ Environment Variables

### Backend

Create a `.env` file inside the `back` directory:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/chat
```

### Frontend

Create a `.env` file inside the `front` directory:

```env
REACT_APP_URL_BACK=http://localhost:5000
```

> Do not commit environment files containing secrets or production credentials.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ferdinandjuko/Chat-Realtime.git
cd Chat-Realtime
```

### 2. Make sure MongoDB is running

The development configuration expects a local MongoDB instance:

```text
mongodb://localhost:27017/chat
```

### 3. Install and start the backend

```bash
cd back
npm install
npm start
```

The backend starts on:

```text
http://localhost:5000
```

### 4. Install and start the frontend

Open another terminal:

```bash
cd front
npm install
npm start
```

The React application starts on:

```text
http://localhost:3000
```

---

## 🔗 Repository

**GitHub:** [github.com/ferdinandjuko/Chat-Realtime](https://github.com/ferdinandjuko/Chat-Realtime)

### Clone

```bash
git clone https://github.com/ferdinandjuko/Chat-Realtime.git
```

---

## 👨‍💻 Author
<div align="center">

**Ferdinand Juko**

Backend Software Developer · PHP/Symfony · JavaScript/React

<h4>You can find me on 💬</h4>

<p>

<a href="mailto:rferdinandjuko@gmail.com" target="blank">
<img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/gmail.svg"
      alt="gmail"
      height="25"
      width="25" />
</a>
&emsp;
<a href="https://github.com/ferdinandjuko" target="blank">
<img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
      alt="github"
      height="25"
      width="25" />
</a>
&emsp;
<a href="https://www.linkedin.com/in/ferdinandjuko" target="blank">
<img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
      alt="linkedin"
      height="25"
      width="25" />
</a>

</p>

<h5>Thanks for visiting my project 😉</h5>

</div>

---

<div align="center">

### 💬 Built to explore real-time communication from frontend to database.

`React` • `Express` • `MongoDB` • `Socket.IO`

</div>